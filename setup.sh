#!/bin/bash

sudo apt-get update

sudo apt-get install git -y
sudo apt-get install zsh -y
sudo apt-get install nginx -y
sudo chsh -s $(which zsh) ubuntu

# NVM install
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
nvm install v4.2.0
nvm alias default v4.2.0

sudo apt-get install python3-pip -y

# Reconfiguring locals
export LC_ALL="en_US.UTF-8"
export LC_CTYPE="en_US.UTF-8"
sudo dpkg-reconfigure locales

# Install postgres
sudo apt-get install postgresql postgresql-contrib -y
sudo apt-get install libpq-dev python3-dev -y
sudo -u postgres psql -c "CREATE USER hackpartner WITH PASSWORD 'password';"
sudo -u postgres psql -c "CREATE DATABASE darwin_push_db"
sudo -u postgres psql -c "CREATE DATABASE rtp_db"
sudo -u postgres psql -c "grant all privileges on database darwin_push_db to hackpartner;"
sudo -u postgres psql -c "grant all privileges on database rtp_db to hackpartner;"




# Frontend RTP installation
npm install -g cordova ionic phonegap



