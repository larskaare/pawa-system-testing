#!/bin/bash -ex

# For Windows gitbash compability
export MSYS_NO_PATHCONV=1

#docker run -it --rm -v $PWD:/e2e -w /e2e cypress/included:9.7.0 --browser firefox --config baseUrl=http://host.docker.internal:"$CLIENT_PORT"
docker run -it --rm -v $PWD:/e2e -w /e2e larskaare/cypress_m1:9.5.0 --browser electron --config baseUrl=http://host.docker.internal:"$CLIENT_PORT"