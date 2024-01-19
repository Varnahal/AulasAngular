# django imports
from django.contrib.auth import login
from django.shortcuts import get_object_or_404

# rest_framework imports
from rest_framework import generics, authentication, permissions
from rest_framework.settings import api_settings
from rest_framework.authtoken.serializers import AuthTokenSerializer
import rest_framework.status  as status
from rest_framework.response import Response
from rest_framework.views import APIView

# knox imports
from knox.views import LoginView as KnoxLoginView
from knox.auth import TokenAuthentication

# local apps import
from .serializers import UserSerializer, AuthSerializer
from .models import User

from rest_framework.authentication import SessionAuthentication

# Create your views here.

class RegisterView(generics.CreateAPIView):
    serializer_class = UserSerializer
    # def post(self,request):
    #     data = request.data
    #     serializer = UserSerializer(data=data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         user = User.objects.get(email = request.data['email'])
    #         user.set_password(request.data['password'])
    #         user.save()
    #         return Response({'data':{'name':user.name,'email':user.email}},status.HTTP_201_CREATED)
    #     return Response({'usuario já cadastrado'},status.HTTP_400_BAD_REQUEST)
    
class LoginView(KnoxLoginView):
    # login view extending KnoxLoginView
    serializer_class = AuthSerializer
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginView, self).post(request, format=None)   

    
class UserView(generics.RetrieveUpdateAPIView):
    """Manage the authenticated user"""
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_object(self):
        """Retrieve and return authenticated user"""
        return self.request.user