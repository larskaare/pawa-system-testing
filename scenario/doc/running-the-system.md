# Running the system

To run the system we assume that
- the necessary tech are installed (docker ++)
- that you have clone the workshop repo
- that you have a terminal window open at ```./pawa-system-testing/scenario```
- that you have created app registrations and test users in AAD
- that you have created a ```.env``` file to hold the docker-compose config
- that the ```.env``` holds the proper config

## Running the system

```shell
./source ~/path-to-my-env-file/pawa-compose.env
export NODE_ENV=development
docker-compose build client episodes quotes
docker-compose up client episodes quotes
```

Alternatively explore ```./build.sh``` and ```./run.sh```

The system should now be available on http://localhost:3000 (the default).

## Testing the system

The following command will put the system in test mode and run the cypress tests headless.

```shell
./source ~/path-to-my-env-file/pawa-compose.env
export NODE_ENV=test
docker-compose up --abort-on-container-exit --exit-code-from cypress
```

Alternatively explore ```./test.sh```

The docker-compose command will finish with exit code 0 if all tests passed.