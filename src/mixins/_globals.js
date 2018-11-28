import Vue from 'vue';

/* eslint-disable import/prefer-default-export,import,prettier/prettier */
import {
  // getImageSrc,
} from '.';

/**
 *  Register mixins globally
 * */
const mixins = {
  // getImageSrc,
};

Object.keys(mixins).forEach(key => Vue.mixin(mixins[key]));
