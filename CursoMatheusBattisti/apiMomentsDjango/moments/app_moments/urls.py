from django.urls import path
from app_moments.views import GetAllMoments, GetOneMoment, CreateComment
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('',GetAllMoments.as_view()),
    path('<int:pk>',GetOneMoment.as_view()),
    path('<int:pk>/comments',CreateComment.as_view())
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)