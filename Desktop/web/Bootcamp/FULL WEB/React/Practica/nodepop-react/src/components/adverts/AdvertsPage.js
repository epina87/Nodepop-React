import { useEffect, useState } from 'react';
import './style/AdvertsPage.css';
import { getAdvertsList } from './service';
//import { logout } from '../auth/service';
import Layout from '../layout/Layout';
import { Link, NavLink } from 'react-router-dom';

function AdvertsPage() {
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
    <Layout title="Adverts Page" >
      {isLoading ? (
        <div> Loading ...</div>
      ) : (
        <div className="Adverts-Page-Container">
          {console.log(adverts)}
          {!!adverts.length ? (
            <div>
              {adverts.map(advert => (
                <ul>
                <li key={advert.id}>
                  <Link to={`/adverts/${advert.id}`}>
                    Name: {advert.name}
                    <br/>
                    Price: {advert.price}
                    <br/>
                    Type: {advert.sale}
                    <br/>
                    Tags: {advert.tags}
                  </Link>
                </li>
                </ul>

                
              ))}
              
            </div>
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
