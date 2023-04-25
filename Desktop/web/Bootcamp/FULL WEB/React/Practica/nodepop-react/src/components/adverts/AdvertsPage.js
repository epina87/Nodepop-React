import { useEffect, useState } from 'react';
import './style/AdvertsPage.css';
import { getAdvertsList } from './service';
import { logout } from '../auth/service';
import Layout from '../layout/Layout';
import { Link, NavLink } from 'react-router-dom';

function AdvertsPage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    getAdvertsList().then(adverts => {
      setAdverts(adverts);
      setIsLoading(false);
    });
  }, []);

  return (
    <Layout title="Adverts Page" {...props}>
      {isLoading ? (
        <div> Loading ...</div>
      ) : (
        <div className="Adverts-Page-Container">
          {console.log(adverts)}
          {!!adverts.length ? (
            <ul>
              {adverts.map(advert => (
                <li key={advert.id}>
                  <Link to={`/adverts/${advert.id}`}>
                    {advert.name}

                    {advert.price}
                    <p>{advert.sale}</p>

                    {advert.tags}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <NavLink to="/adverts/new"> Be the first one!</NavLink>
            </p>
          )}
        </div>
      )}
    </Layout>
  );
}

export default AdvertsPage;
