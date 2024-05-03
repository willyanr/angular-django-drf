
from django.db.models import Sum
import datetime
from django.db import models
from menu.models import Menu
from django.utils import timezone
from django.conf import settings



class CashBox(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='cash_boxes', on_delete=models.CASCADE)
    name = models.TextField(default='Meu Caixa')
    value_start = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    total_balance = models.DecimalField(max_digits=10, decimal_places=5, default=0)
    date = models.DateField()
    date_close = models.DateField(null=True, blank=True)

    def calculate_balance(self):
        entries = self.transactions.filter(type='Receita').aggregate(Sum('amount'))['amount__sum'] or 0
        exits = self.transactions.filter(type='Despesa').aggregate(Sum('amount'))['amount__sum'] or 0
        self.total_balance = self.value_start + entries - exits
        self.save()



        

    def close(self):
        if self.date_close is not None: 
            return

        if self.date != datetime.date.today(): 
            return 

        self.date_close = datetime.date.today()  
        self.calculate_balance()  
        self.save()  

    def __str__(self):
        return self.name
        
    

class Orders(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='user', on_delete=models.CASCADE)
    type = models.CharField(max_length=7, default='Receita')
    date = models.DateTimeField(auto_now_add=True)
    box = models.ForeignKey(CashBox, related_name='orders', on_delete=models.CASCADE)
    STATUS_CHOICES = (
        ('OPEN', 'Open'),
        ('PREPARATION', 'In preparation'),
        ('READY', 'Ready'),
        ('CLOSED', 'Closed'),
        ('CANCELED', 'Canceled')

    )
    status = models.CharField(max_length=11, choices=STATUS_CHOICES)
    TYPE_ORDER_CHOICES = (
        ('Mesa', 'Mesa'),
        ('Delivery', 'Delivey')
    )
    type_order = models.CharField(max_length=10, choices=TYPE_ORDER_CHOICES)
    open_timestamp = models.DateTimeField(blank=True, null=True)
    preparation_timestamp = models.DateTimeField(blank=True, null=True)
    ready_timestamp = models.DateTimeField(blank=True, null=True)
    closed_timestamp = models.DateTimeField(blank=True, null=True)
    total = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    
    def calculate_total(self):
        total = sum(item.menu_item.price * item.quantity for item in self.items.all())
        self.total = total
        self.save()  # Salva o pedido após atualizar o total
        return total
    
    def calculate_time_order(self):
        if self.closed_timestamp:
            time = self.closed_timestamp - self.open_timestamp
            return time
        else:
            return None

   

class OrderItem(models.Model):
    order = models.ForeignKey(Orders, related_name='items', on_delete=models.CASCADE)
    menu_item = models.ForeignKey(Menu, on_delete=models.CASCADE) 
    quantity = models.IntegerField(default=1)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        self.order.calculate_total() 

    def __str__(self):
        return f"{self.quantity}x {self.menu_item.name}"
    
    
    

class Transaction(models.Model):
    TYPE_CHOICES = (
        ('Receita', 'Receita'),
        ('Despesa', 'Despesa')
    )
    type = models.CharField(max_length=7, choices=TYPE_CHOICES)
    amount = models.DecimalField(max_digits=5, decimal_places=2)
    description = models.TextField(max_length=255)
    date = models.DateTimeField(auto_now_add=True)
    box = models.ForeignKey(CashBox, related_name='transactions', on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    

    
    



        

     
 

        
        
class Expense(models.Model):
    name = models.TextField(max_length=30)
    value = models.DecimalField(max_digits=5, decimal_places=2)
    date = models.DateTimeField()
    box = models.ForeignKey(CashBox, related_name='expenses', on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        Transaction.objects.create(type='Despesa', amount=self.value, description=self.name, box=self.box)

class Financeiro(models.Model):
    ticket_medio = models.DecimalField(max_digits=5, decimal_places=2)
    
    
