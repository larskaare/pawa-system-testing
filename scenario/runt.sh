#!/bin/bash -x

# For Windows gitbash compability
export MSYS_NO_PATHCONV=1

export NODE_ENV=test
docker-compose up client episodes quotes


