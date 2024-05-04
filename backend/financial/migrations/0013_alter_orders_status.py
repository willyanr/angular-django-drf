# Generated by Django 5.0.4 on 2024-05-03 05:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('financial', '0012_remove_orderitem_amount_alter_orders_total'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orders',
            name='status',
            field=models.CharField(choices=[('OPEN', 'Open'), ('PREPARATION', 'In preparation'), ('READY', 'Ready'), ('CLOSED', 'Closed'), ('CANCELED', 'Canceled')], max_length=11),
        ),
    ]