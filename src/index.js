import homePage from './home';
import aboutPage from './about';
import contactPage from './contact';

import './style.css';

const container = document.querySelector('.container');

const navbar = document.createElement('div');
navbar.classList.add('nav-bar');
navbar.addEventListener('click', (e) => {
  const id = e.target.id;
  if (id in pages) {
    pageContent.innerHTML = '';
    pageContent.appendChild(pages[id]());
    e.target.classList.add('selected');
  }
  const navbarTabs = document.querySelector('.nav-bar').childNodes;
  navbarTabs.forEach(tab => {
    if (tab.id !== id) {
      tab.classList.remove('selected');
    }
  })
})

const pageContent = document.createElement('div');
pageContent.classList.add('page-content');

function createHelp(text, handler) {
  const element = document.createElement('div');
  element.setAttribute('id', text);
  element.textContent = text;
  element.classList.add('tab');
  return element;
}

const pages = {
  home: homePage,
  about: aboutPage,
  contact: contactPage,
}

for (const page in pages) {
  navbar.appendChild(createHelp(page, pages[page]));
}

container.appendChild(navbar);
container.appendChild(pageContent);
