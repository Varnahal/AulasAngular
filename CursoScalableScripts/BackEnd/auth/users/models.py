from django.db import models
from django.contrib.auth.models import AbstractUser #usuario padrão do django

# Create your models here.

class User(AbstractUser):
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length = 255,unique = True)
    password = models.CharField(max_length=255)
    username = None #dizendo ao django que o username não vai ser usado

    USERNAME_FIELD = 'email' #fazendo com que a autenticação use o email ao invez do username
    REQUIRED_FIELDS = []