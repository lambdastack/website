---
title: "Reference"
weight: 20
date: 2021-11-19
description: >
  This section of the LambdaStack documentation contains references
---

## Command Line Interface (CLI)

`lambdastack` CLI is ran from the LambdaStack Docker Container after you run the following command:
>`$ docker run -it -v $PWD:/shared -rm lambdastack/lambdastack:latest`

Note: `lambdastack/lambdastack:latest` pulls down the latest version. If you want a specific version then add that to the end instead of `latest`.

Example of requesting a specific version (tag of 1.3.4). This is the best practice since you're guaranteed to know what you're getting if you need to build another cluster and so on:
>`$ docker run -it -v $PWD:/shared -rm lambdastack/lambdastack:1.3.4`

This will download the docker image if it has not already been download. If it has already been download then it will simply launch the container. At this point, it will put you at the `/shared` directory on the command line of the container. Since you previously created directory where `'shared` cold be mounted to, you are now at the root of that given directory. Anything stored here will be persisted after the container is exited (containers can't persist data unless mounted to a volume outside of the container - like a directory on your hard drive).

Launch the `lambdastack` CLI to build the initial data yaml file (e.g., demo.yml - if you specified `demo` on the command line with the option `-n demo`). The following command will use AWS and build a minimal project and data yaml file:
>`lambdastack -p aws -n demo`

The location of the new `demo.yml` file will be located at `build/demo/demo.yml`. The `-n <name> option` is used for the subdirectory name and the name of the data yaml file. [See Getting Started](/docs/getting-started/#try-it-out)).
