import { Link } from 'react-router-dom';
import './cards.css';

function Cards({ data, titlePage, namePage }) {
  return (
    <main>    
        <div className="container">
        <h2>{titlePage.toUpperCase()}</h2>
        <section>
            {!!data?.length ? (
            <ul className="cards ">
                {data.map(r => (
                <li key={r.id} className="list-group-item card">
                    <article className="card-body card card-article">
                        <Link to={`/${namePage}/detail/${r.id}`}>

                        
                        <h3 className="card-title" id="card-tit">
                            {r.title}
                        </h3>
                        <div className="container-sm card-body">
                            {!!r.thumbnail ? (
                            <img
                                id="card-img"
                                className="img-fluid rounded mx-auto d-block card-img-top "
                                width="50%"
                                src={`${r.thumbnail.path}.${r.thumbnail.extension}`}
                                alt={r.title}
                            />
                            ) : (
                            <p></p>
                            )}
                        </div>
                        <p className="text-muted">
                            modified - {r.modified.substr(0, 10)} -
                            {r.modified.substr(11, 8)}
                        </p>
                        </Link>
                    </article>
                </li>
                ))}
            </ul>
            ) : (
            <p></p>
            )}
        </section>
        </div>
    </main>
  );
}

export default Cards;
