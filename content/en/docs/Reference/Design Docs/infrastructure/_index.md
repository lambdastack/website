---
title: "Infrastructure"
weight: 10
date: 2021-11-19
content_type: design
description: >
  Desgin docs for Infrastructure
---

>Some of these date back to older versions but efforts are made to keep the most important - sometimes :)

# Cloud resources naming convention

This document describes recommendations how to name infrastructure resources that are usually created by Terraform.
Unifying resource names allows easily identify and search for any resource even if no specific tags were provided.

Listed points are based on development of LambdaStack modules
and [best practices](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-naming)
provided by Microsoft Azure.

In general resource name should match following schema:

`<prefix>-<resource_type>-<index>`

## Prefix

LambdaStack modules are developed in the way that allows user specify a prefix for created resources. This approach gives
such benefits as ordered sorting and identifying who is the owner of the resource. Prefix can include following parts
with a dash `-` as a delimiter.

| Type | Required | Description | Examples |
| ---- | -------- | ----------- | -------- |
| Owner | yes | The name of the person or team which resource belongs to | LambdaStack |
| Application or service name | no | Name of the application, workload, or service that the resource is a part of | kafka, ignite, opendistro |
| Environment | no | The stage of the development lifecycle for the workload that the resource supports | prod, dev, qa |
| VM group | no | The name of VM group that resource is created for | group-0 |

## Resource type

Resource type is a short name of resource that is going to be created. Examples:

- `rg`: resource group
- `nsg`: network security group
- `rt-private`: route table for private networking

## Index

Index is a serial number of the resource. If single resource is created, `0` is used as a value.
