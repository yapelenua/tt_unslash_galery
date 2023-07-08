import { SearchInput } from './SearchInput';
import './SearchComponent.scss';

export const SearchComponent = () => {
  return (
    <div className="search">
      <div className="search__content">
        <div>
          <h1 className="search__content__title">
            Unsplash
          </h1>
        </div>
        <div className="search__content__description">
          <p>
            The internet&apos;s source for visuals.
            <br />
            Powered by creators everywhere.
          </p>
        </div>
        <SearchInput />
      </div>
    </div>
  );
};