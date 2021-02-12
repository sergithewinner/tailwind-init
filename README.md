# TailwindCSS Install Script

Script is completely written by me (sergithewinner) with little help of guides and documentations.

### Installation

This Script Tested & Worked Under [Linux](https://www.linux.org/pages/download/)

Open bash terminal and paste commands one by one:

```sh
$ cd ~
$ sudo apt update && sudo apt upgrade -y
$ sudo apt install git -y
$ mkdir -p work/TailwindCSS-$(date +"%d-%m-%Y")
$ cd work/TailwindCSS-$(date +"%d-%m-%Y")
$ git clone https://github.com/sergithewinner/tailwind-init.git
$ cd tailwind-init/
$ code . && bash setup.sh
```
