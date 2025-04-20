#!/bin/bash
cd /home/ubuntu/ec2aws || exit 1
source venv/bin/activate || exit 1
python manage.py migrate || exit 1

