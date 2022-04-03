from django.urls import path
from .import views


urlpatterns = [
    path('users/', views.ProfileList, name='listcreate'),
    path('create-profile/', views.CreateProfile, name='createProfile'),
]