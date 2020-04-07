# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  # Set box
  config.vm.box = "ubuntu/bionic64"

  config.vm.provider "virtualbox" do |vb|
    # Customize the amount of memory on the VM:
    vb.memory = "2048"
  end

  # Standard HTTP ports
  config.vm.network "forwarded_port", guest: 80, host: 80
  config.vm.network "forwarded_port", guest: 443, host: 443
  config.vm.network "forwarded_port", guest: 8080, host: 8080

  # Set the guest machine hostname
  config.vm.hostname = "shaberi-dev-vm"

  # Set up synced folder
  config.vm.synced_folder "./", "/home/shaberi/"

  # Run provision script to install software etc
  config.vm.provision :shell, path: "provision.sh"

end