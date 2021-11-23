---
title: "Minimal"
weight: 2
main_menu: true
content_type: concept
description: >
  Minimal configuration options
---

## Minimal Configuration

{{% pageinfo %}}
This option is mainly for on-premise solutions. However, it can be used in a generic way for other clouds like Oracle Cloud, etc.
{{% /pageinfo %}}

>There are a number of changes to be made so that it can fit your on-premise or non-standard cloud provider environment.
1. `prefix: staging` - (optional) Change this to something else like `production` if you like
2. `name: operations` - (optional) Change the user name to anything you like
3. `key_path: lambdastack-operations` - (optional) Change the SSH key pair name if you like
4. `hostname: ...` - (optional/required) If you're good with keeping the default hostname then leave it or change it to support your environment for each host below
5. `ip: ...` - (optional/required) If you're good with keeping the default 192.168.0.0 IP range then leave it or change it to support your environment for each host below

```yaml
kind: lambdastack-cluster
title: "LambdaStack Cluster Config"
provider: any
name: "default"
build_path: "build/path" # This gets dynamically built
specification:
  name: lambdastack
  prefix: staging  # Can be anything you want that helps quickly identify the cluster
  admin_user:
    name: operations # YOUR-ADMIN-USERNAME
    key_path: lambdastack-operations # YOUR-SSH-KEY-FILE-NAME
    path: "/shared/build/<name of cluster>/keys/ssh/lambdastack-operations" # Will get dynamically created
  components:
    repository:
      count: 1
      machines:
        - default-repository
    kubernetes_master:
      count: 1
      machines:
        - default-k8s-master1
    kubernetes_node:
      count: 2
      machines:
        - default-k8s-node1
        - default-k8s-node2
    logging:
      count: 1
      machines:
        - default-logging
    monitoring:
      count: 1
      machines:
        - default-monitoring
    kafka:
      count: 2
      machines:
        - default-kafka1
        - default-kafka2
    postgresql:
      count: 1
      machines:
        - default-postgresql
    load_balancer:
      count: 1
      machines:
        - default-loadbalancer
    rabbitmq:
      count: 1
      machines:
        - default-rabbitmq
---
kind: infrastructure/machine
provider: any
name: default-repository
specification:
  hostname: repository # YOUR-MACHINE-HOSTNAME
  ip: 192.168.100.112 # YOUR-MACHINE-IP
---
kind: infrastructure/machine
provider: any
name: default-k8s-master1
specification:
  hostname: master1 # YOUR-MACHINE-HOSTNAME
  ip: 192.168.100.101 # YOUR-MACHINE-IP
---
kind: infrastructure/machine
provider: any
name: default-k8s-node1
specification:
  hostname: node1 # YOUR-MACHINE-HOSTNAME
  ip: 192.168.100.102 # YOUR-MACHINE-IP
---
kind: infrastructure/machine
provider: any
name: default-k8s-node2
specification:
  hostname: node2 # YOUR-MACHINE-HOSTNAME
  ip: 192.168.100.103 # YOUR-MACHINE-IP
---
kind: infrastructure/machine
provider: any
name: default-logging
specification:
  hostname: elk # YOUR-MACHINE-HOSTNAME
  ip: 192.168.100.105 # YOUR-MACHINE-IP
---
kind: infrastructure/machine
provider: any
name: default-monitoring
specification:
  hostname: prometheus # YOUR-MACHINE-HOSTNAME
  ip: 192.168.100.106 # YOUR-MACHINE-IP
---
kind: infrastructure/machine
provider: any
name: default-kafka1
specification:
  hostname: kafka1 # YOUR-MACHINE-HOSTNAME
  ip: 192.168.100.107 # YOUR-MACHINE-IP
---
kind: infrastructure/machine
provider: any
name: default-kafka2
specification:
  hostname: kafka2 # YOUR-MACHINE-HOSTNAME
  ip: 192.168.100.108 # YOUR-MACHINE-IP
---
kind: infrastructure/machine
provider: any
name: default-postgresql
specification:
  hostname: postgresql # YOUR-MACHINE-HOSTNAME
  ip: 192.168.100.109 # YOUR-MACHINE-IP
---
kind: infrastructure/machine
provider: any
name: default-loadbalancer
specification:
  hostname: loadbalancer # YOUR-MACHINE-HOSTNAME
  ip: 192.168.100.110 # YOUR-MACHINE-IP
---
kind: infrastructure/machine
provider: any
name: default-rabbitmq
specification:
  hostname: rabbitmq # YOUR-MACHINE-HOSTNAME
  ip: 192.168.100.111 # YOUR-MACHINE-IP
```
