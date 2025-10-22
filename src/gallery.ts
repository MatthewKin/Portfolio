import './style.css';

// Array of gallery images
const images: string[] = [
  '/Portfolio/WayPoint.gif',
  '/Portfolio/Ceryth.gif',
  '/Portfolio/Lena.gif',
  '/Portfolio/BowlMonster.png',
  '/Portfolio/Lich.png',
  '/Portfolio/Oculus.png',
  '/Portfolio/PushBot.gif',
  '/Portfolio/CircleOfCampfire.png',
  '/Portfolio/HorseGirl.png',
  '/Portfolio/Artificer.png',
  '/Portfolio/TurtleMonk.png',
  '/Portfolio/AstralMage.png',
  '/Portfolio/CrowMagic.png',
  '/Portfolio/Cornifer.png',
  '/Portfolio/Sherma.png',
  '/Portfolio/Hornet.png',
  '/Portfolio/Knight.png'

];

const galleryGrid = document.getElementById('galleryGrid');

images.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Pixel Art';
  img.className = 'gallery-item';
  galleryGrid?.appendChild(img);
});

