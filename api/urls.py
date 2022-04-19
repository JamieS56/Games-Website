from django.urls import path
from .import views


urlpatterns = [
    path('users/', views.ProfileList, name='listcreate'),
    path('get-profile/', views.getProfile, name='getProfile'),
    path('create-profile/', views.CreateProfile, name='createProfile'),
    path('login/', views.Login, name='login'),
]