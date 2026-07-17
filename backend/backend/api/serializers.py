from rest_framework import serializers
from .models import MainGoal

class MainGoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainGoal
        fields = '__all__'