export default {
  name: 'getImageSrc',
  methods: {
    getImageSrc(image) {
      console.log('hoi');
      const requiredImage = require.context('../assets/', false, /\.png$/);
      return requiredImage(`./${image}.png`);
    },
  },
};
