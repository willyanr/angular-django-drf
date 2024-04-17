from django.db import models
from django.conf import settings

class Category(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='category_user', on_delete=models.CASCADE)
    name = models.CharField(max_length=20)


    def __str__(self):
        return self.name

class Menu(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='menu_user', on_delete=models.CASCADE)
    name = models.CharField(max_length=30)
    category = models.ForeignKey(Category, related_name='category', on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    cost = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    status = models.BooleanField(default=True)

    def __str__(self):
        return self.name
