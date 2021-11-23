---
title: "Full"
weight: 3
main_menu: true
content_type: concept
description: >
  Full configuration options
---

## Full Configuration

{{% pageinfo %}}
This option is mainly for on-premise solutions. However, it can be used in a generic way for other clouds like Oracle Cloud, etc.
{{% /pageinfo %}}

>There are a number of changes to be made so that it can fit your on-premise or non-standard cloud provider environment.
1. `prefix: staging` - (optional) Change this to something else like `production` if you like
2. `name: operations` - (optional) Change the user name to anything you like
3. `key_path: lambdastack-operations` - (optional) Change the SSH key pair name if you like

```yaml
kind: lambdastack-cluster
title: "LambdaStack Cluster Config"
provider: any
name: "default"
build_path: "build/path" # This gets dynamically built
specification:
  prefix: staging  # Can be anything you want that helps quickly identify the cluster
  name: lambdastack
  admin_user:
    name: operations # YOUR-ADMIN-USERNAME
    key_path: lambdastack-operations # YOUR-SSH-KEY-FILE-NAME
    path: "/shared/build/<name of cluster>/keys/ssh/lambdastack-operations" # Will get dynamically created
  components:
    kubernetes_master:
      count: 1
      machine: kubernetes-master-machine
      configuration: default
    kubernetes_node:
      count: 2
      machine: kubernetes-node-machine
      configuration: default
    logging:
      count: 1
      machine: logging-machine
      configuration: default
    monitoring:
      count: 1
      machine: monitoring-machine
      configuration: default
    kafka:
      count: 2
      machine: kafka-machine
      configuration: default
    postgresql:
      count: 0
      machine: postgresql-machine
      configuration: default
    load_balancer:
      count: 1
      machine: load-balancer-machine
      configuration: default
    rabbitmq:
      count: 0
      machine: rabbitmq-machine
      configuration: default
    ignite:
      count: 0
      machine: ignite-machine
      configuration: default
    opendistro_for_elasticsearch:
      count: 0
      machine: logging-machine
      configuration: default
    repository:
      count: 1
      machine: repository-machine
      configuration: default
    single_machine:
      count: 0
      machine: single-machine
      configuration: default
```
