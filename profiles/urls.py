from django.urls import path
from .views import ProfileList

app_name = 'blog_api'

urlpatterns = [
    path('', ProfileList, name='listcreate'),
]