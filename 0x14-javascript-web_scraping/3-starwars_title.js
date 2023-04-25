#!/usr/bin/node
// script that prints the title of a Star Wars movie
const request = require('request');
const id = process.argv[2];
request('https://swapi-api.alx-tools.com/api/films/' + id + '/', function (error, response, body) {
  if (error == null) {
    const json = JSON.parse(body);
    console.log(json.title);
  }
});
