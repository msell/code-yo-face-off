#!/usr/bin/env node

//import Player from 'player';

// let player = new Player('../tracks/morning-murmur.mp3');

// player.play((err, player) => {
//   console.log('playend!');
// })

var player = require('play-sound')();
player.play('./tracks/morning-murmur.mp3', function(err){});