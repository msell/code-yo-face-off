import player from 'play-sound';
import path from 'path';

export default (track) => {      
  player().play(path.join(__dirname, track), (err) => {
  });
};
