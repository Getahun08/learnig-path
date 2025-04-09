from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import userserializer  

@api_view(['GET'])
def get_user(request):
    user_data = {'name': "gech", 'age': 23}
    serialized_user = userserializer(user_data)
    return Response(serialized_user.data)
@api_view(['POST'])
def create_user(request):
    user_serializer = userserializer(data=request.data)  
    if user_serializer.is_valid():
        user_serializer.save() 
        return Response(user_serializer.data, status=status.HTTP_201_CREATED)  
    else:
        return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)  
