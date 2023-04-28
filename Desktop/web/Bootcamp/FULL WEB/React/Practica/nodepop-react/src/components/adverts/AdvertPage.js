import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Layout from '../layout/Layout';
import { useEffect, useState } from 'react';
import { deleteAdvert, getAdvert } from './service';
import '../layout/style/Button.css';

function AdvertPage() {
  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [advert, setAdvert] = useState(null);
  const navigate = useNavigate();

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

  const handleDeleteAd = async event => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const response = await deleteAdvert(advert.id);
      console.log(response)
      setIsLoading(false);
      navigate("/adverts");
    } catch (error) {

      <Navigate to="/404" />;
    }
  };

  return (
    <Layout title="Adverts Detail">
      {isLoading ? (
        <div> Loading ...</div>
      ) : (
        <div className="advertPage">
          {advert && (
            <>
              <div className="advertPageView">
                <div className="advertPageViewDate">
                  Name: {advert.name}
                  <br />
                  Price: {advert.price}
                  <br />
                  Type:
                  {!advert.sale ? <span> compra</span> : <span> venta</span>}
                  <br />
                  Tags:{' '}
                  <ul>
                    {advert.tags.map(tag => (
                      <li key={tag}>
                        {tag.charAt(0).toUpperCase() + tag.slice(1)}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="submit"
                    className="btn"
                    onClick={handleDeleteAd}
                  >
                    Delete Ad
                  </button>
                </div>
                <div>
                  <img
                    src={advert.photo}
                    alt={advert.name}
                    width="500"
                    height="600"
                  ></img>
                </div>
                <div></div>
              </div>
            </>
          )}
        </div>
      )}
    </Layout>
  );
}

export default AdvertPage;
