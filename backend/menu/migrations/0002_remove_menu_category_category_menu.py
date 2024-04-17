# Generated by Django 5.0.3 on 2024-04-15 19:53

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='menu',
            name='category',
        ),
        migrations.AddField(
            model_name='category',
            name='menu',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='category_menu', to='menu.menu'),
            preserve_default=False,
        ),
    ]
