from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone
from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import gettext_lazy as _
import random


class CustomUserManager(BaseUserManager):
    """
    Custom user model manager where email is the unique identifiers
    for authentication instead of usernames.
    """
    def create_user(self, email, password, **extra_fields):
        """
        Create and save a user with the given email and password.
        """
        if not email:
            raise ValueError(_("The Email must be set"))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        """
        Create and save a SuperUser with the given email and password.
        """
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError(_("Superuser must have is_staff=True."))
        if extra_fields.get("is_superuser") is not True:
            raise ValueError(_("Superuser must have is_superuser=True."))
        return self.create_user(email, password, **extra_fields)

class CustomUser(AbstractUser):
    email = models.EmailField(_("email address"), unique=True)
    ymp_id=models.CharField(max_length = 6,  unique=True, default=0)
    date_joined=models.DateTimeField(default=timezone.now)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email

    


class Role(models.Model):
    department = models.CharField(max_length=255)
    ymp_id = models.IntegerField(max_length=8)
    role_name = models.CharField(max_length=100, blank=True)
    role_level = models.IntegerField(max_length=7)
    ordinal = models.IntegerField()

class Logs(models.Model):
    ymp_id = models.IntegerField(max_length=8)
    name = models.CharField(max_length=255)
    hours = models.IntegerField(max_length=7)
    description = models.TextField()
    ordinal = models.IntegerField() 

class HourRecord(models.Model):
    ymp_id=models.CharField(max_length = 6, default=0)
    hours = models.IntegerField()
    work_description = models.CharField(max_length=500)
    date = models.DateField()

    def __str__(self):
        return self.ymp_id