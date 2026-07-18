from rest_framework import serializers
from .models import MainGoal, User

class MainGoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainGoal
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}
    
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)