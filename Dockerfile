FROM python:3.9.7
COPY ./ ./
RUN python3 -m pip install -r requirements.txt
CMD [ "python", "./manage.py", "runserver","0.0.0.0:8000"]
