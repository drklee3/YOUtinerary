# YOUtinerary

Web application that provides easy scheduling and visual overviews of trips.  Project for CSCI 187: Design and Management of Software at SCU.

## Table of Contents

* [YOUtinerary](#youtinerary)
  * [Table of Contents](#table-of-contents)
  * [Overview](#overview)
    * [Front end](#front-end)
    * [Back End](#back-end)
  * [Dependencies](#dependencies)
    * [Debian / Ubuntu](#debian--ubuntu)
    * [Arch Linux](#arch-linux)
    * [MacOS](#macos)
  * [Installation](#installation)

## Overview

### Front end

React, Ant Design

### Back End

Koa

## Dependencies

[NVM](https://github.com/nvm-sh/nvm) is recommended (but not required) to manage
different Node.js versions

### Debian / Ubuntu

```bash
# Node.js
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

# Yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

# Install packages
sudo apt-get update && sudo apt-get install nodejs yarn
```

### Arch Linux

```bash
sudo pacman -Syu nodejs yarn
```

### MacOS

```bash
# Install Homebrew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# Install Node.js and Yarn
brew install node yarn
```

## Installation

```bash
git clone git@github.com:drklee3/YOUtinerary.git

# or with HTTPS
git clone https://github.com/drklee3/YOUtinerary.git

cd YOUtinerary/server

# Install node dependencies
yarn
```
