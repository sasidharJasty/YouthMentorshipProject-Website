from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Role, Logs

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class RolesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields =  '__all__'

class LogsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Logs
        fields = '__all__'