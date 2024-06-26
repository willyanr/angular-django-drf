# Generated by Django 5.0.4 on 2024-05-03 22:45

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('financial', '0019_alter_orders_payments'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='orders',
            name='payments',
        ),
        migrations.AddField(
            model_name='methodpayments',
            name='order',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='payments', to='financial.orders'),
        ),
    ]
