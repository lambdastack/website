---
categories: ["Examples", "Placeholders"]
tags: ["docs"] 
title: "Getting Started"
linkTitle: "Getting Started"
weight: 2
description: >
  Simple to get start with LambdaStack
---

{{% pageinfo %}}
LambdaStack comes with a number of simple defaults that only require Cloud vendor Key/Secret or UserID/Password!
{{% /pageinfo %}}

Information in this section helps your user try your project themselves.

* What do your users need to do to start using your project? This could include downloading/installation instructions, including any prerequisites or system requirements.

* Introductory “Hello World” example, if appropriate. More complex tutorials should live in the Tutorials section.

Consider using the headings below for your getting started page. You can delete any that are not applicable to your project.

## Prerequisites (Runtime only - no development)

LambdaStack works on OSX, Windows, and Linux. You can launch it from your desktop/laptop or from build/jump servers. The following are the basic requirements:
* Docker
* Directory on harddrive (laptop or build server depending on where you're wanting to store your LambdaStack generated `manifest` files)
* Git (only if using GitHub fork/cloning to download the source code)
* Internet access (can be executed in an air-gapped environment - details in documentation)
* Python 3.x is **NOT** required. It's listed here just to illustrate it's not actually required. The LambdaStack container has it already built in

## Prerequisites (Development)

If you plan to contribute to the LambdaStack project by doing development then you will need a development and build environment. LambdaStack works on OSX, Windows, and Linux. You can launch it from your desktop/laptop or from build/jump servers. The following are the basic requirements for development:
* Docker
* Git
* GitHub account - Free or paid. You will need to Fork LambdaStack to your GitHub account, make changes, commit, and issue a pull request. The development documentation details this for you with examples
* Internet access (can be executed in an air-gapped environment - details in documentation). If your environment requires proxies then see documentation on how to set that up)
* Python 3.x
* IDE (Visual Code or PyCharm are good environments). We use Visual Code since it's open source. We recommend a few plugin extensions but they get automatically installed if you follow the instructions in the documention on setting up your development environment using Visual Code
* Forked and cloned LambdaStack source code - Start contributing!

## Installation

Where can your user find your project code? How can they install it (binaries, installable package, build from source)? Are there multiple options/versions they can install and how should they choose the right one for them?

## Setup

Is there any initial setup users need to do after installation to try your project?

## Try it out!

>As of LambdaStack v1.3, there are two ways to get started:
1. Simply issue a `docker run ...` command
2. Fork/Clone the LambdaStack GitHub repo at https://github.com/lambdastack/lambdastack

>The upcoming pre-relase version, LambdaStack v2.0.0beta, will have a full Admin UI that will use the default APIs/CLI to manage the full automation of Kubernetes

#### The easiest is option #1:
>Most of below are actually defaults but they are explain for your reference

1. Decide where to store your LambdaStack generated `manifest` files and your SSH key pair (private and public). For example, you may decide to launch from your laptop if you're leaving the default `use_public_ips: True`.  So, create a directory if one does not already exist:
>* `mkdir -p /projects/lambdastack/build/<whatever name you give it>/keys/ssh` - Linux/Mac (note: `build` would also happen automatically with `lambdastack init...` but by creating it and `<whatever name you give it>/keys/ssh` here you don't have to exit the `docker container`)
The `lambdastack init -p <cloud provider> -n <use the name you gave it above>` (e.g., `lambdastack init -p aws -n demo`). The `init` command will automatically append the `/build/<name you give it>/keys/ssh` if it is not already present. So, using the example, `projects/lambdastack/` will have `build/demo/keys/ssh` append to form `projects/lambdastack/build/demo/keys/ssh` (the only hardcoded values are `build` at the beginning `keys/ssh` at the end. The rest are up to you)
2. Create your SSH keys unless you already have a pair you would like to use (note - if you don't have a keypair to use then the following will create them and this is only required once):
>* `ssh-keygen` - It will prompt you for a name and a few other items. At the end it will generate a private and public key (e.g., give it the name and directory - using the example above, give it `/projects/lambdastack/build/demo/keys/ssh/` and it will create the key pair there). If you left the default keypair name of `lambdastack-operations` then you would see `projects/lambdastack/build/demo/keys/ssh/lambdastack-operations` and another file called `lambdastack-operations.pub` in the `.../keys/ssh/` directory
3. If doing AWS - simply copy and paste the `key and secret` from the AWS settings console into the `<name you give it>.yml` file that was generated by `lambdastack init...`. Using the example from above, the name of the file would be `demo.yml` located in the `/projects/lambdastack/build/demo` directory to create `/operations/lambdastack/build/demo/demo.yml`. Simply exchange the `XXXXXXX` value for the corresponding `key: and secret:` values
4. Run `cd <whereever the base of projects is located>/projects/lambdastack/`
5. Launch `Docker...` as follows (using the example above):
>* `docker run -it -v $PWD:/shared --rm lambdastack/lambdastack:latest`. `-v $PWD:/shared` is very important. It represents the drive volume you wish to associate with the container (containers can't persist data so you have to mount a volume [some drive location] to it). `$PWD` simply means Present Workding Directory (Linux/Mac). The `:/shared` is the name of the volume LambdaStack is looking for. `-it` tells the container it will be an `interactive` container that allows you interact at the command line of the Linux container. `-rm` tells the container to stop and release itself from memory after you type `exit` on the container command line to exit. The `lambdastack/lambdastack:latest` is the latest version of lambdastack from the public lambdastack registry at `https://hub.docker.com/lambdastack`
6. The docker command above will put you into `/shared` directory that shows `build/demo/keys/ssh`

#### Option #2:

>If you wish to pull down the open source repo and execute from there then simply do the following:

1. Click the `Fork` option button in the top right in the https://github.com/lambdastack/lambdastack repo. This assumes you have `GitHub` account already. It will ask where you want the forked version to be copied to
2. Next step is to now `Clone` your newly forked LambdaStack repo onto your local hard drive
3. Next step is to go to the root directory of the newly cloned repo on your hard drive
4. By using the following simple bash script, `lsio`, a default `clusters` subdirectory will automatically get created and all of the build information for the cluster will reside there:

>`./lsio` - this is a bash script located in the root directory and uses `clusters` as the required `/shared` directory needed for the `docker run -it -v $PWD/clusters:/shared --rm lambdastack/lambdastack:{tag}` that gets executed by the `lsio` bash script. An improvement to this would be to allow for passin a parameter of specific location for LambdaStack to store the build information in - great opportunity for a Pull Request (PR)!
