
from django.urls import path
from .views import index


urlpatterns = [
    path('', index),
    path('home', index),
    path('O-X', index),
    path('create-profile', index),
]