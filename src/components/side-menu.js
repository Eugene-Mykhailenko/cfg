import $ from 'jquery';

const MENU = '.side-menu';
const BURGER = '.main-header__burger';
const ACTIVE = 'active';

export const setupSideMenu = () => {
  const doc = $(document);

  doc.on('click', e => {
    const el = $(e.target);

    if (
      el.is(MENU) ||
      el.is(BURGER) ||
      el.parents(MENU).length ||
      el.parents(BURGER).length
    ) {
      return;
    }

    $(MENU).removeClass(ACTIVE);
  });

  doc.on('click', BURGER, () => {
    $(MENU).addClass(ACTIVE);
  });

  doc.on('click', '.side-menu .btn-close, .side-menu-nav__item', e => {
    // console.log('ddd');
    // e.preventDefault();

    $(MENU).removeClass(ACTIVE);
  });
};
