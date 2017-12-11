![screenshot](usage.gif?raw=true "screenshot")

See the demonstration on [YouTube](https://youtu.be/tvi4XGZeZ8Q)
[Live Demo](http://lucao.online)
# brite-core

> test for brite core


## First of all
> You'll need to have [MongoDB](https://docs.mongodb.com/manual/installation/) installed

> You'll need to have Nonemon installed
```bash
npm i nodemon -g
```

## Install dependences
```bash
npm install
```

## Start API

> On `api` folder
```bash

# start database (if you are on linux)
sudo service mongod start

# start database (if you are on macOS)
sudo mongod

# start database (if you are on Windows as administrator)
"C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe"
"C:\Program Files\MongoDB\Server\3.4\bin\mongo.exe"

# serve at localhost:3131/risks
nodemon server.js
```

## Build Setup
> On `brite-core` folder
``` bash
# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
