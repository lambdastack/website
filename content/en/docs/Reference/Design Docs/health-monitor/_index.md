---
title: "Health Monitor"
weight: 9
date: 2021-11-19
content_type: design
description: >
  Desgin docs for Health Monitor
---

>Some of these date back to older versions but efforts are made to keep the most important - sometimes :)

# LambdaStack Health Monitor service design proposal

Affected version: 0.6.x/0.7.x

## Goals

Provide service that will be monitoring components (Kubernetes, Docker, Kafka, EFK, Prometheus, etc.) deployed using LambdaStack.

## Use cases

Service will be installed and used on Virtual Machines/Bare Metal on Ubuntu and RedHat (systemd service).
Health Monitor will check status of components that were installed on the cluster. Combinations of those components can be different and will be provided to the service through configuration file.

Components that Health Monitor should check:
- Kubernetes (kubelet)*
- Query Kubernetes health endpoint (/healthz)*
- Docker*
- Query Docker stats*
- PostgreSQL
- HAProxy
- Prometheus
- Kafka
- ZooKeeper
- ElasticSearch
- RabbitMQ

`*` means MVP version.

Health Monitor exposes endpoint that is compliant with [Prometheus metrics format](https://github.com/prometheus/docs/blob/master/content/docs/instrumenting/exposition_formats.md#text-format-example) and serves data about health checks. This endpoint should listen on the configurable port (default 98XX).

## Design proposal

TODO