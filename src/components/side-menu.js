import $ from 'jquery';

const MAIN_MENU = '#main-header';
const MENU = '.side-menu';
const BURGER = '.main-header-burger';
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

    // $(MENU).addClass(ACTIVE);
  });

  doc.on('click', BURGER, () => {
    $(MAIN_MENU).addClass('open-menu');
    $(MENU).addClass(ACTIVE);
    $(BURGER).addClass(ACTIVE);
  });

  doc.on('click', '.main-header-burger.active', e => {
    $(MAIN_MENU).removeClass('open-menu');
    $(MENU).removeClass(ACTIVE);
    $(BURGER).removeClass(ACTIVE);
  });

  doc.on('click', '.side-menu-nav__item', e => {
    $(MAIN_MENU).removeClass('open-menu');
    $(MENU).removeClass(ACTIVE);
    $(BURGER).removeClass(ACTIVE);
  });
};
