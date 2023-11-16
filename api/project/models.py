from django.db import models

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