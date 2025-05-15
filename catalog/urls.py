from django.urls import path, include 
from .views import ProductListCreate, ProductRetrieveUpdateDestroy, CategoryListCreate, ProductDetail

urlpatterns = [
    path('categories/', CategoryListCreate.as_view(), name='category-list-create'),
    path('products/', ProductListCreate.as_view(), name='product-list-create'),
    path('products/<uuid:pk>/', ProductDetail.as_view(), name='product-detail'),
]
