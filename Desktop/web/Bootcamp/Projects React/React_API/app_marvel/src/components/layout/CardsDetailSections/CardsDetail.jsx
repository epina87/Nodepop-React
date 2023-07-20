import { useEffect, useState } from 'react';
import ComicSection from './ComicsSection';
import './cardsDetail.css';
import CreatorsSection from './CreatorsSection';
import SeriesSection from './SeriesSection';
import DetailSection from './DetailSection';
import LoadingPage from '../Loading/Loading';
import NotExistDetail from '../Error/NotExistDetail';

function CardsDetail({ data, namePage }) {
  const dataDetail = data[0];

  const [loading, setLoading] = useState(false);

  const [comics, setComic] = useState({});
  const [creators, setCreators] = useState({});
  const [events, setEvents] = useState({});
  const [series, setSeries] = useState({});
  const [stories, setStories] = useState({});

  useEffect(() => {
    setComic(!!dataDetail.comics ? dataDetail.comics : {});
    setCreators(!!dataDetail.creators ? dataDetail.creators : {});
    setEvents(!!dataDetail.events ? dataDetail.events : {});
    setSeries(!!dataDetail.series ? dataDetail.series : {});
    setStories(!!dataDetail.stories ? dataDetail.stories : {});

    setLoading(true);
  }, [dataDetail]);

  return (
    <main>
      {!!data?.length ? (
        <section className="container-sm">
          <div className="card">
            <h1 className="card-title">
              {dataDetail.title}
              {dataDetail.firstName}
              {dataDetail.name}
            </h1>

            <img
              src={`${dataDetail.thumbnail.path}.${dataDetail.thumbnail.extension}`}
              className="img-fluid "
              alt={dataDetail.title}
            />

            <p className="card-text">{dataDetail.description}</p>
          </div>
          {!!Object.keys(comics).length ? (
            <article>
              <ComicSection comics={comics} namePage={namePage} />
            </article>
          ) : (
            <></>
          )}

          {!!Object.keys(creators).length ? (
            <article>
              <CreatorsSection creators={creators} namePage={namePage} />
            </article>
          ) : (
            <></>
          )}

          {!!Object.keys(series).length ? (
            <article>
              <SeriesSection series={series} namePage={namePage} />
            </article>
          ) : (
            <></>
          )}

          {!!Object.keys(stories).length ? (
            <article>
              <DetailSection data={stories} namePage={namePage} />
            </article>
          ) : (
            <></>
          )}
        </section>
      ) : (
        <>{loading ? <NotExistDetail /> : <LoadingPage />}</>
      )}
    </main>
  );
}

export default CardsDetail;
