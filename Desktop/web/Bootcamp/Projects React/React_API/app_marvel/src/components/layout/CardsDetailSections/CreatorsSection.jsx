import { useEffect, useState } from 'react';
import { getComic } from '../../../api/client';
import './comicsSection.css';

function CreatorsSection({ creators, namePage }) {
  const items = creators.items;
  const [creatorDetaill, setCreatorsDetaill] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let creatorsOject = await createObjectInfo(items, namePage);

      setCreatorsDetaill(creatorsOject);
    }

    fetchData();
  }, [items, namePage]);



  return (
    <>
      {!!Object.keys(creatorDetaill).length ? (
        <div className="card">
          <section>
            <h2 id="tit-section">CREATORS</h2>
            <ul className="cards ">
              {creatorDetaill.map(r => (
                <li key={r.id} className="list-group-item card">
                  <h3 className="card-title" id="card-tit">
                    {r.name}
                  </h3>

                  <div className="container-sm card-body " id="div-padding-0">
                    <img src={r.img} className="d-block w-100" id="img-creator" alt={r.name} />
                    <p>{r.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            
          </section>
        </div>
      ) : (
        <p></p>
      )}
    </>
  );
}

export default CreatorsSection;

async function createObjectInfo(items, namePage) {
  let creatorObject = [];

    
  if (items) {
      for (let i = 0; i < items.length; i++) {
        const url = items[i].resourceURI;
    
        const result = await getComic(namePage, url);
    
        const objectInfo = {
          id: i,
          name: items[i].name,
          url: items[i].resourceURI,
          img: `${result.results[0].thumbnail.path}.${result.results[0].thumbnail.extension}`,
        };
        creatorObject.push(objectInfo);
      }
  }

  return creatorObject;
}
