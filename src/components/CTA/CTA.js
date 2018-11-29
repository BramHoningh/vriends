import VueTypes from 'vue-types';
// import getImageSrc from '../../mixins';

export default {
  name: 'ExampleComponent',
  // mixins: [getImageSrc],
  props: {
    image: VueTypes.string,
    align: VueTypes.string.def('left'),
    color: VueTypes.string,
    title: VueTypes.string,
    description: VueTypes.string,
  },
  methods: {
    getImageSrc(image) {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      return image ? require(`../../assets/images/${image}`) : '';
    },
  },
};
