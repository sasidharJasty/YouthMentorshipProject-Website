from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone
from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import gettext_lazy as _
import random
from django.core.mail import send_mail
from django.contrib.auth.models import Group, User
from api.settings import EMAIL_HOST_USER
from django.contrib.auth import get_user_model



class CustomUserManager(BaseUserManager):
    """
    Custom user model manager where email is the unique identifiers
    for authentication instead of usernames.
    """
    def create_user(self, email, password, group="Student" , **extra_fields):
        """
        Create and save a user with the given email and password.
        """
        if not email:
            raise ValueError(_("The Email must be set"))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        group = Group.objects.get(name=group)
        user.groups.add(group) 
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
        return self.create_user(email, password, group="Admin",**extra_fields)

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

from django.db import models
from django.core.mail import send_mail
from api.settings import EMAIL_HOST_USER
from django.apps import apps

class HourRecord(models.Model):
    ymp_id = models.CharField(max_length=6, default=0)
    hours = models.IntegerField()
    work_description = models.CharField(max_length=500)
    teamlead_email = models.EmailField(_("email address"))
    next_week_plans = models.CharField(max_length=500)
    approved = models.BooleanField(default=False)
    denied = models.BooleanField(default=False)
    date = models.DateField()

    def __str__(self):
        CustomUser = apps.get_model('project', 'CustomUser')  # Replace 'app_name' with your app's name
        user = CustomUser.objects.filter(ymp_id=self.ymp_id).first()
        return str(self.id)+" "+str(self.ymp_id)+" "+str(user.username)+" "+str(self.date)

    def save(self, *args, **kwargs):
        is_new_record = not self.pk  # Check if it's a new record

        super().save(*args, **kwargs)  # Call the original save method

        if is_new_record:
            # If it's a new record, send an email

            # Query for CustomUser with the same ymp_id
            CustomUser = apps.get_model('project', 'CustomUser')  # Replace 'app_name' with your app's name
            user = CustomUser.objects.filter(ymp_id=self.ymp_id).first()

            if user:
                # If user is found, send an email
                subject = f"Hour Request for {user.username} from Youth Mentorship Project on {self.date}"
                message = f"Hi {self.teamlead_email},\n\n{user.username} has just requested {self.hours} hour(s) for the week of {self.date}.\n\nWork description for the week: {self.work_description}\n{user.username}'s plans for next week: {self.next_week_plans}\n\nPlease approve or decline now!\nHere is the id to find to approve the hours: \"{self.id} {self.ymp_id} {user.username} {self.date}\"\n\nThank You!"
                from_email = EMAIL_HOST_USER  # Use your email host user here
                recipient_list = [self.teamlead_email]
                send_mail(subject, message, from_email, recipient_list, fail_silently=False)