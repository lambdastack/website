---
title: "Filebeat"
weight: 5
main_menu: true
content_type: concept
description: >
  Filebeat options
---

{{% pageinfo %}}
The content of the `filebeat.yml` file is listed for reference only
{{% /pageinfo %}}

```yaml
---
kind: configuration/filebeat
title: Filebeat
name: default
specification:
  kibana:
    dashboards:
      index: filebeat-*
      enabled: auto
  disable_helm_chart: false
  postgresql_input:
    multiline:
      pattern: >-
        '^\d{4}-\d{2}-\d{2} '
      negate: true
      match: after

```
