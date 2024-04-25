# Generated by Django 4.2.7 on 2024-04-24 02:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('financial', '0007_alter_orders_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orders',
            name='status',
            field=models.CharField(choices=[('OPEN', 'Open'), ('PREPARATION', 'In preparation'), ('READY', 'Ready'), ('CLOSED', 'Closed')], max_length=11),
        ),
    ]
