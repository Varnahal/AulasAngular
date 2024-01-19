from django.db import models
from django.contrib.auth.models import AbstractUser
from datetime import timedelta

# Create your models here.
class User(AbstractUser):
    name = models.CharField(max_length = 255)
    email = models.EmailField(max_length = 255,unique=True)
    password = models.CharField(max_length = 255)

    token_validity_duration = timedelta(seconds=30)

    REQUIRED_FIELDS = []
    USERNAME_FIELD = 'email'

