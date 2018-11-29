/* eslint-disable-next-line import,prettier/prettier */
import {
  Home,
  NotFound,
} from '../views';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Vriends',
    },
  },
  {
    path: '*',
    name: 'Error 404',
    component: NotFound,
    meta: {
      title: 'Page not Found',
    },
  },
];
