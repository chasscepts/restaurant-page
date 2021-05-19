import './style.scss';
import dish from './dish.jpg';

const root = document.querySelector('#content');

const home = () => {
  const wrap = document.createElement('div');
  wrap.classList.add('home-wrap');
  const h1 = document.createElement('h1');
  h1.innerHTML = 'Taste Restaurant<span>Experience The Delight</span>';
  wrap.append(h1);
  const imageWrap = document.createElement('div');
  imageWrap.classList.add('home-image-wrap');
  wrap.append(imageWrap);
  const img = new Image();
  img.src = dish;
  imageWrap.append(img);
  const unsplashWrap = document.createElement('div');
  unsplashWrap.classList.add('home-unsplash-attr');
  unsplashWrap.innerHTML = 'Photo Credit: <a target="_blank" href="https://unsplash.com/@louishansel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Louis Hansel</a> on <a target="_blank" href="https://unsplash.com/s/photos/dishes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
  imageWrap.append(unsplashWrap);

  return wrap;
};

root.append(home());
