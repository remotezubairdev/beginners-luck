from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import MainGoal
from .serializers import MainGoalSerializer

@api_view(['GET'])
def index(request):
    goals = MainGoal.objects.all()
    serializer = MainGoalSerializer(goals, many=True)
        
    return Response(serializer.data)