# Cypress - Docker - M1/ARM

The PAWA workshop uses Cypress to drive the front-end-driven system testing. Cypress is executed headless in a docker container. We use the image [cypress/included](https://hub.docker.com/r/cypress/included) for this. However, this image only exists for OS/Architecture linux/amd64, not arm and thus the Apple M1 processors. Until this becomes available we need to build our own. Monitor this [cypress issue](https://github.com/cypress-io/cypress-docker-images/issues/431) for progress.

You currently have at least two options for Docker/Cypress on M1. For both cases you will need to change the reference to ```cypress/included:9.5.0``` to whatever image you prepare.

The Docker image we build is *experimental* and only supporting *chromium*.

## Building your own image

from './client-cypress/cypress_docker_m1'

```shell
docker build -t cypress_m1:9.5.0 .
```

Refer to ```cypress_m1:9.5.0``` when Cypress is used with Docker.

## Using a prebuilt image

Rather then building your own image, refer to ```larskaare/cypress_m1:9.5.0``` when Cypress is used with Docker
