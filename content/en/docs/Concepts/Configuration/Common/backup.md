---
title: "Backups"
weight: 2
main_menu: true
content_type: concept
description: >
  Cluster backup options
---

{{% pageinfo %}}
The content of the `backup.yml` file is listed for reference only
{{% /pageinfo %}}

```yaml
---
kind: configuration/backup
title: Backup Config
name: default
specification:
  components:
    load_balancer:
      enabled: false
    logging:
      enabled: false
    monitoring:
      enabled: false
    postgresql:
      enabled: false
    rabbitmq:
      enabled: false
# Kubernetes recovery is not supported by LambdaStack at this point.
# You may create backup by enabling this below, but recovery should be done manually according to Kubernetes documentation.
    kubernetes:
      enabled: false
```
