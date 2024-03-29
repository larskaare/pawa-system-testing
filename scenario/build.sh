#!/bin/bash -e

# For Windows gitbash compability
export MSYS_NO_PATHCONV=1

shopt -s nocasematch

if [[ -z "${https_proxy}" ]]; then
    printf "No https_proxy in environment, running build without https proxy args\n"


    docker-compose build \
        client episodes quotes cypress


else
    printf "Found https_proxy in environment, running with https proxy args\n"

    
    docker-compose build \
        --build-arg http_proxy=$HTTP_PROXY \
        --build-arg https_proxy=$HTTPS_PROXY \
        client episodes quotes cypress

fi




