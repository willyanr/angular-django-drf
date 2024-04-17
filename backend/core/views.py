from rest_framework import viewsets
from financial.models import CashBox, Transaction, Revenue, Menu, Financeiro
from menu.models import Category
from rest_framework.response import Response
from .serializers import BoxSerializer, TransactionSerializer, SalesSerializer, MenuSerializer, FinanceiroSerializer, CategorySerializer, ProfileSerializer
from rest_framework import status
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.middleware.csrf import get_token
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from core.models import Profile
from rest_framework import serializers
from rest_framework.exceptions import ValidationError





@api_view(['POST'])
def api_login(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'token': token.key})
        else:
            return Response({'message': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response({'message': 'Only POST requests are allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)



class CashBoxViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = BoxSerializer  

    def perform_create(self, serializer):
        queryset_open_cashbox = CashBox.objects.filter(user=self.request.user,date_close__isnull=True)
        if queryset_open_cashbox.exists():
            raise serializers.ValidationError("Já existe um caixa aberto.")
        serializer.save(user=self.request.user)

    def get_queryset(self):
        user = self.request.user
        queryset = CashBox.objects.filter(user=user, date_close__isnull=True)
        return queryset
    

class TransactionsViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = TransactionSerializer  

    def get_queryset(self):
        user = self.request.user
        queryset = Transaction.objects.filter(box__user=user, box__date_close__isnull=True)
        return queryset
  


class SalesViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = SalesSerializer

    def perform_create(self, serializer):
    
        serializer.save(user=self.request.user)
    def get_queryset(self):
        user = self.request.user
        queryset = Revenue.objects.filter(box__user=user)
        return queryset


class MenuViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = MenuSerializer
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
        
    def get_queryset(self):
        user = self.request.user
        queryset = Menu.objects.filter(user=user)
        return queryset


class CategoryViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = CategorySerializer
    
    def perform_create(self, serializer):
        name = serializer.validated_data['name']
        existing_category = Category.objects.filter(user=self.request.user, name=name)
        if existing_category.exists():
            raise ValidationError({'message': 'Categoria já existe'})
        else:
            serializer.save(user=self.request.user)
        
            
        
        
    def get_queryset(self):
        user = self.request.user
        queryset = Category.objects.filter(user=user)
        return queryset




class FinanceiroViewSet(viewsets.ModelViewSet):
    queryset = Financeiro.objects.all()
    serializer_class = FinanceiroSerializer


class ProfileViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = ProfileSerializer  
    def get_queryset(self):
        user = self.request.user
        queryset = Profile.objects.filter(user=user)
        return queryset







def get_csrf_token(request):
    token = get_token(request)
    
    return JsonResponse({'csrf_token': token})


