---
title: "Repository"
weight: 29
main_menu: true
content_type: concept
description: >
  Repository  options
---

{{% pageinfo %}}
The content of the `repository.yml` file is listed for reference only
{{% /pageinfo %}}

```yaml
---
kind: configuration/repository
title: "LambdaStack requirements repository"
name: default
specification:
  description: "Local repository of binaries required to install LambdaStack"
  download_done_flag_expire_minutes: 120
  apache_lsrepo_path: "/var/www/html/lsrepo"
  teardown:
    disable_http_server: true # whether to stop and disable Apache HTTP Server service
    remove:
      files: false
      helm_charts: false
      images: false
      packages: false

```
