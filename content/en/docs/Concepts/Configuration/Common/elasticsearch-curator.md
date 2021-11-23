---
title: "ElasticSearch-Curator"
weight: 3
main_menu: true
content_type: concept
description: >
  ElasticSearch options
---

{{% pageinfo %}}
The content of the `elasticsearch-curator.yml` file is listed for reference only
{{% /pageinfo %}}

```yaml
---
kind: configuration/elasticsearch-curator
title: Elasticsearch Curator
name: default
specification:
  delete_indices_cron_jobs:
    - description: Delete indices older than N days
      cron:
        hour: 1
        minute: 0
        enabled: true
      filter_list:
        - filtertype: age
          unit_count: 30
          unit: days
          source: creation_date
          direction: older
    - description: Delete the oldest indices to not consume more than N gigabytes of disk space
      cron:
        minute: 30
        enabled: true
      filter_list:
        - filtertype: space
          disk_space: 20
          use_age: True
          source: creation_date
```
