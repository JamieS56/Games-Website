from enum import unique
from django.contrib.auth.models import User
from django.forms import EmailField
from .models import CustomUser
from rest_framework import serializers
from rest_framework.validators import UniqueValidator


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email', 'password',]

