import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const onPlay = function(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds)
};

player.on('timeupdate', throttle(onPlay, 1000));

const playbackPause = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(playbackPause).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});