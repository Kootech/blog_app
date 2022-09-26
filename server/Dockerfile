FROM python:3.9

ENV PYTHONUNBUFFERED 1

WORKDIR /django

COPY requirements.txt /django/

RUN pip install -r requirements.txt

RUN python -m pip install --upgrade pip

COPY . .