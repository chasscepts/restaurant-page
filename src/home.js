import circleDish from './assets/circular-dish.png';

// Photo by <a href="https://unsplash.com/@ikredenets?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Irene Kredenets</a> on <a href="https://unsplash.com/s/photos/dish?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

const h = `
<svg viewBox="0 0 500 500">
  <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
  <text width="500">
    <textPath xlink:href="#curve">
      Taste Restaurant
    </textPath>
  </text>
</svg>`;

const home = (() => {
  const wrap = document.createElement('div');
  wrap.classList.add('home-wrap');
  const sphere = document.createElement('div');
  sphere.classList.add('sphere');
  wrap.append(sphere);
  const dummy = document.createElement('div');
  dummy.classList.add('dummy');
  sphere.append(dummy);
  const inner = document.createElement('div');
  inner.classList.add('home-inner');
  sphere.append(inner);
  const svg = document.createElement('div');
  svg.classList.add('svg-wrap');
  svg.innerHTML = h;
  inner.append(svg);
  const dish = new Image();
  dish.src = circleDish;
  dish.classList.add('sphere-dish');
  inner.append(dish);
  const dishSmoother = document.createElement('div');
  dishSmoother.classList.add('sphere-dish-smoother');
  inner.append(dishSmoother);
  const rider = document.createElement('div');
  rider.classList.add('rider');
  rider.textContent = 'Experience The Delight';
  inner.append(rider);
  return wrap;
})();

export default home;
