
from django.db.models.signals import pre_delete
from django.dispatch import receiver
from models import Revenue, Transaction

@receiver(pre_delete, sender=Revenue)
def delete_revenue_transaction(sender, instance, **kwargs):
    total_price = instance.menu_item.price * instance.quantity
    try:
   
        transaction = Transaction.objects.get(
            type='Receita',
            amount=total_price,
            description=f"{instance.quantity}x {instance.menu_item.name}",
            date=instance.date,
            quantity=instance.quantity,
            box=instance.caixa 
        )
        box_instance = transaction.box
        transaction.delete()
        box_instance.calculate_balance()
    except Transaction.DoesNotExist:
        pass
