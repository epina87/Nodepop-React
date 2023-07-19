import { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [viewOptions, setViewOptions] = useState('navbarJustify');
  const [viewOptionsClass, setViewOptionsClass] = useState('');
  const [viewOptionsContainer, setViewOptionsContainer] = useState('');
  const [viewCloseContainer, setViewCloseContainer] = useState(
    'container-view-none',
  );

  const handleSubmit = event => {
    event.preventDefault();

    setViewOptionsClass('navbarView');
    setViewOptionsContainer('navbarViewNone');
    setViewOptions('navbar');
    setViewCloseContainer('container-view-Flex');
  };

  const handleCloseNav = event => {
    event.preventDefault();
    setViewOptionsClass('');
    setViewOptionsContainer('');
    setViewOptions('navbarJustify');
    setViewCloseContainer('container-view-none');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" id={viewOptions}>
      <button
        className="navbar-toggler"
        type="submit"
        id={viewCloseContainer}
        onClick={handleCloseNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-x"
          viewBox="0 0 16 16"
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>

      <ul className="navbar-nav mb-2 mb-lg-0" id={viewOptionsClass}>
        <li className="nav-item" onClick={handleCloseNav}>
          <Link to="/comics" className="nav-link active">
            Comics
          </Link>
        </li>
        <li className="nav-item" onClick={handleCloseNav}>
          <Link to="/creators" className="nav-link active">
            Creators
          </Link>
        </li>
        <li className="nav-item" onClick={handleCloseNav}>
          <Link to="/characters" className="nav-link active">
            Characters
          </Link>
        </li>
        <li className="nav-item" onClick={handleCloseNav}>
          <Link to="/events" className="nav-link active">
            Events
          </Link>
        </li>
        <li className="nav-item" onClick={handleCloseNav}>
          <Link to="/series" className="nav-link active">
            Series
          </Link>
        </li>
        <li className="nav-item" onClick={handleCloseNav}>
          <Link to="/stories" className="nav-link active">
            Stories
          </Link>
        </li>
      </ul>

      <div
        className="container-fluid"
        id={viewOptionsContainer}
        onClick={handleSubmit}
      >
        <button
          className="navbar-toggler"
          type="submit"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
