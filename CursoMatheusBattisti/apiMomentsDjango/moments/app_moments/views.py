import pkgutil
from urllib import request, response
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound


from .serializers import CommentSerializer,MomentSerializer
from .models import Comment,Moment

# Create your views here.

class GetAllMoments(APIView):
    def get(self,request):
        moment = Moment.objects.all()
        serializer = MomentSerializer(moment,many=True)
        return Response({"data":serializer.data})
    
    def post(self,request):
        serializer = MomentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"data":serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class GetOneMoment(APIView):  
    def get_object(self,pk):
        try:
            return Moment.objects.get(pk=pk)
        except Moment.DoesNotExist:
            raise NotFound()

    def get(self, request, pk):
        moment = self.get_object(pk)
        serializer = MomentSerializer(moment)
        return Response({"data":serializer.data})
    
    def put(self, request, pk):
        moment = self.get_object(pk)
        print(request.data)
        serializer = MomentSerializer(moment,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"data":serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self,request,pk):
        moment = self.get_object(pk)
        moment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
class CreateComment(APIView):
    def post(self,request,pk):
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"data":serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)