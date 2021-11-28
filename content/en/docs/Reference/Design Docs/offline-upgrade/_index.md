---
title: "Offline Upgrade"
weight: 17
date: 2021-11-19
content_type: design
description: >
  Desgin docs for Offline Upgrade
---

>Some of these date back to older versions but efforts are made to keep the most important - sometimes :)

# LambdaStack offline upgrade design document

Affected version: 0.4.x

## Goals

Provide upgrade functionality for LambdaStack so Kubernetes and other components can be upgraded when working offline.

## Use cases

LambdaStack should be upgradeable when there is no internet connection. It requires all packages and dependencies to be downloaded on machine that has internet connection and then moved to air-gap server.

## Example use

```bash
lsupgrade -b /path/to/build/dir
```

Where `-b` is path to build folder that contains Ansible inventory.

## Design proposal

MVP for upgrade function will contain Kubernetes upgrade procedure to the latest supported version of Kubernetes. Later it will be extended to all other LambdaStack components.

![LambdaStack offline upgrade app](lambdastack-offline-upgrade.png)

`lsupgrade` application or module takes build path location (directory path that contains Ansible inventory file).

First part of upgrade execution is to download/upload packages to repository so new packages will exist and be ready for upgrade process.
When repository module will finish its work then upgrade Ansible playbooks will be executed.

Upgrade application/module shall implement following functions:
- [MVP] `apply` it will execute upgrade
- `--plan` where there will be no changes made to the cluster - it will return list of changes that will be made during upgrade execution.
