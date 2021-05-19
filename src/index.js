import header from './header';
import home from './home';
import './style.scss';

const root = document.querySelector('#content');

root.append(header.element);
root.append(home());

header.setListener((page) => {

});
