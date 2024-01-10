from rest_framework import serializers
from .models import Comment,Moment

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Comment
        fields=('username','text','momentId','created_at','updated_at')

class MomentSerializer(serializers.ModelSerializer):
    comments = serializers.SerializerMethodField()

    class Meta:
        model = Moment
        fields = ('id','title', 'description', 'image', 'comments', 'created_at', 'updated_at')

    def get_comments(self, moment):
        comments = Comment.objects.filter(momentId=moment)
        return CommentSerializer(comments,many=True).data