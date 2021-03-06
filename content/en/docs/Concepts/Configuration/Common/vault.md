---
title: "Vault"
weight: 31
main_menu: true
content_type: concept
description: >
  Hashicorp Vault options
---

{{% pageinfo %}}
The content of the `vault.yml` file is listed for reference only
{{% /pageinfo %}}

```yaml
---
kind: configuration/vault
title: Vault Config
name: default
specification:
  vault_enabled: false
  vault_system_user: vault
  vault_system_group: vault
  enable_vault_audit_logs: false
  enable_vault_ui: false
  vault_script_autounseal: true
  vault_script_autoconfiguration: true
  tls_disable: false
  kubernetes_integration: true
  kubernetes_configuration: true
  kubernetes_namespace: default
  enable_vault_kubernetes_authentication: true
  app_secret_path: devwebapp
  revoke_root_token: false
  secret_mount_path: secret
  vault_token_cleanup: true
  vault_install_dir: /opt/vault
  vault_log_level: info
  override_existing_vault_users: false
  certificate_name: fullchain.pem
  private_key_name: privkey.pem
  selfsigned_certificate:
    country: US
    state: state
    city: city
    company: company
    common_name: "*"
  vault_tls_valid_days: 365
  vault_users:
    - name: admin
      policy: admin
    - name: provisioner
      policy: provisioner
  files:
    vault_helm_chart_file_name: v0.11.0.tar.gz
  vault_helm_chart_values:
    injector:
      image:
        repository: "{{ image_registry_address }}/hashicorp/vault-k8s"
      agentImage:
        repository: "{{ image_registry_address }}/vault"
    server:
      image:
        repository: "{{ image_registry_address }}/vault"

```
