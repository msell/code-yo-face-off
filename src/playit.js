// var player = require('play-sound')();
import player from 'play-sound';

export default (track) => {
  player().play(track, (err) => {
  });
};
