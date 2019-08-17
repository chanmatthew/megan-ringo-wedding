const getAlbumPhotos = () =>
  [...Array(90).keys()].map(i => ({
    src: `/img/album/IMG_${i}.jpg`,
    placeholder: `/img/album/IMG_${i}_opt.jpg`
  }));

export { getAlbumPhotos };
