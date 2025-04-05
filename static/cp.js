
(
  // TODO: set active when scrolling
  function () {
    "use strict";

    window.onload = () => {
      const nav = document.querySelector('.navbar-nav');
      const menuItems = [...nav.children];
      const setActive = (event) => {
        menuItems.map((el) => {
          const anchor = el.children[0];
          anchor.classList.remove('active');
        });
        event.target.classList.add('active');
      };
      menuItems.map((el) => {
        const anchor = el.children[0];
        anchor.addEventListener('click', setActive);
      });
    };
  }
)();