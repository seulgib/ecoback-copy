from django.urls import path
from .views import *
from . import views

app_name = "main"
urlpatterns = [
    path('', views.user_create),
]