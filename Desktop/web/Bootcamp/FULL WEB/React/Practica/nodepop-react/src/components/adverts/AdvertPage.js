import { Navigate, useParams } from 'react-router-dom';
import Layout from '../layout/Layout';
import { useEffect, useState } from 'react';
import { getAdvert } from './service';

function AdvertPage() {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [advert, setAdvert] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getAdvert(params.id)
      .then(advert => {
        setAdvert(advert);
        setIsLoading(false);
      })
      .catch(error => setError(error));
  }, [params.id]);

  if (error?.status === 404) {
    return <Navigate to="/404" />;
  }

  return (
    <Layout title="Adverts Detail">
      {isLoading ? (
        <div> Loading ...</div>
      ) : (
        <div className="advertPage">
          {advert && (
            <div>
              <p>{params.id}</p>
              <p>{advert.name}</p>
              <p>{JSON.stringify(advert)}</p>
            </div>
          )}
        </div>
      )}
    </Layout>
  );
}

export default AdvertPage;
