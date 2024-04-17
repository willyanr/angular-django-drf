from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path('api/fechar-caixa/<int:box_id>/<total_balance>/', views.fechar_caixa, name='fechar_caixa'),


]