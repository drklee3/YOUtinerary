# YOUtinerary <!-- omit in toc -->

Web application that provides easy scheduling and visual overviews of trips.
Project for CSCI 187: Design and Management of Software at SCU.

## Table of Contents <!-- omit in toc -->

-   [Overview](#overview)
    -   [Stack](#stack)
        -   [Front end](#front-end)
        -   [Back End](#back-end)
-   [Dependencies](#dependencies)
    -   [Debian / Ubuntu](#debian--ubuntu)
    -   [Arch Linux](#arch-linux)
    -   [MacOS](#macos)
    -   [Windows](#windows)
-   [Installation](#installation)
-   [Running](#running)
-   [Testing](#testing)
-   [Contributing](#contributing)

## Overview

### Stack

[TypeScript] and [Node.js]. [Yarn Workspaces] is used to install all node
dependencies at once.

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

Enable the [Windows Subsystem for Linux][wsl], install Ubuntu (or your preferred
distro), then follow the steps listed above.

## Installation

```bash
# Clone this repository
git clone git@github.com:drklee3/YOUtinerary.git

# Or with HTTPS
git clone https://github.com/drklee3/YOUtinerary.git

# Change to YOUtinerary directory
cd YOUtinerary

# Install node dependencies for all packages
yarn
```

## Running

To run packages from the root directory:

```bash
yarn run web:dev
yarn run api:dev
```

If you want to run packages within their respective directories, first `cd` into
the package directory then run the following commands.

**Note:** Running the front and back end use the same Yarn commands.

```bash
# Run for developing with automatic code reloading
yarn run dev

# Run for production
yarn start

# Only build TypeScript (dev and start commands also build before running)
yarn run build
```

## Testing

[Jest] is used for testing. To test all packages, run the following command in
the root YOUtinerary directory. Testing individual packages use the same
command in their respective directory.

```bash
# In YOUtinerary/ or in YOUtinerary/packages/*
yarn run test
```

## Contributing

Follow [Conventional Commits].

[ant design]: https://ant.design/
[conventional commits]: https://www.conventionalcommits.org/en/v1.0.0/
[jest]: https://jestjs.io/
[koa]: https://github.com/koajs/koa
[node.js]: https://nodejs.org/en/
[nvm]: https://github.com/nvm-sh/nvm
[react]: https://reactjs.org/
[typescript]: https://www.typescriptlang.org/
[wsl]: https://docs.microsoft.com/en-us/windows/wsl/install-win10
[yarn]: https://yarnpkg.com/lang/en/
[yarn workspaces]: https://yarnpkg.com/lang/en/docs/workspaces/
