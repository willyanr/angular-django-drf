from django.contrib import admin
from django.urls import include, path
from core.views import api_login, get_csrf_token
from django.conf import settings
from django.conf.urls.static import static

from rest_framework import routers
from core.views import FinanceiroViewSet, ProfileViewSet, CashBoxViewSet, TransactionsViewSet, SalesViewSet, MenuViewSet, CategoryViewSet
from django.urls import path

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)
router = routers.DefaultRouter()



router.register(r'api/financeiro', FinanceiroViewSet)
router.register(r'api/profile', ProfileViewSet, basename='profile')
router.register(r'api/cashbox', CashBoxViewSet, basename='cashbox')
router.register(r'api/transactions', TransactionsViewSet, basename='transactions')
router.register(r'api/sales', SalesViewSet, basename='sales')
router.register(r'api/menu', MenuViewSet, basename='menu')
router.register(r'api/category', CategoryViewSet, basename='category')



urlpatterns = [
    path("", include("financial.urls")),
    path("admin/", admin.site.urls),
    path('accounts/', include('allauth.urls')),
    path("menu/", include("menu.urls")),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/login/', api_login, name='api_login'),
    path('api/get_csrf_token/', get_csrf_token, name='get_csrf_token'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),




]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += router.urls





