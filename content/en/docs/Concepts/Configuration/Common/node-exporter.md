---
title: "Node-Exporter"
weight: 22
main_menu: true
content_type: concept
description: >
  Node-exporter options
---

{{% pageinfo %}}
The content of the `node-exporter.yml` file is listed for reference only
{{% /pageinfo %}}

```yaml
---
kind: configuration/node-exporter
title: "Node exporter"
name: default
specification:
  disable_helm_chart: false
  helm_chart_values:
    service:
      port: 9100
      targetPort: 9100 
  files:
    node_exporter_helm_chart_file_name: node-exporter-1.1.2.tgz
  enabled_collectors:
    - conntrack
    - diskstats
    - entropy
    - filefd
    - filesystem
    - loadavg
    - mdadm
    - meminfo
    - netdev
    - netstat
    - sockstat
    - stat
    - textfile
    - time
    - uname
    - vmstat
    - systemd

  config_flags:
    - "--web.listen-address=:9100"
    - '--log.level=info'
    - '--collector.diskstats.ignored-devices=^(ram|loop|fd)\d+$'
    - '--collector.filesystem.ignored-mount-points=^/(sys|proc|dev|run)($|/)'
    - '--collector.netdev.device-blacklist="^$"'
    - '--collector.textfile.directory="/var/lib/prometheus/node-exporter"'
    - '--collector.systemd.unit-whitelist="(kafka\.service|zookeeper\.service)"'

  web_listen_port: "9100"
  web_listen_address: ""

  config_for_prometheus: # configuration that will be written to Prometheus to allow scraping metrics from this exporter
    exporter_listen_port: "9100"
    prometheus_config_dir: /etc/prometheus
    file_sd_labels:
      - label: "job"
        value: "node"
```
