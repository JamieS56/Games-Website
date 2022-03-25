from django.urls import path
from .views import ProfileList, CreateProfile

app_name = 'blog_api'

urlpatterns = [
    path('', ProfileList, name='listcreate'),
    path('create-profile', CreateProfile, name='listcreate'),
]