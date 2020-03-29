import one from '../img/one.jpg';
import two from '../img/two.jpg';
import three from '../img/three.jpg';
import four from '../img/four.jpg';
import five from '../img/five.jpg';
import six from '../img/six.jpg';
export const imgs = [ one, two, three, four, five, six ];

import wall1 from '../img/wallpaper1.jpg';
import wall2 from '../img/wallpaper2.jpg';
import wall3 from '../img/wallpaper3.jpg';
import wall4 from '../img/wallpaper4.jpg';
import wall5 from '../img/wallpaper5.jpg';
import wall6 from '../img/wallpaper6.jpg';
import wall7 from '../img/wallpaper7.jpg';
import wall8 from '../img/wallpaper8.jpg';
const wallpapers = [ wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8 ];
export const wallpaper = wallpapers[ Math.floor(Math.random() * 8) ];

export const categories = [
    'TV Shows',
    'Action',
    'Drama',
    'Comedy',
    'Documentary',
    'Sci-Fi',
    'Reality'
];
