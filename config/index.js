'use strict';
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const path = require('path');
const basePath = path.resolve(__dirname, '../build');
const staticPath = '/static/js'
const jsPath = `${basePath}${staticPath}`;
const routeIdentifier = 'a.Route,{path:"';
const routeRegex = new RegExp(routeIdentifier, 'g');
const repoName = require('../package.json').name;
const redirectHtmlPath = '404.html';


function validateFile(fileName) {
    return /^([a-z]+).([a-z0-9]+).(js)$/.test(fileName);
} 

function findAndUpdate() {
    var file;
    return fs.readdirAsync(jsPath)
    .then(files => {
        file = files.filter(f => validateFile(f))[0];
        return fs.readFileAsync(`${jsPath}/${file}`)
    })
    .then(data => {
        var result = data.toString().replace(routeRegex, `${routeIdentifier}${repoName}`);
        return fs.writeFileAsync(`${jsPath}/${file}`, result, 'utf8');
    })
}

function write404() {
    return fs.readFileAsync(path.resolve(__dirname, redirectHtmlPath))
    .then(data => fs.writeFileAsync(`${basePath}/${redirectHtmlPath}`, data, 'utf8'));
}

function ghPagify() {
    return findAndUpdate()
    .then(() => write404());
}

ghPagify();