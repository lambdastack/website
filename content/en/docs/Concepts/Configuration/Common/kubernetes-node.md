---
title: "Kubernetes Nodes"
weight: 19
main_menu: true
content_type: concept
description: >
  Kubernetes Nodes options
---

{{% pageinfo %}}
The content of the `kubernetes-nodes.yml` file is listed for reference only
{{% /pageinfo %}}

```yaml
---
kind: configuration/kubernetes-node
title: Kubernetes Node Config
name: default
specification:
  version: 1.20.12
  cni_version: 0.8.7
  node_labels: "node-type=lambdastack"

```
