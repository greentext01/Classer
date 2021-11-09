from django.contrib.auth.models import Group, User
from django.db import models

# Create your models here.

class Subject(models.Model):
    classes = models.ForeignKey(Group, on_delete=models.CASCADE, related_name="subject_classes")


class Group(models.Model):
    students = models.ManyToManyField(User, related_name="group_students")
    name = models.CharField(max_length=64)
