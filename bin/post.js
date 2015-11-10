#!/usr/bin/env node

var fs = require('fs');
var prompt = require('prompt');

var date = new Date();

init();

function init() {
  prompt.start();

  // customize the prompt message and delimiter
  prompt.message = "New Post?".red;
  prompt.delimiter = " ".green;

  // get the info
  prompt.get([
    {
      name: 'name',
      description: 'add the speakers name'.green
    },
    {
      name: 'title',
      description: 'add the title of the talk'.green
    },
    {
      name: 'date',
      description: 'add today\'s date (mm)'.green
    },
    {
      name: 'twitter',
      description: 'add the twitter handle'.green
    }
  ],

  function (err, result) {
    // write out the file with the passed in options
    fs.writeFileSync(getFileName(result), writeText(result));

    // provide a success message
    writeSuccessMessage(result);
  });
}

function getFileName(result) {
  var fileName = './_posts/' + '2015-11-' + result.date + '-' + result.title.replace(/\s+/g, '-').toLowerCase() + '.md';
  return fileName;
}

function writeText(result) {
  // create the text for the file
  var text = '---\n';
  text += 'layout: post\n';
  text += 'title: "' + result.title + '"\n';
  text += 'name: "' + result.name + '"\n';
  text += 'date: 2015-11-' + result.date + ' ' + date.getHours() + ':' + date.getMinutes() + ':'  + date.getSeconds() + '\n';
  text += 'twitter: ' + result.twitter + '\n';
  text += 'slides: inactive\n';
  text += '---\n';

  return text;
}

function writeSuccessMessage(result) {
  console.log('Success!\n');
  console.log('You\'ve created a file named ' + getFileName(result) + '!\n');
  console.log('and the file text looks like this:\n');
  console.log(writeText(result));
}
