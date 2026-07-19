from rest_framework import generics
from .models import User, MainGoal
from .serializers import UserSerializer, MainGoalSerializer
from rest_framework.permissions import IsAuthenticated

class RegisterUser(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class MainGoalList(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = MainGoal.objects.all()
    serializer_class = MainGoalSerializer

    def get_queryset(self):
        return MainGoal.objects.filter(user=self.request.user)
    
class RetrieveUser(generics.RetrieveAPIView):
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user