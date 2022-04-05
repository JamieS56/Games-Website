from django.core.exceptions import ValidationError
from rest_framework.response import Response

from django.contrib.auth.models import User
from .models import CustomUser

def validate_email(value):
    if User.objects.filter(email = value).exists():
        print(value)
        print('hey')
        return False

    else:

        return True


