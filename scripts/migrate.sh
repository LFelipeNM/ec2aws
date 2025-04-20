#!/bin/bash
cd /home/ubuntu/ec2aws 
source venv/bin/activate
python manage.py migrate
