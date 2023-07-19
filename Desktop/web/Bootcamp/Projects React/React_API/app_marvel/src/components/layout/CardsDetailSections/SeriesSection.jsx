import { useEffect, useState } from 'react';
import { getComic } from '../../../api/client';
import "./comicsSection.css"

function SeriesSection({ series, namePage }) {
    
  const items = series.items;
  const [comicDetaill, setComicDetaill] = useState([]);
  const [imagenActual, setImagenActual] = useState(0);

  

   const cantidad = comicDetaill?.length;


  const siguienteImagen = () => {
    setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  };

  const anteriorImagen = () => {
    setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
  };

  useEffect(() => {
    async function fetchData() {
      let comicsOject = await createObjectInfo(items,namePage);

      setComicDetaill(comicsOject);
    }

    fetchData();
  }, [items,namePage]);

  return (
    <>
      {!!Object.keys(comicDetaill).length? (
        <div className="card">
          <section>
            <h2 id="tit-section">SERIES</h2> 

            <ul className="">
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {comicDetaill.map((r, index) => (
                    <li key={r.id} className="list-group-item card">
                        
                      <div
                        className={
                          imagenActual === index
                            ? 'carousel-item active'
                            : 'carousel-item'
                        }
                      >
                        <h5>{r.name}</h5>
                        <img
                          src={r.img}
                          className="d-block w-100 rounded mx-auto d-block"
                          alt={r.name}
                        />
                        <p>{r.description}</p>

    
                      </div>
                    </li>
                  ))}
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                  onClick={anteriorImagen}
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                  onClick={siguienteImagen}
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </ul>
          </section>
        </div>
      ) : (
        <p></p>
      )}
    </>
  );
}

export default SeriesSection;

async function createObjectInfo(items,namePage) {
  let comicsOject = [];

    if (items){
        for (let i = 0; i < items.length; i++) {
          
          const url = items[i].resourceURI;
      
          const result = await getComic(namePage, url);
      
      
          const comicsInfo = {
            id: i,
            name: items[i].name,
            url: items[i].resourceURI,
            description: result.results[0].title,
            img: `${result.results[0].thumbnail.path}.${result.results[0].thumbnail.extension}`,
          };
          comicsOject.push(comicsInfo);
        }
    }



  return comicsOject;
}
