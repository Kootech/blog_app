
from rest_framework import serializers

from .models import User, Post, Comments


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'email', 'first_name']


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = '__all__'