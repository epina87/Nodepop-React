import { useEffect, useState } from 'react';
import Cards from './layout/CardsSelect/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { getCall } from '../api/client';
import { addCreator } from '../redux/userSlice';

function Creators() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const marvel = useSelector(state => state.marvel);

  useEffect(() => {
    async function fetchData() {
      const result = await getCall('creators');
      dispatch(addCreator(result.results));
      setData(result.results);
    }
    marvel.creator.areLoaded ? setData(marvel.creator.data) : fetchData();
  }, [data, dispatch, marvel]);

  return <Cards data={data} titlePage="Creators Page" />;
}

export default Creators;
