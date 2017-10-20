#!/bin/bash

CONTAINER_NAME=WT_Project 
WEBSITE_ASSETS=/path/to/source/frontend-codebase/assets

docker stop ${CONTAINER_NAME}  
docker rm ${CONTAINER_NAME}


docker build -t wt_image .
docker run -p 80:3000 --name ${CONTAINER_NAME} -d wt_image 

