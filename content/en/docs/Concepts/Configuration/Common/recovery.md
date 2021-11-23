---
title: "Recovery"
weight: 28
main_menu: true
content_type: concept
description: >
  Recovery options
---

{{% pageinfo %}}
The content of the `recovery.yml` file is listed for reference only
{{% /pageinfo %}}

```yaml
---
kind: configuration/recovery
title: Recovery Config
name: default
specification:
  components:
    load_balancer:
      enabled: false
      snapshot_name: latest
    logging:
      enabled: false
      snapshot_name: latest
    monitoring:
      enabled: false
      snapshot_name: latest
    postgresql:
      enabled: false
      snapshot_name: latest
    rabbitmq:
      enabled: false
      snapshot_name: latest

```
