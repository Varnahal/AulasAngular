from django.db import models

# Create your models here.


class Moment(models.Model):
    title = models.CharField(max_length = 255)
    description = models.CharField(max_length = 255)
    image = models.ImageField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def comments_count(self):
        return Comment.objects.filter(momentId=self).count()

class Comment(models.Model):
    username = models.CharField(max_length = 255)
    text = models.CharField(max_length = 255)
    momentId = models.ForeignKey(Moment, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

