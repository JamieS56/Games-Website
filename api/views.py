
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponseRedirect
from api.serializers import UserSerializer

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
        data = json.loads(request.body.decode('utf-8'))
        print(data)
        print('2nd')
        
        serializer = UserSerializer(data=data)
        

        if serializer.is_valid():
            print('3rd')
            serializer.save()

        return HttpResponseRedirect('http://127.0.0.1:8000/create-profile')
