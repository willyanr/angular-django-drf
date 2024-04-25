
from financial.models import CashBox, Transaction, Orders, Menu, Financeiro, OrderItem
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


    class Meta:
        model = Transaction
        fields = ['id', 'type', 'amount', 'description', 'date', 'box_name', 'user', 'status', 'type_order']





class OrderItemSerializer(serializers.ModelSerializer):
    menu_item_name = serializers.ReadOnlyField(source='menu_item.name')
    menu_item_price = serializers.ReadOnlyField(source='menu_item.price') 
    class Meta:
        model = OrderItem
        fields = ['menu_item', 'quantity', 'menu_item_name', 'order', 'menu_item_price']
        
        
class OrdersSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)
    menu_item_name = serializers.ReadOnlyField(source='menu_item.name')
    

    class Meta:
        model = Orders
        fields = ['id', 'type', 'menu_item_name', 'date', 'box', 'status', 'type_order','open_timestamp', 'preparation_timestamp'
                  ,'ready_timestamp', 'closed_timestamp', 'items', 'total']
                
        
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