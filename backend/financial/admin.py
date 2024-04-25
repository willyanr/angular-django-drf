from django.contrib import admin
from financial.models import CashBox, Transaction, Expense, Financeiro, Orders, OrderItem
from menu.models import Menu, Category
from core.models import Profile

admin.site.register(Profile)
admin.site.register(CashBox)
admin.site.register(Transaction)
admin.site.register(Orders)

admin.site.register(Expense)
admin.site.register(Menu)
admin.site.register(Financeiro)
admin.site.register(OrderItem)
admin.site.register(Category)

