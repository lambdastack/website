---
title: "RabbitMQ"
weight: 27
main_menu: true
content_type: concept
description: >
  RabbitMQ options
---

{{% pageinfo %}}
The content of the `rabbitmq.yml` file is listed for reference only
{{% /pageinfo %}}

```yaml
---
kind: configuration/rabbitmq
title: "RabbitMQ"
name: default
specification:
  rabbitmq_user: rabbitmq
  rabbitmq_group: rabbitmq
  stop_service: false

  logrotate_period: weekly
  logrotate_number: 10
  ulimit_open_files: 65535

  amqp_port: 5672
  rabbitmq_use_longname: AUTOCONFIGURED # true/false/AUTOCONFIGURED
  rabbitmq_policies: []
  rabbitmq_plugins: []
  custom_configurations: []
  cluster:
    is_clustered: false

```
