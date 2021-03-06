---
title: "OS Patching"
weight: 13
main_menu: true
content_type: concept
description: >
  LambdaStack how-tos - OS Patching
---

# Patching OS with running LambdaStack components

This guide describes steps you have to perform to patch RHEL and Ubuntu operating systems in a way to not to interrupt working LambdaStack components.

### Disclaimer

We provide a recommended way to patch your RHEL and Ubuntu operating systems. Before proceeding with patching the production environment we strongly recommend patching your test cluster first.
This document will help you decide how you should patch your OS. This is not a step-by-step guide.

### Requirements

- The fresh, actual backup containing your all important data
- Verify if repositories are in the desired state. Details [here](#repositories)

# Table of contents

- [Patching OS with running LambdaStack components](#patching-os-with-running-lambdastack-components)
    - [Disclaimer](#disclaimer)
    - [Requirements](#requirements)
- [Table of contents](#table-of-contents)
  - [AWS](#aws)
    - [Suggested OS images](#suggested-os-images)
    - [Patching methods](#patching-methods)
  - [Azure](#azure)
    - [Suggested OS images](#suggested-os-images-1)
    - [Patching methods](#patching-methods-1)
  - [Patching with OS specific package manager](#patching-with-os-specific-package-manager)
    - [Repositories](#repositories)
    - [RHEL](#rhel)
    - [Ubuntu](#ubuntu)
  - [Patching with external tools](#patching-with-external-tools)

## AWS

### Suggested OS images

For LambdaStack >= v1.2 we recommend the following image (AMI):

- RHEL: `RHEL-7.9_HVM-20210208-x86_64-0-Hourly2-GP2` (kernel 3.10.0-1160.15.2.el7.x86_64),
- Ubuntu: `ubuntu/images/hvm-ssd/ubuntu-bionic-18.04-amd64-server-20210907` (kernel 5.4.0-1056-aws).

Note: For different supported OS versions this guide may be useful as well.

### Patching methods

AWS provides `Patch Manager` that automates the process of patching managed instances.
Benefits:

- Automate patching
- Define approval rules
- Create patch baselines
- Monitor compliance

This feature is available via:

- console: [Systems Manager](https://console.aws.amazon.com/systems-manager/) > Instances & Nodes > [Patch Manager](https://console.aws.amazon.com/systems-manager/patch-manager)
- [AWS CLI](https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-cli-commands.html)

For more information, refer to [AWS Systems Manager User Guide](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html).

## Azure

### Suggested OS images

For LambdaStack >= v1.2 we recommend the following image (urn):

- RHEL: `RedHat:RHEL:7-LVM:7.9.2021051701` (kernel 3.10.0-1160.el7.x86_64),
- Ubuntu: `Canonical:UbuntuServer:18.04-LTS:18.04.202109130` (kernel 5.4.0-1058-azure).

Note: For different supported OS versions this guide may be useful as well.

### Patching methods

Azure has `Update Management` solution in `Azure Automation`. It gives you visibility into update compliance across Azure and other clouds, and on-premises. The feature allows you to create scheduled deployments that orchestrate the installation of updates within a defined maintenance window.
To manage updates that way please refer to [official documentation](https://docs.microsoft.com/en-us/azure/automation/update-management/update-mgmt-manage-updates-for-vm).

## Patching with OS specific package manager

The following commands can be executed in both clustered and non-clustered environments. In case of patching non-clustered environment, you have to schedule a maintenance window due to the required reboot after kernel patching.

Note: Some of the particular patches may also require a system reboot.

If your environment is clustered then hosts should be patched one by one. Before proceeding with the next host be sure that the patched host is up and all its components are running.
For information how to check state of specific LambdaStack components, see [here](./MAINTENANCE.md).

### Repositories

LambdaStack uses the repository role to provide all required packages. The role disables all existing repositories and provides a new one. After successful LambdaStack deployment, official repositories should be re-enabled and lambdastack-provided repository should be disabled.

### RHEL

Verify if *lsrepo* is disabled:
`yum repolist lsrepo`

Verify if repositories you want to use for upgrade are enabled:
`yum repolist all`

List installed security patches:
`yum updateinfo list security installed`

List available patches without installing them:
`yum updateinfo list security available`

Grab more details about available patches:
`yum updateinfo info security available` or specific patch: `yum updateinfo info security <patch_name>`

Install system security patches:
`sudo yum update-minimal --sec-severity=critical,important --bugfix`

Install all patches and updates, not only flagged as critical and important:
`sudo yum update`

You can also specify the exact bugfix you want to install or even which CVE vulnerability to patch, for example:
`sudo yum update --cve CVE-2008-0947`

Available options:

```shell
  --advisory=ADVS, --advisories=ADVS
                        Include packages needed to fix the given advisory, in updates
  --bzs=BZS             Include packages needed to fix the given BZ, in updates
  --cves=CVES           Include packages needed to fix the given CVE, in updates
  --sec-severity=SEVS, --secseverity=SEVS
                        Include security relevant packages matching the severity, in updates
```

**Additional information**
Red Hat provides notifications about security flaws that affect its products in the form of security advisories. For more information, see [here](https://access.redhat.com/security/updates/advisory).

### Ubuntu

For automated security patches Ubuntu uses unattended-upgrade facility. By default it runs every day. To verify it on your system, execute:
`dpkg --list unattended-upgrades`
`cat /etc/apt/apt.conf.d/20auto-upgrades | grep Unattended-Upgrade`

For information how to change Unattended-Upgrade configuration, see [here](https://github.com/mvo5/unattended-upgrades/blob/master/README.md).

The following steps will allow you to perform an upgrade manually.

Update your local repository cache:
`sudo apt update`

Verify if *lsrepo* is disabled:
`apt-cache policy | grep lsrepo`

Verify if repositories you want to use for upgrade are enabled:
`apt-cache policy`

List available upgrades without installing them:
`apt-get upgrade -s`

List available security patches:
`sudo unattended-upgrade -d --dry-run`

Install system security patches:
`sudo unattended-upgrade -d`

Install all patches and updates with dependencies:
`sudo apt-get dist-upgrade`

Verify if your system requires a reboot after an upgrade (check if file exists):
`test -e /var/run/reboot-required && echo reboot required || echo reboot not required`

**Additional information**
Canonical provides notifications about security flaws that affect its products in the form of security notices. For more information, see [here](https://ubuntu.com/security/notices).

## Patching with external tools

Solutions are available to perform kernel patching without system reboot.

- [Red Hat kpatch](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/kernel_administration_guide/applying_patches_with_kernel_live_patching) only for RHEL,
- [Canonical Livepatch Service](https://ubuntu.com/livepatch) only for Ubuntu,
- [KernelCare](https://www.kernelcare.com/) - third-party software. Available also in [AWS Marketplace](https://aws.amazon.com/marketplace/pp/B085ZLFK7B) in SaaS model.

If you have a valid subscription for any of the above tools, we highly recommend using it to patch your systems.
