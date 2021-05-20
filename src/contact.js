import mapMarker from './assets/map-marker.png';
import cellPhone from './assets/cellphone-basic.png';
import phone from './assets/phone.png';
import whatsapp from './assets/whatsapp.png';
import email from './assets/email.png';

const createCard = ({ image, text }) => {
  const card = document.createElement('div');
  card.classList.add('contact-card');
  const img = document.createElement('img');
  img.classList.add('conact-icon');
  img.src = image;
  card.append(img);
  const span = document.createElement('span');
  span.classList.add('card-text');
  span.textContent = text;
  card.append(span);
  return card;
};

const contactInfos = [
  {
    image: mapMarker,
    text: '57 Hilltop Avenue, Ojo',
  },
  {
    image: cellPhone,
    text: '+2348022266688',
  },
  {
    image: phone,
    text: '+23401777254',
  },
  {
    image: whatsapp,
    text: '+2348017856149',
  },
  {
    image: email,
    text: 'service@tastebuds.com',
  },
];

const contact = (() => {
  const element = document.createElement('div');
  element.classList.add('contact-wrap');
  const aside = document.createElement('div');
  aside.classList.add('contact-aside');
  element.append(aside);
  const main = document.createElement('div');
  main.classList.add('contact-main');
  element.append(main);

  contactInfos.forEach((info) => aside.append(createCard(info)));

  const formWrap = document.createElement('div');
  formWrap.classList.add('form-wrap');
  main.append(formWrap);
  const h3 = document.createElement('h3');
  h3.textContent = 'Email Us';
  h3.classList.add('contact-heading');
  formWrap.append(h3);
  const form = document.createElement('form');
  form.addEventListener('submit', (e) => e.preventDefault());
  formWrap.append(form);

  const name = document.createElement('input');
  name.type = 'text';
  name.placeholder = 'Enter Your Name';
  name.classList.add('text-input');
  form.append(name);

  const email = document.createElement('input');
  email.type = 'email';
  email.placeholder = 'Enter Your Email';
  email.classList.add('text-input');
  form.append(email);

  const subject = document.createElement('input');
  subject.type = 'text';
  subject.placeholder = 'Enter Subject';
  subject.classList.add('text-input');
  form.append(subject);

  const area = document.createElement('textarea');
  area.placeholder = 'Message ...';
  form.append(area);

  const submitWrap = document.createElement('div');
  submitWrap.classList.add('submit-wrap');
  form.append(submitWrap);

  const submit = document.createElement('input');
  submit.type = 'submit';
  submit.classList.add('submit');
  submit.value = 'Send Message';
  submitWrap.append(submit);

  return element;
})();

export default contact;
