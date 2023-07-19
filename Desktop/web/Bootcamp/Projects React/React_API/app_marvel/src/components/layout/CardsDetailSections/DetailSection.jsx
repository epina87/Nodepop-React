import { useEffect, useState } from 'react';
import { getComic } from '../../../api/client';
import './comicsSection.css';

function DetailSection({ data, namePage }) {
  const items = data.items;
  const [dataDetail, setDataDetail] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let creatorsOject = await createObjectInfo(items, namePage);

      setDataDetail(creatorsOject);
    }

    fetchData();
  }, [items, namePage]);

  return (
    <>
      {!!Object.keys(dataDetail).length ? (
        <div className="card">
          <section>
            <h2 id="tit-section">STORIES</h2>
            <ul className="cards ">
              {dataDetail.map(r => (
                <li key={r.id} className="list-group-item card">
                  <h3 className="card-title" id="card-tit">
                    {r.name}
                  </h3>
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

export default DetailSection;

async function createObjectInfo(items, namePage) {
  let creatorObject = [];

  if (items) {
    for (let i = 0; i < items.length; i++) {
      let objectInfo = {};
      if (items[i].name !== '') {
        objectInfo = {
          id: i,
          name: items[i].name,
          url: items[i].resourceURI,
        };

        creatorObject.push(objectInfo);
      }
    }
  }

  return creatorObject;
}
