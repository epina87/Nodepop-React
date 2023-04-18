import { useEffect, useState } from 'react';
import './style/AdvertsPage.css'
import getAdvertsList from './service';



function AdvertsPage(){
    const[adverts,setAdverts] = useState([]);

    useEffect(()=>{
            getAdvertsList().then(
                response => setAdverts(response.data)
                );
    }, [])

    return(
        <div
            className="Adverts-Page-Container"
        >
            <ul>
            {adverts.map(advert=><li key={advert.id}> {advert.text} </li>)}
            </ul>

        </div>

    );

}

export default AdvertsPage;