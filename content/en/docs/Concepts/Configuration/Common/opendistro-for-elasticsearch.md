---
title: "Opendistro-for-ElasticSearch"
weight: 23
main_menu: true
content_type: concept
description: >
  Opendistro options
---

{{% pageinfo %}}
The content of the `opendistro-for-elasticsearch.yml` file is listed for reference only
{{% /pageinfo %}}

```yaml
---
kind: configuration/opendistro-for-elasticsearch
title: Open Distro for Elasticsearch Config
name: default
specification:
  cluster_name: LambdaStackElastic
  clustered: true
  admin_password: PASSWORD_TO_CHANGE
  kibanaserver_password: PASSWORD_TO_CHANGE
  kibanaserver_user_active: false
  logstash_password: PASSWORD_TO_CHANGE
  logstash_user_active: false
  demo_users_to_remove:
  - kibanaro
  - readall
  - snapshotrestore
  - logstash
  - kibanaserver
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
