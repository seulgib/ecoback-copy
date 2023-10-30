from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from .serializers import *

# Create your views here.
@api_view(['GET', 'POST', 'PATCH'])
def user_create(request):
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(data=serializer.data)
    elif request.method == 'POST':
        new_user = UserSerializer(data=request.data)
        if new_user.is_valid(raise_exception=True):
            new_user.save()
            return Response(data=new_user.data)
        
@api_view(['GET', 'POST'])
def event_create(request):
    if request.method == 'GET':
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True)
        return Response(data=serializer.data)
    elif request.method == 'POST':
        new_event = EventSerializer(data=request.data)
        if new_event.is_valid(raise_exception = True):
            new_event.save()
            return Response(data=new_event.data)
        
@api_view(['GET', 'POST'])
def barcode_create(request):
    if request.method == 'GET':
        barcodes = Barcode.objects.all()
        serializer = BarcodeSerializer(barcodes, many=True)
        return Response(data=serializer.data)
    elif request.method == 'POST':
        new_barcodes = BarcodeSerializer(data=request.data)
        if new_barcodes.is_valid(raise_exception = True):
            new_barcodes.save()
            return Response(data=new_barcodes.data)