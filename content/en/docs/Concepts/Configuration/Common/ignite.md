---
title: "Apache Ignite"
weight: 12
main_menu: true
content_type: concept
description: >
  Ignite caching options
---

{{% pageinfo %}}
The content of the `ignite.yml` file is listed for reference only
{{% /pageinfo %}}

```yaml
---
kind: configuration/ignite
title: "Apache Ignite stateful installation"
name: default
specification:
  enabled_plugins:
  - ignite-rest-http
  config: |
    <?xml version="1.0" encoding="UTF-8"?>

    <!--
      Licensed to the Apache Software Foundation (ASF) under one or more
      contributor license agreements.  See the NOTICE file distributed with
      this work for additional information regarding copyright ownership.
      The ASF licenses this file to You under the Apache License, Version 2.0
      (the "License"); you may not use this file except in compliance with
      the License.  You may obtain a copy of the License at
          http://www.apache.org/licenses/LICENSE-2.0
      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.
    -->

    <beans xmlns="http://www.springframework.org/schema/beans"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="
          http://www.springframework.org/schema/beans
          http://www.springframework.org/schema/beans/spring-beans.xsd">

        <bean id="grid.cfg" class="org.apache.ignite.configuration.IgniteConfiguration">
          <property name="dataStorageConfiguration">
            <bean class="org.apache.ignite.configuration.DataStorageConfiguration">
              <!-- Set the page size to 4 KB -->
              <property name="pageSize" value="#{4 * 1024}"/>
              <!--
              Sets a path to the root directory where data and indexes are
              to be persisted. It's assumed the directory is on a separated SSD.
              -->
              <property name="storagePath" value="/var/lib/ignite/persistence"/>

              <!--
                  Sets a path to the directory where WAL is stored.
                  It's assumed the directory is on a separated HDD.
              -->
              <property name="walPath" value="/wal"/>

              <!--
                  Sets a path to the directory where WAL archive is stored.
                  The directory is on the same HDD as the WAL.
              -->
              <property name="walArchivePath" value="/wal/archive"/>
            </bean>
          </property>

          <property name="discoverySpi">
            <bean class="org.apache.ignite.spi.discovery.tcp.TcpDiscoverySpi">
              <property name="ipFinder">
                <bean class="org.apache.ignite.spi.discovery.tcp.ipfinder.vm.TcpDiscoveryVmIpFinder">
                  <property name="addresses">
    IP_LIST_PLACEHOLDER
                  </property>
                </bean>
              </property>
              <property name="localPort" value="47500"/>
              <!-- Limit number of potentially used ports from 100 to 10 -->
              <property name="localPortRange" value="10"/>
            </bean>
          </property>

          <property name="communicationSpi">
            <bean class="org.apache.ignite.spi.communication.tcp.TcpCommunicationSpi">
              <property name="localPort" value="47100"/>
              <!-- Limit number of potentially used ports from 100 to 10 -->
              <property name="localPortRange" value="10"/>
            </bean>
          </property>

          <property name="clientConnectorConfiguration">
            <bean class="org.apache.ignite.configuration.ClientConnectorConfiguration">
              <property name="port" value="10800"/>
              <!-- Limit number of potentially used ports from 100 to 10 -->
              <property name="portRange" value="10"/>
            </bean>
          </property>

          <property name="connectorConfiguration">
            <bean class="org.apache.ignite.configuration.ConnectorConfiguration">
              <property name="port" value="11211"/>
              <!-- Limit number of potentially used ports from 100 to 10 -->
              <property name="portRange" value="10"/>
            </bean>
          </property>

        </bean>
    </beans>

```
