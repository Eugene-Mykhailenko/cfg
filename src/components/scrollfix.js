import $ from 'jquery';

const SCROLL_MARGIN = 0;

const activeteLinkOnScroll = (links, headerHeight) =>
  links.each((i, e) => {
    const link = $(e);
    const href = link.attr('href').replace('/', '');

    if (!href.startsWith('#') || href === '#') {
      return;
    }

    const scrollPos = $(document).scrollTop() + SCROLL_MARGIN;
    const el = $(href);

    const start = el.position().top - headerHeight - SCROLL_MARGIN - 5;
    const end = start + el.outerHeight(true) - SCROLL_MARGIN;

    if (start <= scrollPos && end > scrollPos) {
      link.addClass('active');

      return;
    }

    link.removeClass('active');
  });

const scrollFix = () => {
  // if ($(document).width() < MAGIC_WIDTH) {
  //   return;
  // }

  const header = $('.main-header');
  const links = $('.main-header, .main-footer-bottom-nav, .side-menu-nav').find(
    'a',
  );

  const scroll = () => {
    const headerHeight = header.height();

    if (header.offset().top - SCROLL_MARGIN < headerHeight) {
      header.removeClass('active');
    } else {
      header.addClass('active');
    }

    activeteLinkOnScroll(links, headerHeight);
  };

  scroll();

  $(window)
    .off('scroll')
    .on('scroll', scroll);
};

const hashLink = 'a[href*="/#"]:not([href="/#"])';

const toggleActive = element => {
  $(`${hashLink}.active`).removeClass('active');

  $(element).addClass('active');
};

const scrollTo = target => {
  const margin = $('.main-header').height() + SCROLL_MARGIN;

  $('html,body').animate(
    {
      scrollTop: target.offset().top - margin,
    },
    500,
  );
};

function handleHashClick(e) {
  if (!this.hash) {
    return;
  }

  if (
    location.pathname.replace(/^\//, '') !== this.pathname.replace(/^\//, '') ||
    location.hostname !== this.hostname
  ) {
    return false;
  }

  e.preventDefault();

  let target = $(this.hash);

  const newHash = this.hash.slice(1);

  target = target.length ? target : $(`[name='${newHash}']`);

  if (target.length) {
    scrollTo(target);

    window.location.hash = newHash;

    return;
  }
}

export const setupScroll = () => {
  // if ($(document).width() > MAGIC_WIDTH) {
  scrollFix();
  // }

  $(window).on('resize', scrollFix);
  $(hashLink).on('click', handleHashClick);

  setTimeout(scrollToHash, 100);
};

export const scrollToHash = () => {
  const hash = window.location.hash;

  if (!hash || hash === '#') {
    return false;
  }

  const target = $(hash);

  if (target.length) {
    scrollTo(target);

    return false;
  }
};
