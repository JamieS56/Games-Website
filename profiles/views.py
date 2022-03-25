from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from profiles.serializers import UserSerializer
from profiles.models import Profile
from django.contrib.auth.models import User


@api_view(['GET', 'POST'])
def ProfileList(request):

    if request.method == 'GET':
        queryset = User.objects.all()
        serializer_class = UserSerializer
    return Response(list(queryset.values()))


@api_view(['GET', 'POST'])
def CreateProfile(request):

    if request.method == 'GET':
        queryset = User.objects.all()
        serializer_class = UserSerializer
    return Response(list(queryset.values()))