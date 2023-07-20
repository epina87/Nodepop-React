import { useEffect, useState } from 'react';
import CardsDetail from './layout/CardsDetailSections/CardsDetail';
import { useDispatch, useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom';
import { filterCards, getCards } from '../utils/selectors';
import { getCall } from '../api/client';
import { addList } from '../redux/userSlice';
import LoadingPage from './layout/Loading/Loading';
import NotExistDetail from './layout/Error/NotExistDetail';
//import LoadCards from "./LoadCards";

function PageMarvelDetailList() {
  const [loading, setLoading] = useState(false);
  const { id, namePage } = useParams();

  const [data, setData] = useState([]);
  const [dataDetail, setDataDetail] = useState([]);

  const dispatch = useDispatch();

  const marvel = useSelector(state => state.marvel);

  useEffect(() => {
    async function fetchData() {
      const result = await getCall(namePage);
      dispatch(addList({ data: result.results, principalList: namePage }));
      setData(result.results);
    }

    switch (namePage) {
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

    setDataDetail(filterCards(data, id));
    setLoading(true);
  }, [data, dispatch, marvel, namePage, id]);

  console.log(loading);


  return (
    <>
    
      {!!dataDetail?.length ? (
        <CardsDetail data={dataDetail} namePage={namePage} />
      ) : (
        <>

        {loading ?  <NotExistDetail />  : <LoadingPage />}
        </>
      )}
    </>
  );
}

export default PageMarvelDetailList;
