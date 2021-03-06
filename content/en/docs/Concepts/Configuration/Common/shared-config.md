---
title: "Shared-Config"
weight: 30
main_menu: true
content_type: concept
description: >
  Shared-Config options
---

{{% pageinfo %}}
The content of the `shared-config.yml` file is listed for reference only
{{% /pageinfo %}}

```yaml
---
kind: configuration/shared-config
title: "Shared configuration that will be visible to all roles"
name: default
specification:
  custom_repository_url: '' # leave it empty to use local repository or provide url to your repo
  custom_image_registry_address: '' # leave it empty to use local registry or provide address of your registry (hostname:port). This registry will be used to populate K8s control plane and should contain all required images.
  download_directory: /tmp # directory where files and images will be stored just before installing/loading
  vault_location: '' # if empty "BUILD DIRECTORY/vault" will be used
  vault_tmp_file_location: SET_BY_AUTOMATION
  use_ha_control_plane: False
  promote_to_ha: False

```
