# Generated by Django 4.2.7 on 2024-04-23 07:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('financial', '0003_transaction_canceled'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='transaction',
            name='canceled',
        ),
        migrations.AlterField(
            model_name='transaction',
            name='status',
            field=models.CharField(choices=[('Aberto', 'Aberto'), ('Fechado', 'Fechado'), ('Cancelado', 'Cancelado')], max_length=10),
        ),
    ]
