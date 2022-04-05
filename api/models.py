from django.db import models
from django.contrib.auth.models import User

# Create your models here.
User._meta.get_field('email')._unique = True

class CustomUser(User):
    class Meta:
        proxy = True
    
    REQUIRED_FIELDS = ['email', 'username', 'first_name', 'last_name', 'password']
