
from rest_framework import serializers
from .models import Role, Logs, HourRecord
from django.contrib.auth import get_user_model
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class UserGroupCountSerializer(serializers.Serializer):
    count = serializers.IntegerField()

class RolesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields =  '__all__'

class LogsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Logs
        fields = '__all__'

class HoursSerializer(serializers.ModelSerializer):
    class Meta:
        model = HourRecord
        fields = '__all__'