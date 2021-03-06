---
title: "Kafka-Exporter"
weight: 15
main_menu: true
content_type: concept
description: >
  Kafka-exporter options
---

{{% pageinfo %}}
The content of the `kafka-exporter.yml` file is listed for reference only
{{% /pageinfo %}}

```yaml
kind: configuration/kafka-exporter
title: "Kafka exporter"
name: default
specification:
  description: "Service that runs Kafka Exporter"

  web_listen_port: "9308"
  config_flags:
    - "--web.listen-address=:9308" # Address to listen on for web interface and telemetry.
    - '--web.telemetry-path=/metrics' # Path under which to expose metrics.
    - '--log.level=info'
    - '--topic.filter=.*' # Regex that determines which topics to collect.
    - '--group.filter=.*' # Regex that determines which consumer groups to collect.
    #- '--tls.insecure-skip-tls-verify' # If true, the server's certificate will not be checked for validity. This will make your HTTPS connections insecure.
    - '--kafka.version=2.0.0'
    #- '--sasl.enabled' # Connect using SASL/PLAIN.
    #- '--sasl.handshake' # Only set this to false if using a non-Kafka SASL proxy
    #- '--sasl.username=""'
    #- '--sasl.password=""'
    #- '--tls.enabled' # Connect using TLS
    #- '--tls.ca-file=""' # The optional certificate authority file for TLS client authentication
    #- '--tls.cert-file=""' # The optional certificate file for client authentication
    #- '--tls.key-file=""' # The optional key file for client authentication

  config_for_prometheus: # configuration that will be written to Prometheus to allow scraping metrics from this exporter
    exporter_listen_port: "9308"
    prometheus_config_dir: /etc/prometheus
    file_sd_labels:
      - label: "job"
        value: "kafka-exporter"

```
