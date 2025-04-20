#!/bin/bash
sudo /bin/systemctl restart gunicorn || exit 1
sudo /bin/systemctl restart nginx || exit 1

