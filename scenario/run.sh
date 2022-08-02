#!/bin/bash -x

# For Windows gitbash compability
export MSYS_NO_PATHCONV=1

export NODE_ENV=development
docker-compose up client episodes quotes


