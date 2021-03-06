---
title: "CHANGELOG - v1.3"
weight: 1
date: 2021-11-19
description: >
  Represents the `CHANGELOG` for v1.3
---

# Changelog 1.3

## [1.3.0] YYYY-MM-DD

### Added

- [#1487](https://github.com//lambdastack-platform/lambdastack/issues/1487) - Add RabbitMQ monitoring
- [#2600](https://github.com/lambdastack-platform/lambdastack/issues/2600) - Change lambdastack output structure
- [#2655](https://github.com/lambdastack-platform/lambdastack/issues/2655) - Add 'repmgr node check' to upgrade preflight checks and auto-tests
- [#2643](https://github.com/lambdastack-platform/lambdastack/issues/2643) - Restructure lscli project folder
- [#2666](https://github.com/lambdastack-platform/lambdastack/issues/2666) - Project re-structure part 2
- [#2547](https://github.com/lambdastack-platform/lambdastack/issues/2547) - Refactoring and removal of old code from Ansible inventory creator and upgrade
- [#2644](https://github.com/lambdastack-platform/lambdastack/issues/2644) - Add validation to check hostnames for on-prem deployment
- [#2703](https://github.com/lambdastack-platform/lambdastack/issues/2703) - Add tests for docker and kubelet cgroup driver

### Fixed

- [#2497](https://github.com/lambdastack-platform/lambdastack/issues/2497) - Fix lambdastack apply --full region values
- [#1743](https://github.com/lambdastack-platform/lambdastack/issues/1743) - Virtual machine "kind" mismatch
- [#2656](https://github.com/lambdastack-platform/lambdastack/issues/2656) - WAL files are not removed from $PGDATA/pg_wal directory
- [#1587](https://github.com/lambdastack-platform/lambdastack/issues/1587) - Duplicated SANs for K8s apiserver certificate
- [#1661](https://github.com/lambdastack-platform/lambdastack/issues/1661) - Changing the default Kubernetes certificate location results in a cluster deployment error

### Updated

- Upgrade Flannel to v0.14.0
- Upgrade Calico and Canal to v3.20.2
- Upgrade Coredns to v1.7.0
- Upgrade Kubernetes dashboard to v2.3.1
- Upgrade Kubernetes metrics-scraper to v1.0.7
- [#2093](https://github.com/lambdastack-platform/lambdastack/issues/2093) - Upgrade K8s to v1.19.15
- [#2494](https://github.com/lambdastack-platform/lambdastack/issues/2494) - Duplicated MOTD after ssh to servers
- [#1974](https://github.com/lambdastack-platform/lambdastack/issues/1974) - [documentation] Azure Files Persistent Volume Support
- [#2454](https://github.com/lambdastack-platform/lambdastack/issues/2454) - Remove dependencies for K8s v1.17
- [#2537](https://github.com/lambdastack-platform/lambdastack/issues/2537) - [PostgreSQL] [upgrade] Do not remove new packages automatically in rollback
- [#2180](https://github.com/lambdastack-platform/lambdastack/issues/2180) - [documentation] Missing clear information about supported CNI plugins

### Deprecated

### Breaking changes

### Known issues
