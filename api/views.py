
from http.client import HTTPResponse
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponse, Http404
from api import serializers
from api.serializers import UserSerializer

from .customValidators import validate_email

import json

from django.contrib.auth.models import User


@api_view(['GET', 'POST'])
def ProfileList(request):

    if request.method == 'GET':
        queryset = User.objects.all()
        serializer_class = UserSerializer
    return Response(list(queryset.values()))


@api_view(['POST'])
def CreateProfile(request):


    if request.method == 'POST':
        request_data = request.data
        serializer = UserSerializer(data=request_data)

        if not serializer.is_valid():
            return Response(data=serializer.errors, status=400)
        
        else:
            try :
                print('3rd')
                # serializer.save()
                return Response(status=200)
            except :
                print('failed')
                return Response(data='server error', status=500)

