export default {
  name: 'getImageSrc',
  methods: {
    getImageSrc(image) {
      const requiredImage = require.context('../assets/', false, /\.png$/);
      return requiredImage(`./${image}.png`);
    },
  },
};
