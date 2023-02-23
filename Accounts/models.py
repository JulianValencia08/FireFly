from django.db import models
from djongo import models
from django.contrib.auth.models import AbstractUser

class Usuario(AbstractUser):
    username = models.CharField(max_length=50, unique=True)
    intereses = models.CharField(max_length=255)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []
    class Meta:
        db_table = 'usuarios'