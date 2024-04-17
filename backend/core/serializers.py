
from financial.models import CashBox, Transaction, Revenue, Menu, Financeiro
from menu.models import Category
from rest_framework import serializers
from core.models import Profile




class BoxSerializer(serializers.ModelSerializer):

    class Meta:
        model = CashBox
        fields = '__all__'

    
    
    def to_representation(self, instance):
        data = super().to_representation(instance)
        if instance.date_close is None:  
            instance.calculate_balance()  
            data['total_balance'] = instance.total_balance 
        return data





class TransactionSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='box.user.username', read_only=True)
    box_name = serializers.CharField(source='box.name', read_only=True)
    table = serializers.ChoiceField(choices=Transaction.TABLE_CHOICES)

    class Meta:
        model = Transaction
        fields = ['id', 'type', 'amount', 'description', 'date', 'box_name', 'user', 'status', 'table']

class SalesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Revenue
        fields = ['menu_item', 'box', 'quantity', 'date']
        
class MenuSerializer(serializers.ModelSerializer):
    category_name = serializers.SerializerMethodField()
    user = serializers.CharField(source='box.user.username', read_only=True)
    cost = serializers.DecimalField(max_digits=10, decimal_places=2)
    class Meta:
        model = Menu
        fields = ['name', 'category', 'category_name', 'id', 'price', 'status', 'user','cost']

    def get_category_name(self, obj):
        return obj.category.name if obj.category else None
        
class FinanceiroSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Financeiro
        fields = ['ticket_medio']
        
        
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id','name']

        
class ProfileSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = Profile
        fields = ['id', 'avatar', 'city', 'cep', 'cnpj', 'whatsapp','username', 'company']