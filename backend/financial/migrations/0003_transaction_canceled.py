# Generated by Django 4.2.7 on 2024-04-23 07:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('financial', '0002_transaction_delivery'),
    ]

    operations = [
        migrations.AddField(
            model_name='transaction',
            name='canceled',
            field=models.BooleanField(default=False),
        ),
    ]
