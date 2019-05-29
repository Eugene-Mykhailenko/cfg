import 'normalize.css';
import '../../sass/common-styles.scss';
import './index.scss';

import 'babel-polyfill';
import $ from 'jquery';
import { setupScroll } from '../../components/scrollfix';
import { setupI18N } from '../../components/languages';
import { setupSideMenu } from '../../components/side-menu';
import { setupScrollMagic } from '../../components/scrollMagic';

$(() => {
  setupScroll();
  setupI18N();
  setupSideMenu();
  setupScrollMagic();
});
