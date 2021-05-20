import header from './header';
import home from './home';
import menu from './menu';
import contact from './contact';
import './style.scss';

const root = document.querySelector('#content');
const main = document.createElement('div');
main.classList.add('main');
root.append(header.element);
root.append(main);

const pages = {
  home,
  menu,
  contact,
};

header.setListener((page) => {
  main.innerHTML = '';
  const body = pages[page];
  if (body) {
    main.append(body);
  }
});
