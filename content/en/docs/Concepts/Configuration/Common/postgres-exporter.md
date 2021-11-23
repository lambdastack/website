---
title: "Postgres-Exporter"
weight: 24
main_menu: true
content_type: concept
description: >
  Postgres-Exporter options
---

{{% pageinfo %}}
The content of the `postgres-exporter.yml` file is listed for reference only
{{% /pageinfo %}}

```yaml
---
kind: configuration/postgres-exporter
title: Postgres exporter
name: default
specification:
  config_flags:
  - --log.level=info
  - --extend.query-path=/opt/postgres_exporter/queries.yaml
  - --auto-discover-databases
  # Please see optional flags: https://github.com/prometheus-community/postgres_exporter/tree/v0.9.0#flags
  config_for_prometheus:
    exporter_listen_port: '9187'
    prometheus_config_dir: /etc/prometheus
    file_sd_labels:
    - label: "job"
      value: "postgres-exporter"

```
