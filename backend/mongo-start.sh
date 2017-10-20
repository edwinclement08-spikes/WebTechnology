#!/bin/bash
sudo docker run -p 27017:27017  -v "/mnt/coding/WTDatabase":/data/db mongo:latest

