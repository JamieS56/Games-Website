from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    #def get_high_score(game):
    #return score

    #def get_overall_score():
    #return score
    
