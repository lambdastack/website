---
title: "HAProxy-Exporter"
weight: 8
main_menu: true
content_type: concept
description: >
  HAProxy-Exporter options
---

{{% pageinfo %}}
The content of the `haproxy-exporter.yml` file is listed for reference only
{{% /pageinfo %}}

```yaml
---
kind: configuration/haproxy-exporter
title: "HAProxy exporter"
name: default
specification:
  description: "Service that runs HAProxy Exporter"

  web_listen_port: "9101"

  config_for_prometheus: # configuration that will be written to Prometheus to allow scraping metrics from this exporter
    exporter_listen_port: "9101"
    prometheus_config_dir: /etc/prometheus
    file_sd_labels:
      - label: "job"
        value: "haproxy-exporter"
```
