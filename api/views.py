from msilib.schema import Error
from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.serializers import UserSerializer

from django.contrib.auth.hashers import make_password, check_password

from django.contrib.auth.models import User

import json

@api_view(['GET', 'POST'])
def ProfileList(request):

    if request.method == 'GET':
        queryset = User.objects.all()
        serializer_class = UserSerializer
    return Response(list(queryset.values()))

@api_view(['GET', 'POST'])
def getProfile(request):

    request_data = request.data
    print(request_data)
    
    if request.method == 'POST':
        try:
            print(f'request data {request_data["username"]}')
            print(User.objects.all())
            user = User.objects.get(username=request_data['username'])
            print(f'user is... {user}')
            # user = json.dumps(user)

        except:
            print('fuck')
            return Response(status=404)

    return Response(data = {
        'username':user.username,
        'email': user.email,
        'first_name': user.first_name
    })


@api_view(['POST'])
def CreateProfile(request):

    if request.method == 'POST':

        # If method is POST it will put the data into an instance of the User serializer.
        request_data = request.data
        serializer = UserSerializer(data=request_data)

        if serializer.is_valid():

            # The validity is checked of the serializer and if valid attempted to save and returns status 200.
            # If an error occurs it is caught and returned as a server error.
            try :
                serializer.password = make_password(request_data['password'])
                print('sucess')
                print(serializer.password)
                # serializer.save()
                return Response(status=200)
            except Error as e :
                print(e)
                return Response(data=f'server error {e}', status=500) 
        
        else:

            # If the serializer is not valid server returns whats wrong and 400 status
            return Response(data=serializer.errors, status=400)


@api_view(['POST'])
def Login(request):

    if request.method == 'POST':

        # If method is POST it will put the data into an instance of the User serializer.
        request_data = request.data
        try :
            user = User.objects.get(username=request_data['username'])
            if user.password == request_data['password']:

                return Response(data=True, status=200)
            else :
                return Response(data=False,status=401)

        except User.DoesNotExist:
            return Response(data=False, status=401)
            


