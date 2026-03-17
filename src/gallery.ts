import './style.css';

// Array of gallery images
const images: string[] = [
  '/Portfolio/Ceryth.gif',
  '/Portfolio/WayPoint.gif',
  '/Portfolio/LichIdle.gif',
  '/Portfolio/FlyerEnemyIdle.gif',
  '/Portfolio/RithvikMushroom.gif',
  '/Portfolio/Lena.gif',
  '/Portfolio/clown.png',
  '/Portfolio/BowlMonster.png',
  '/Portfolio/Oculus.png',
  '/Portfolio/slimeanimationtest.gif',
  '/Portfolio/CircleOfCampfire.png',
  '/Portfolio/HorseGirl.png',
  '/Portfolio/Artificer.png',
  '/Portfolio/TurtleMonk.png',
  '/Portfolio/AstralMage.png',
  '/Portfolio/CrowMagic.png',
  '/Portfolio/Cornifer.png',
  '/Portfolio/Sherma.png',
  '/Portfolio/Hornet.png',
  '/Portfolio/Knight.png',
  '/Portfolio/pkmnDrag.png',
  '/Portfolio/PkmnElec.png',
  '/Portfolio/Kuze.png',
  '/Portfolio/rusTV.png'
];

const galleryGrid = document.getElementById('galleryGrid');

images.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Pixel Art';
  img.className = 'gallery-item';
  galleryGrid?.appendChild(img);
});

