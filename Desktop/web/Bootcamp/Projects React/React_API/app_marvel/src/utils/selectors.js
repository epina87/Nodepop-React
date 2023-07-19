export const getCards = (namePage, marvel) => {
  let data;
  switch (namePage) {
    case 'comics':
      marvel.comic.areLoaded ? (data = marvel.comic.data) : (data = []);
      break;

    case 'creators':
      marvel.creator.areLoaded ? (data = marvel.creator.data) : (data = []);
      break;

    case 'characters':
      marvel.character.areLoaded ? (data = marvel.character.data) : (data = []);
      break;

    case 'events':
      marvel.event.areLoaded ? (data = marvel.event.data) : (data = []);
      break;

    case 'series':
      marvel.serie.areLoaded ? (data = marvel.serie.data) : (data = []);
      break;

    case 'stories':
      marvel.storie.areLoaded ? (data = marvel.storie.data) : (data = []);
      break;

    default:
      data = [];
      break;
  }

  return data;
};

export const filterCards = (marvel, id) => {
  const result = marvel.filter(card => card.id.toString() === id);
  return result;
};
