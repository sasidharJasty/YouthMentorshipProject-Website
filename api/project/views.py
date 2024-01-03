from django.contrib.auth import get_user_model
User = get_user_model()
from django.contrib.auth import authenticate
from .models import Role, Logs, HourRecord
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from .serializers import UserSerializer, RolesSerializer, LogsSerializer, HoursSerializer
import smtplib
import random
from django.core.mail import send_mail
from django.core.mail import EmailMessage
from api.settings import EMAIL_HOST_USER
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view, permission_classes
from django_filters.rest_framework import DjangoFilterBackend
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import Token
import socket
socket.getaddrinfo('localhost', 5173)
class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class RoleViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Role.objects.all()
    serializer_class = RolesSerializer
    permission_classes = [permissions.IsAuthenticated]

class LogsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Logs.objects.all()
    serializer_class = LogsSerializer
    permission_classes = [permissions.IsAuthenticated]

class HoursViewSet(viewsets.ModelViewSet ):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = HourRecord.objects.all()
    serializer_class = HoursSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['ymp_id']



class SignupView(APIView):
    permission_classes = [AllowAny]
    http_method_names = ['post']
    @csrf_exempt
    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')

        if not username or not password:
            return Response({'error': 'Username and password are required'}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(username=username).exists():
            return Response({'error': 'Username already taken'}, status=status.HTTP_400_BAD_REQUEST)
        elif User.objects.filter(email=email).exists():
            return Response({'error': 'Email already taken'}, status=status.HTTP_400_BAD_REQUEST)
        else:

            while True:
                num=str(random.randint(1, 899999)+100000)
                q=list(User.objects.filter(ymp_id=num))
                print(len(q))
                if len(q) ==0:
                    break
                else:
                    continue

            user = User.objects.create_user(username=username, email=email ,password=password,ymp_id=num)
            send_mail("Welcome To YMP!", "Your YMP Id is: " + user.ymp_id, EMAIL_HOST_USER, [email], fail_silently=False)
            #send_email(email,"Welcome to YMP", "Your YMP Id is: " + str(user.ymp_id))
            token, created = Token.objects.get_or_create(user=user)

            return Response({'User': username, 'Username': user.username, 'Id': user.ymp_id, 'token': token.key})

class LoginView(APIView):
    permission_classes = [AllowAny]

    @csrf_exempt
    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            return Response({'error': 'Username and password are required'}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            token, created = Token.objects.get_or_create(user=user)
            return Response({'User': username, 'Username': user.username, 'Id': user.ymp_id, 'token': token.key})
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
def logout_view(request):
    logout(request)
    return JsonResponse({'message': 'Logout successful'})
