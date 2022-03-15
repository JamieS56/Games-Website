from rest_framework import generics
from profiles.serializers import UserSerializer
from profiles.models import Profile
from django.contrib.auth.models import User



class ProfileList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
