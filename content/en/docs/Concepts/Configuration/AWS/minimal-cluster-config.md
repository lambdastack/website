---
title: "Minimal"
weight: 2
main_menu: true
content_type: concept
description: >
  Minimal configuration
---

{{% pageinfo %}}
As of v1.3.4, LambdaStack requires you to change the following attributes in the either the minimal or full configuration YAML. Beginning in v2.0, you will have the option to pass in these parameters to override whatever is present in the yaml file. v2.0 is in active development
{{% /pageinfo %}}

>All but the last two options are defaults. The last two are `AWS Key` and `AWS Secret` - these two are required

Attributes to change for the minimal configuration **After** you run `lambdastack init -p aws -n <whatever name you want to give your cluster>:
* `prefix: staging` - Staging is a default prefix. You can use whatever you like (e.g., `production`). This value can help group your AWS clusters in the same region for easier maintenance
* `name: ubuntu` - This attribute is under `specification.admin_user.name`. For ubuntu on AWS the default user name is `ubuntu`. For Redhat we default to `operations`
* `key_path: lambdastack-operations` - This is the default SSH key file(s) name. This is the name of your SSH public and private key pairs. For example, in this example, one file (private one) would be named `lambdastack-operations`. The second file (public key) typically has a `.pub` suffix such as `lambdastack-operations.pub`
* `use_public_ips: True` - This is the default public IP value. Important, this attribute by default allows for AWS to build your clusters with a public IP interface. We also build a private (non-public) interface using private IPs for internal communication between the nodes. With this attribute set to `public` it simply allows you easy access to the cluster so you can SSH into it using the `name` attribute value from above. This is `NOT RECOMMENDED` for sure not in production and not as a general rule. You should have a VPN or direct connect and route for the cluster
* `region: us-east-1` - This is the default region setting. This means that your cluster and storage will be created in AWS' `us-east-1` region. Important - If you want to change this value in any way, you should use the `full configuration` and then change **ALL** references of region in the yaml file. If you do not then you may have services in regions you don't want and that may create problems for you
* `key: XXXXXXXXXX` - This is very **important**. This, along with `secret` are used to access your AWS cluster programmatically which LambdaStack needs. This can be found at `specification.cloud.credentials.key`. This can be found under your AWS Account menu option in Security Credentials
* `secret: XXXXXXXXXXXXX` - This is very **important**. This, along with `key` are used to access your AWS cluster programmatically which LambdaStack needs. This can be found at `specification.cloud.credentials.secret`. This can be found under your AWS Account menu option in Security Credentials. This can only be seen at the time you create it so use the download option and save the file somewhere safe. DO NOT save the file in your source code repo!

Now that you have made your changes to the <whatever you name your cluster>.yml now run `lambdastack apply -f build/<whatever you name your cluster>/<whatever you name your cluster>.yml`. Now the building of a LambdaStack cluster will begin. `Apply` option will generate a final `manifest.yml` file that will be used for Terraform, Ansible and LambdaStack python code. The `manifest.yml` will combine the values from below plus **ALL** yaml configuration files for each service.

```yaml
---
kind: lambdastack-cluster
title: "LambdaStack Cluster Config"
provider: aws
name: "default"
build_path: "build/path"  # This gets dynamically built
specification:
  name: lambdastack
  prefix: staging  # Can be anything you want that helps quickly identify the cluster
  admin_user:
    name: ubuntu # YOUR-ADMIN-USERNAME
    key_path: lambdastack-operations # YOUR-SSH-KEY-FILE-NAME
    path: "/shared/build/<name of cluster>/keys/ssh/lambdastack-operations" # Will get dynamically created
  cloud:
    k8s_as_cloud_service: False
    use_public_ips: True # When not using public IPs you have to provide connectivity via private IPs (VPN)
    region: us-east-1
    credentials:
      key: XXXXXXXXXX # AWS Subscription Key
      secret: XXXXXXXXX # AWS Subscription Secret
    default_os_image: default
  components:
    repository:
      count: 1
    kubernetes_master:
      count: 1
    kubernetes_node:
      count: 2
    logging:
      count: 1
    monitoring:
      count: 1
    kafka:
      count: 2
    postgresql:
      count: 1
    load_balancer:
      count: 1
    rabbitmq:
      count: 1
```
