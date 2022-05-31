# yomyom-frontend instructions

Requirements:

Node.js (v.16) LTS version
git 2.36.1 version

Try on console this commands to check if you have installed this programs:

    node --version

> v16.13.2

    npm --version

> 8.1.2

On console type:

    git --version

> git version 2.33.0.windows.2

If one or more of this commands don't displays a similar response like last ones,
try to install or reinstall following this instructions:

Node.js (v.16) LTS version
WINDOWS -> [https://phoenixnap.com/kb/install-node-js-npm-on-windows]
MacOS -> [https://www.webucator.com/article/how-to-install-nodejs-on-a-mac/]
INSTALLER >>> [https://nodejs.org/es/download/]

Git 2.36.1 version
WINDOWS, MacOS, Linux -> [https://git-scm.com/book/en/v2/Getting-Started-Installing-Git]
INSTALLER >>> [http://git-scm.com/downloads]

## Installing yomyom-frontend

First you have to clone the repository.
Make a directory to clone the repository
or just navigate to them if it's already exists.
You can make it and access to it typing on console:

    mkdir yomyom-test
    cd .. yomyom-test

Clone the repository:

    git clone https://github.com/JPCervantes/yomyom-frontend.git

You recibe this response:

> Cloning into 'yomyom-frontend'...
> remote: Enumerating objects: 3, done.
> remote: Counting objects: 100% (3/3), done.
> remote: Compressing objects: 100% (2/2), done.
> remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
> Receiving objects: 100% (3/3), 4.44 KiB | 2.22 MiB/s, done.

Enter to the repository route:

    cd yomyom-frontend

Install all the dependencies with:

    npm install

Install the patch for semantic-ui-react with:

    npm run postinstall

You recibe the next response:

> yomyom-frontend@0.1.0 postinstall
> semantic-ui-css-patch
> ℹ Patch was successfully applied

You must use the follow script to start the frontend client:

    npm start

You will recibe the following response:

> yomyom-frontend@0.1.0 start
> react-scripts start
> ...
> webpack compiled with 1 warning
> Files successfully emitted, waiting for typecheck results...
> Issues checking in progress...
> No issues found.

The app will be available on [http://localhost:3000]

====
Important: The backend server yomyom-backend must be up at port [http://localhost:8080]
====

## Available Scripts

Install dependencies:

    npm install
    npm postinstall

To start the client run:

    npm start

## Routes

Open [http://localhost:3000/admin/menu]

to access to menu.

Open [http://localhost:3000/admin/categories]

to access to categories panel.

Open [http://localhost:3000/admin/plates]

to access to plates panel.
