# Charts_Project
> This project is the backend of the chart-dashboard, it's built in Django 

## Table of Contents
- [Project Introduction](#project-introduction)
- [Key Functionalities](#key-functionalities)
- [Setup Instructions](#setup-instructions)
- [Libraries and Tools](#libraries-and-tools)
- [Approach and Thought Process](#approach-and-thought-process)

## Project-Introduction
- Charts_Project was designed to show different chart data using REST depending on if a user typed or copied into their search bar one of the following: `/api/line/`, `/api/candelstick/`, `/api/pie/` or `/api/bar/`.

## Key Functionalities
- The key functionalities are:
   - REST Endpoints
   - JSON Data that is returned to a user
   - Description/information of chart data
   - Shows whether a endpoint is GET/POST/PUT/PATCH/DELETE/UPDATE request
   - Shows HTTP status along with what is allow including the content type

## Setup Instructions
1. To get started create a virtual environment to avoid any global conflicts, use `python3 -m venv venv` inside of the directory where Charts_Project is located
2. Run `pip install -r requirements.txt`, if any errors occured then you can run `pip install django djangorestframework`
3. Run `python manage.py runserver` to see the project live, when you click on the local host link you will see a 404 page enter one of the URL in Project-Introduction

## Libraries and Tools
- ![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)
- ![DjangoREST](https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray)
- ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## Approach and Thought Process
- My approach for this project was to use the libraries that was mentioned on the assigment page, which was Django REST and Django API. I start research to find any documentation or a guide that could help point me in the right direction. My thought process was to build one API at a time but I changed that to spent 30 minutes on getting started on each API then more time implementing the finer details. I also want to leave time for debugging anything and if a bug or error occured I use a guide to help understand why the bug was occuring.