from rest_framework.routers import DefaultRouter
from django.urls import path
from .views import (
    CategoryListCreateView,
    ProductListCreateView,
    ProductDetailView,
    ProductViewSet,
)

# Register the ViewSet with the router
router = DefaultRouter()
router.register(r'products', ProductViewSet)

# Combine router URLs with manually defined URLs
urlpatterns = router.urls + [
    path('products-list/', ProductListCreateView.as_view(), name='product-list-create'),
    path('products/<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
    path('categories/', CategoryListCreateView.as_view(), name='category-list-create'),
]
