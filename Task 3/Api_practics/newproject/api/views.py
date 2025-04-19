from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializer import Userserializer
from .models import user

@api_view(['GET'])
def get_user(request):
    return Response(Userserializer({"name":"getahun","age":34}).data)
@api_view(['POST'])
def create_user(request):
    serializer = Userserializer(data=request.data)    
    if serializer.is_valid():
        serializer.save() 
        return Response(serializer.data, status=status.HTTP_201_CREATED)  
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  
