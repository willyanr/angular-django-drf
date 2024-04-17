from django.http import HttpResponse
from django.http import JsonResponse
from .models import CashBox
from django.shortcuts import get_object_or_404



def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


def fechar_caixa(request, box_id, total_balance):
    try:
        cash_box = get_object_or_404(CashBox, id=box_id, total_balance=total_balance,)
        cash_box.close()
        
        cash_box.save()
        cash_box.total_balance = 0
        return JsonResponse({'message': 'Caixa fechado com sucesso'}, status=200)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)