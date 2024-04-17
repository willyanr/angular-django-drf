
from django.dispatch import receiver
from django.db.models import Sum
import datetime
from django.db import models
from menu.models import Menu

from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver

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
    STATUS_CHOICES = (
        ('Aberto', 'Aberto'),
        ('Fechado', 'Fechado')
    )
    status = models.CharField(max_length=10, choices=STATUS_CHOICES)
    TABLE_CHOICES = (
        ('Mesa 01', 'Mesa 01'),
        ('Mesa 02', 'Mesa 02')
    )
    table = models.CharField(max_length=10, choices=TABLE_CHOICES)



        
class Revenue(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='user', on_delete=models.CASCADE)
    menu_item = models.ForeignKey(Menu, on_delete=models.CASCADE) 
    box = models.ForeignKey(CashBox, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    date = models.DateTimeField(auto_now_add=True)

    
    def __str__(self):
        return f"{self.quantity}x {self.menu_item.name}"
     
     
 

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        
        total_price = self.menu_item.price * self.quantity
        box_instance = self.box

        
        
        Transaction.objects.create(
            type='Receita',
            amount=total_price,
            description=f"{self.quantity}x {self.menu_item.name}",
            date=self.date,  
            box=box_instance,
            quantity=self.quantity, 
            status='Aberto',
            
        )
   
            
        
        
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
    
    
