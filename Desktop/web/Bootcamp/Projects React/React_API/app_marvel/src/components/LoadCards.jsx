import { useEffect, useState } from 'react';
import Cards from './layout/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { getCall } from '../api/client';
import { addList } from '../redux/userSlice';

function LoadCards({ principalList }) {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const marvel = useSelector(state => state.marvel);

  useEffect(() => {
    async function fetchData() {
      const result = await getCall(principalList);
      dispatch(addList({ data: result.results, principalList: principalList }));
      setData(result.results);
    }
    switch (principalList) {
      case 'comics':
        marvel.comic.areLoaded ? setData(marvel.comic.data) : fetchData();
        break;

      case 'creators':
        marvel.creator.areLoaded ? setData(marvel.creator.data) : fetchData();
        break;

      case 'characters':
        marvel.character.areLoaded
          ? setData(marvel.character.data)
          : fetchData();
        break;

      case 'events':
        marvel.event.areLoaded ? setData(marvel.event.data) : fetchData();
        break;

      case 'series':
        marvel.serie.areLoaded ? setData(marvel.serie.data) : fetchData();
        break;

      case 'stories':
        marvel.storie.areLoaded ? setData(marvel.storie.data) : fetchData();
        break;

      default:
        setData([]);
        break;
    }
  }, [data, dispatch, marvel, principalList]);

  return (
    <p>Loading...</p>
  );
}

export default LoadCards;
