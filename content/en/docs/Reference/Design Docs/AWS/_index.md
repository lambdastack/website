---
title: "AWS"
weight: 3
date: 2021-11-19
content_type: design
description: >
  Desgin docs for AWS
---

>Some of these date back to older versions but efforts are made to keep the most important - sometimes :)

# LambdaStack AWS support design document

Affected version: 0.3.0

## Goals

Provide AWS support:

1. Infrastructure setup automation
2. AWS OS images support (RHEL, Ubuntu)
3. Cluster security based on rules
4. Virtual machines should be able to belong to different subnets within the LambdaStack cluster. Requirement is to have at least two subnets - one for Load Balancing (internet facing) and one for other components.
5. Virtual machines should have data disk (when configured to have such)
6. Components (Kafka, Postgresql, Prometheus, ElasticSearch) should be configured to use data disk space
7. Cluster should not use any public IP except `Load Balancer`

## Use cases

Support AWS cloud to not rely only on single provider.

## Proposed network design

![LambdaStack on AWS network design](aws_cluster_setup.svg)

LambdaStack on AWS will create `Resource Group` that will contain all cluster components. One of the resources will be Amazon VPC (Virtual Private Cloud) that is isolated section of AWS cloud.
Inside of VPC, many subnets will be provisioned by LambdaStack automation - based on data provided by user or using defaults. Virtual machines and data disks will be created and placed inside a subnet.
