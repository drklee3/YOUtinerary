# YOUtinerary

Web application that provides easy scheduling and visual overviews of trips.  Project for CSCI 187: Design and Management of Software at SCU.

## Table of Contents

* [YOUtinerary](#youtinerary)
  * [Table of Contents](#table-of-contents)
  * [Overview](#overview)
    * [Stack](#stack)
      * [Front end](#front-end)
      * [Back End](#back-end)
  * [Dependencies](#dependencies)
    * [Debian / Ubuntu](#debian--ubuntu)
    * [Arch Linux](#arch-linux)
    * [MacOS](#macos)
    * [Windows](#windows)
  * [Installation](#installation)
  * [Running](#running)
  * [Contributing](#contributing)

## Overview

### Stack

[TypeScript], [Node.js]

#### Front end

[React], [Ant Design]

#### Back End

[Koa]

## Dependencies

[Node.js] and [Yarn].

[NVM] is recommended (but not required) to manage different Node.js versions

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

# Or with Yay
yay nodejs yarn
```

### MacOS

```bash
# Install Homebrew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# Install Node.js and Yarn
brew install node yarn
```

### Windows

Enable the [Windows Subsystem for Linux][WSL], install Ubuntu (or your preferred
distro), then follow the steps listed above.

## Installation

```bash
# Clone this repository
git clone git@github.com:drklee3/YOUtinerary.git

# Or with HTTPS
git clone https://github.com/drklee3/YOUtinerary.git

cd YOUtinerary/server

# Install node dependencies
yarn
```

## Running

Running the front and back end use the same Yarn commands.

```bash
# First cd into api or web

# Run for developing with automatic code reloading
yarn run dev

# Run for production
yarn start

# Only build TypeScript (dev and start commands also build before running)
yarn run build
```

## Contributing

Follow [Conventional Commits].

[Ant Design]: https://ant.design/
[Conventional Commits]: https://www.conventionalcommits.org/en/v1.0.0/
[Koa]: https://github.com/koajs/koa
[Node.js]: https://nodejs.org/en/
[NVM]: https://github.com/nvm-sh/nvm
[React]: https://reactjs.org/
[TypeScript]: https://www.typescriptlang.org/
[WSL]: https://docs.microsoft.com/en-us/windows/wsl/install-win10
[Yarn]: https://yarnpkg.com/lang/en/
