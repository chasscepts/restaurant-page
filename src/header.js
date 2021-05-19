let listener;

const handleClick = (() => {
  let activeHeader;

  return (header, page) => {
    if (activeHeader) {
      activeHeader.classList.remove('active');
    }
    activeHeader = header;
    activeHeader.classList.add('active');
    if (listener) {
      listener(page);
    }
  };
})();

const elementSetup = (() => {
  const element = document.createElement('header');
  element.classList.add('main-header');
  const nav = document.createElement('nav');
  element.append(nav);

  let homeHeader;

  ['Home', 'Menu', 'Contact'].forEach((item) => {
    const btn = document.createElement('button');
    btn.classList.add('tab-header');
    const page = item.toLowerCase();
    btn.addEventListener('click', () => handleClick(btn, page));
    if (!homeHeader) {
      homeHeader = btn;
    }
    nav.append(btn);

    const span = document.createElement('span');
    span.textContent = item;
    btn.append(span);
  });

  return { element, homeHeader };
})();

const header = {
  element: elementSetup.element,
  setListener(callback) {
    listener = callback;
    handleClick(elementSetup.homeHeader, 'home');
  },
};

export default header;
