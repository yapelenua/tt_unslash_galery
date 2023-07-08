import React from 'react';
import 'bulma/css/bulma.min.css';
import './Pagination.scss'

type Props = {
  currentPage: number;
  onChange: (newPage: number) => void;
};

const Pagination: React.FC<Props> = ({ currentPage, onChange }) => {
  const lastPage = 5;
  const pages = [];

  if (currentPage === 0) {
    return null;
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // eslint-disable-next-line
  for (let i = 1; i <= lastPage; i++) {
    pages.push(i);
  }

  const NextPage = () => {
    handleScrollToTop();
    onChange(currentPage + 1);
  };

  const PreviousPage = () => {
    handleScrollToTop();
    onChange(currentPage - 1);
  };

  const PageByValue = (value: number) => {
    handleScrollToTop();
    onChange(value);
  };


  return (
    <div className='button__box'>
      <button
        type="button"
        key={currentPage - 1}
        onClick={PreviousPage}
        disabled={currentPage === 1}
        className="button is-centered"
      >
        {'<'}
      </button>
      <ul className='button__box-list'>
        {pages.map((page) => {
          const isActive = currentPage === page;

          return (
            <li
              key={page}
            >
              <button
                type="button"
                onClick={() => PageByValue(page)}
                className="button is-centered"
              >
                {page}
              </button>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        key={currentPage + 1}
        onClick={NextPage}
        disabled={currentPage === lastPage}
        className="button is-centered"
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
