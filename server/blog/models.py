
from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    pass 


class Post(models.Model):
    author = models.ForeignKey('User', related_name='posts', on_delete=models.CASCADE)
    post_title = models.CharField(max_length=300, null=False)
    content = models.TextField(null=False)
    tags = models.CharField(max_length=50)
    status = models.BooleanField( default=False)
    create_time = models.DateTimeField(auto_created=True)
    update = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.post_title[:10]


class Comments(models.Model):
    comment_author = models.ForeignKey('User', on_delete=models.CASCADE)
    post_id = models.ForeignKey('Post', on_delete=models.CASCADE)
    comment_content = models.TextField()
    comment_status = models.BooleanField(default=True)

    def __str__(self):
        return self.comment_content[:10]