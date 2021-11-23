---
title: "JMX-Exporter"
weight: 14
main_menu: true
content_type: concept
description: >
  JMX-Exporter options
---

{{% pageinfo %}}
The content of the `jmx-exporter.yml` file is listed for reference only
{{% /pageinfo %}}

```yaml
---
kind: configuration/jmx-exporter
title: "JMX exporter"
name: default
specification:
  file_name: "jmx_prometheus_javaagent-0.14.0.jar"
  jmx_path: /opt/jmx-exporter/jmx_prometheus_javaagent.jar # Changing it requires also change for same variable in Kafka and Zookeeper configs.  # Todo Zookeeper and Kafka to use this variable
  jmx_jars_directory: /opt/jmx-exporter/jars
  jmx_exporter_user: jmx-exporter
  jmx_exporter_group: jmx-exporter
```
