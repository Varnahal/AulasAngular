from rest_framework import serializers

from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','name','email','password']
        extra_kwargs = {
            'password': {'write_only':True}#faz com que a senha não seja enviada nas respostas
        }

    def create(self, validated_data): #esta fazendo com que a senha passe por um hash antes de ser salva
        password = validated_data.pop('password',None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance