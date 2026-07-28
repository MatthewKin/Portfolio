// Import global CSS for Vite to bundle
import './style.css';


// GitHub Pages compatible base path
const basePath = import.meta.env.BASE_URL;


// Array of gallery images
const images: string[] = [
  'Orc.gif',
  'Ceryth.gif',
  'LichIdle.gif',
  'FlyerEnemyIdle.gif',
  'WayPoint.gif',
  'Lena.gif',
  'clown.png',
  'BowlMonster.png',
  'Oculus.png',
  'slimeanimationtest.gif',
  'Monster1.gif',
  'Monster2.gif',
  'melissadnd.gif',
  'Cael.gif',
  'yubaba.gif',
  'CircleOfCampfire.png',
  'HorseGirl.png',
  'Artificer.png',
  'TurtleMonk.png',
  'AstralMage.png',
  'CrowMagic.png',
  'Cornifer.png',
  'Sherma.png',
  'Hornet.png',
  'Knight.png',
  'Grimm.png',
  'pkmnGrass.png',
  'pkmnDrag.png',
  'PkmnElec.png',
  'rusTV.png'
];


const galleryGrid = document.getElementById('galleryGrid');


if (galleryGrid) {
  images.forEach(image => {

    const img = document.createElement('img');

    img.src = `${basePath}${image}`;

    img.alt = 'Pixel Art';

    img.className = 'gallery-item';

    galleryGrid.appendChild(img);

  });
}