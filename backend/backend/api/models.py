from django.db import models
from django.contrib.auth.models import AbstractUser
class User(AbstractUser):
    pass

# Create your models here.
class MainGoal(models.Model):
    goal = models.CharField(max_length=128)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="main_goals")

    def __str__(self):
        return f"{self.goal} of {self.user.username}"