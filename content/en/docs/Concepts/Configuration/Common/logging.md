---
title: "Logging"
weight: 20
main_menu: true
content_type: concept
description: >
  Logging options
---

{{% pageinfo %}}
The content of the `logging.yml` file is listed for reference only
{{% /pageinfo %}}

```yaml
---
kind: configuration/logging
title: Logging Config
name: default
specification:
  cluster_name: LambdaStackElastic
  admin_password: PASSWORD_TO_CHANGE
  kibanaserver_password: PASSWORD_TO_CHANGE
  kibanaserver_user_active: true
  logstash_password: PASSWORD_TO_CHANGE
  logstash_user_active: true
  demo_users_to_remove:
  - kibanaro
  - readall
  - snapshotrestore
  paths:
    data: /var/lib/elasticsearch
    repo: /var/lib/elasticsearch-snapshots
    logs: /var/log/elasticsearch
  jvm_options:
    Xmx: 1g # see https://www.elastic.co/guide/en/elasticsearch/reference/7.9/heap-size.html
  opendistro_security:
    ssl:
      transport:
        enforce_hostname_verification: true

```
