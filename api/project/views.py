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
from django.shortcuts import render
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
# views.py  
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.contrib.auth.models import Group
from .serializers import UserGroupCountSerializer
from rest_framework.viewsets import ViewSet


from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import update_session_auth_hash
from .serializers import ChangePasswordSerializer

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def change_password(request):
    if request.method == 'POST':
        serializer = ChangePasswordSerializer(data=request.data)
        if serializer.is_valid():
            user = request.user
            if user.check_password(serializer.data.get('old_password')):
                user.set_password(serializer.data.get('new_password'))
                user.save()
                update_session_auth_hash(request, user)  # To update session after password change
                return Response({'message': 'Password changed successfully.'}, status=status.HTTP_200_OK)
            return Response({'error': 'Incorrect old password.'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserGroupCountViewSet(ViewSet):
    def list(self, request, group_name=None):
        try:
            group = Group.objects.get(name=group_name)
            count = group.user_set.count()

            # Serialize the count
            serializer = UserGroupCountSerializer({"count": count})
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Group.DoesNotExist:
            return Response({"detail": "Group not found."}, status=status.HTTP_404_NOT_FOUND)




class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['email']

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

from django.core.mail import send_mail
from rest_framework import viewsets, permissions
from django.views.decorators.csrf import csrf_exempt
from django_filters.rest_framework import DjangoFilterBackend

class HoursViewSet(viewsets.ModelViewSet):
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
                num = str(random.randint(1, 899999) + 100000)
                q = list(User.objects.filter(ymp_id=num))
                print(len(q))
                if len(q) == 0:
                    break
                else:
                    continue

            user = User.objects.create_user(username=username, email=email, password=password, ymp_id=num)

            # Serialize user's groups
            user_groups = [group.name for group in user.groups.all()]

            send_mail("Welcome To YMP!", "Your YMP Id is: " + user.ymp_id, EMAIL_HOST_USER, [email], fail_silently=False)

            # send_email(email, "Welcome to YMP", "Your YMP Id is: " + str(user.ymp_id))

            token, created = Token.objects.get_or_create(user=user)

            return Response({'User': username, 'Username': user.username, 'Id': user.ymp_id, 'Groups': user_groups, 'token': token.key})

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
            return Response({'User': username, 'Username': user.username, 'Id': user.ymp_id,'Groups': [group.name for group in user.groups.all()], 'token': token.key})
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
    
def soon(request):
    return render(request, "soon.html")

def pagenotfound(request):
    return render(request, "pagenotfound.html")

@api_view(['POST'])
def logout_view(request):
    logout(request)
    return JsonResponse({'message': 'Logout successful'})