---
title: "Full"
weight: 3
main_menu: true
content_type: concept
description: >
  Full configuration
---

{{% pageinfo %}}
As of v1.3.4, LambdaStack requires you to change the following attributes in the either the minimal or full configuration YAML. Beginning in v2.0, you will have the option to pass in these parameters to override whatever is present in the yaml file. v2.0 is in active development
{{% /pageinfo %}}

>All but the last two options are defaults. The last two are `subscription_name` and `use_service_principal` - these two are required

Attributes to change for the full configuration **After** you run `lambdastack init -p azure -n <whatever name you want to give your cluster>:
* `prefix: staging` - Staging is a default prefix. You can use whatever you like (e.g., `production`). This value can help group your AWS clusters in the same region for easier maintenance
* `name: operations` - This attribute is under `specification.admin_user.name`
* `key_path: lambdastack-operations` - This is the default SSH key file(s) name. This is the name of your SSH public and private key pairs. For example, in this example, one file (private one) would be named `lambdastack-operations`. The second file (public key) typically has a `.pub` suffix such as `lambdastack-operations.pub`
* `use_public_ips: True` - This is the default public IP value. Important, this attribute by default allows for AWS to build your clusters with a public IP interface. We also build a private (non-public) interface using private IPs for internal communication between the nodes. With this attribute set to `public` it simply allows you easy access to the cluster so you can SSH into it using the `name` attribute value from above. This is `NOT RECOMMENDED` for sure not in production and not as a general rule. You should have a VPN or direct connect and route for the cluster
* `region: East US` - This is the default region setting. This means that your cluster and storage will be created in Azure `East US` region. Important - If you want to change this value in any way, you should use the `full configuration` and then change **ALL** references of region in the yaml file. If you do not then you may have services in regions you don't want and that may create problems for you
* `subscription_name: <whatever the sub name is>` - This is very **important**. This, along with `use_service_principal` are used to access your Azure cluster programmatically which LambdaStack needs. This can be found at `specification.cloud.subscrition_name`. This can be found under your Azure Account menu option in settings
* `use_service_principal: True` - This is very **important**. This, along with `subcription_name` are used to access your Azure cluster programmatically which LambdaStack needs. This can be found at `specification.cloud.use_service_principal`. This can be found under your Azure Account menu option in Security Credentials.

Now that you have made your changes to the <whatever you name your cluster>.yml now run `lambdastack apply -f build/<whatever you name your cluster>/<whatever you name your cluster>.yml`. Now the building of a LambdaStack cluster will begin. `Apply` option will generate a final `manifest.yml` file that will be used for Terraform, Ansible and LambdaStack python code. The `manifest.yml` will combine the values from below plus **ALL** yaml configuration files for each service.

```yaml
---
kind: lambdastack-cluster
title: "LambdaStack Cluster Config"
provider: azure
name: "default"
build_path: "build/path"  # This gets dynamically built
specification:
  prefix: staging  # Can be anything you want that helps quickly identify the cluster
  name: lambdastack
  admin_user:
    name: operations # YOUR-ADMIN-USERNAME
    key_path: lambdastack-operations # YOUR-SSH-KEY-FILE-NAME
    path: "/shared/build/<name of cluster>/keys/ssh/lambdastack-operations" # Will get dynamically created
  cloud:
    k8s_as_cloud_service: False
    subscription_name: <YOUR-SUB-NAME>
    vnet_address_pool: 10.1.0.0/20
    use_public_ips: True # When not using public IPs you have to provide connectivity via private IPs (VPN)
    use_service_principal: False
    region: East US
    network:
      use_network_security_groups: True
    default_os_image: default
  components:
    kubernetes_master:
      count: 1
      machine: kubernetes-master-machine
      configuration: default
      subnets:
        - address_pool: 10.1.1.0/24
    kubernetes_node:
      count: 2
      machine: kubernetes-node-machine
      configuration: default
      subnets:
        - address_pool: 10.1.1.0/24
    logging:
      count: 1
      machine: logging-machine
      configuration: default
      subnets:
        - address_pool: 10.1.3.0/24
    monitoring:
      count: 1
      machine: monitoring-machine
      configuration: default
      subnets:
        - address_pool: 10.1.4.0/24
    kafka:
      count: 2
      machine: kafka-machine
      configuration: default
      subnets:
        - address_pool: 10.1.5.0/24
    postgresql:
      count: 0
      machine: postgresql-machine
      configuration: default
      subnets:
        - address_pool: 10.1.6.0/24
    load_balancer:
      count: 1
      machine: load-balancer-machine
      configuration: default
      subnets:
        - address_pool: 10.1.7.0/24
    rabbitmq:
      count: 0
      machine: rabbitmq-machine
      configuration: default
      subnets:
        - address_pool: 10.1.8.0/24
    ignite:
      count: 0
      machine: ignite-machine
      configuration: default
      subnets:
        - address_pool: 10.1.9.0/24
    opendistro_for_elasticsearch:
      count: 0
      machine: logging-machine
      configuration: default
      subnets:
        - address_pool: 10.1.10.0/24
    repository:
      count: 1
      machine: repository-machine
      configuration: default
      subnets:
        - address_pool: 10.1.11.0/24
    single_machine:
      count: 0
      machine: single-machine
      configuration: default
      subnets:
        - address_pool: 10.1.1.0/24
```
