from django.shortcuts import render
import json
import os
def index(request):
    source_lang_list = json.load(open(os.path.dirname(os.path.abspath(__file__))+"/static/translator/countries.json"))['countries']
    return render(request, "translator/index.html", {"source_lang_list": source_lang_list})
