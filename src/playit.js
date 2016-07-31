import player from 'play-sound';
import path from 'path';

const playit = (track, loop = false) => {          
  player().play(path.join(__dirname, track), (err) => {
    if(loop){
      playit(track, loop);
    }
  });
};

export default playit;