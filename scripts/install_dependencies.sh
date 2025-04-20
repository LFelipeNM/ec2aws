#!/bin/bash
cd /home/ubuntu/ec2aws || exit 1
source venv/bin/activate || exit 1
pip install -r requirements.txt || exit 1

