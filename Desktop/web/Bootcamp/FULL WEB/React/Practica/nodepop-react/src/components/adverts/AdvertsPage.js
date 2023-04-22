import { useEffect, useState } from 'react';
import './style/AdvertsPage.css';
import { getAdvertsList } from './service';
import { logout } from '../auth/service';

function AdvertsPage({ onLogout }) {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    getAdvertsList().then(adverts => setAdverts(adverts));
    console.log(adverts);
  }, []);

  const handleClick = async () => {
    await logout();
    onLogout();
  };

  return (
    <div className="Adverts-Page-Container">
      <button onClick={handleClick}>Logout</button>
      {!!adverts.length ? (
        <ul>
          {adverts.map(advert => (
            <li key={advert.id}>
              {advert.name}

              {advert.price}
              <p>{advert.sale}</p>

              {advert.tags}
            </li>
          ))}
        </ul>
      ) : (
        <p>Be the first one!</p>
      )}
    </div>
  );
}

export default AdvertsPage;
