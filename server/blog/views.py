from django.shortcuts import render

from .models import User, Post, Comments
from .serializers import UserSerializer, PostSerializer, CommentSerializer

from rest_framework import generics


class PostList(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

