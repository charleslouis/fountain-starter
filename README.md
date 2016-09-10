# securicpeche

NOTE : be sure to read http://fountainjs.io/doc/usage/#use-npm-scripts

## Webpack configuration
* navigate to /conf
* find /conf/webpack.conf.js

## App configuration
* most angular modules and app dependancies are required into index.js
* any template is delt with as a component
* require the template and assign it to a name (ie "var header = require('./app/header');")
* inject component (ie : "angular.component('fountainHeader', header)")

## Bootstrap SASS
* every bootstrap SASS components (partial) is injected in .bootstraprc (YAML) in root folder (ie : "buttons: true")
* other parameters can be passed into .bootstraprc such as where to find your own custom bootstrap variables or where to find app styles that goe beyond bootstrap
* in .bootraprc you can also specify if any bootrsp script should be loaded (ie: "alert: true") - so far we don't use it in favor of angular-ui

## custom SASS files
* are found in /app/assets/scss
* partials are imported into /app/assets/scss/style.scss
* /app/assets/scss/custom-variables.scss is loaded after _variables.scss using bootstraprc

## Images
* are stored into /app/assets/img

## App templates
* templates and partials can be found in app/ and app/**
* components are required in index.js and used in html files as directives (ie "<video-landing></video-landing>")
* landing page got its own folder app/landing
* simulator got its own folder app/simulator

## How is jQuery installed ?
* npmi jquery --save
* then "new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery"})" in webpack.conf.js


## TODO
