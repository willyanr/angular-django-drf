from django.db import models
from django.conf import settings


class Profile(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='profile', on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to='profile_images/', blank=True, null=True)
    city = models.CharField(max_length=100)
    cep = models.CharField(max_length=10)
    cnpj = models.CharField(max_length=14)
    whatsapp = models.CharField(max_length=20)
    company = models.CharField(max_length=30, blank=True)

    def __str__(self):
        return self.user.username