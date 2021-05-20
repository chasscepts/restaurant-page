import image1 from './assets/caeser-salad.jpg';
import image2 from './assets/peach-and-blackberry-cobble.jpg';
import image3 from './assets/hand-tossed-salad.jpg';
import image4 from './assets/strawberry-cake.jpg';
import image5 from './assets/roasted-vegetable.jpg';
import image6 from './assets/fresh-juice.jpg';
import image7 from './assets/roasted-beef-with-mushroom-sauce.jpg';
import image8 from './assets/tea-coffee-cappuccino.jpg';

// Photo by <a href="https://unsplash.com/@jipy32?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jean-Philippe Delberghe</a> on <a href="https://unsplash.com/s/photos/interior?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

const photoCredit = 'Photo Credit: <a target="_blank" href="https://www.postermywall.com/index.php/d/sirle-kabanen">Sirle K</a>';

const menus = [
  {
    title: 'Caeser Salad',
    image: image1,
    price: '100:00',
  },
  {
    title: 'Peach & Blackberry Cobble',
    image: image2,
    price: '250:00',
  },
  {
    title: 'Hand Tossed Salad',
    image: image3,
    price: '150:00',
  },
  {
    title: 'Strawberry Cake',
    image: image4,
    price: '100:00',
  },
  {
    title: 'Roasted Vegetable',
    image: image5,
    price: '200:00',
  },
  {
    title: 'Fresh Juice',
    image: image6,
    price: '100:00',
  },
  {
    title: 'Roasted Beef With Mushroom Sauce',
    image: image7,
    price: '180:00',
  },
  {
    title: 'Tea/Coffee/Cappuccino',
    image: image8,
    price: '230:00',
  },
];

const menu = (() => {
  const body = document.createElement('div');
  body.classList.add('menu-wrap');
  const aside = document.createElement('div');
  aside.classList.add('menu-aside');
  body.append(aside);
  const main = document.createElement('div');
  main.classList.add('menu-main');
  body.append(main);

  let activeLink;

  menus.forEach((item) => {
    const btn = document.createElement('button');
    btn.textContent = item.title;
    btn.classList.add('menu-link');
    aside.append(btn);
    btn.addEventListener('click', () => {
      if (activeLink) {
        activeLink.classList.remove('active');
      }
      activeLink = btn;
      btn.classList.add('active');

      const wrap = document.createElement('div');
      wrap.classList.add('menu-display-wrap');
      main.innerHTML = '';
      main.append(wrap);

      const posterWrap = document.createElement('div');
      posterWrap.classList.add('menu-poster-wrap');
      wrap.append(posterWrap);

      const img = document.createElement('img');
      img.src = item.image;
      img.classList.add('menu-item-poster');
      posterWrap.append(img);
      const creditWrap = document.createElement('div');
      creditWrap.classList.add('menu-poster-credit-wrap');
      creditWrap.innerHTML = photoCredit;
      posterWrap.append(creditWrap);

      const title = document.createElement('div');
      title.classList.add('menu-title');
      title.textContent = item.title;
      wrap.append(title);

      const price = document.createElement('div');
      price.classList.add('menu-price');
      price.textContent = `Price: ₦${item.price}`;
      wrap.append(price);
    });
    if (!activeLink) {
      btn.click();
    }
  });

  return body;
})();

export default menu;
