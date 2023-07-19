import { useEffect, useState } from 'react';
import { getCall } from '../api/client';
import { useDispatch, useSelector } from 'react-redux';
import { addComic } from '../redux/userSlice';
import Cards from './layout/CardsSelect/Cards';

function Comics() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const marvel = useSelector(state => state.marvel);

  useEffect(() => {
    async function fetchData() {
      const result = await getCall('comics');
      dispatch(addComic(result.results));
      setData(result.results);
    }
    marvel.comic.areLoaded ? setData(marvel.comic.data) : fetchData();
  }, [data, dispatch, marvel]);

  return <Cards data={data} titlePage="Comics Time" />;
}

export default Comics;
