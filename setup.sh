cd ~
sudo apt update && sudo apt upgrade -y
sudo apt install git -y
mkdir -p work/TailwindCSS-$(date +"%d-%m-%Y")
cd work/TailwindCSS-$(date +"%d-%m-%Y")
git clone https://github.com/sergithewinner/tailwind-init.git
cd tailwind-init/
code . && bash install.sh