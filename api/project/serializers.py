
from rest_framework import serializers
from .models import Role, Logs
from django.contrib.auth import get_user_model
User = get_user_model()

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