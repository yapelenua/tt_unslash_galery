import React, {
    FormEvent,
    memo,
    useEffect,
    useState,
  } from 'react';
  import { useNavigate, useSearchParams } from 'react-router-dom';
  import { searchImages } from '../../api/images';
  import { getSearchParams } from '../../utils/getSearchParams';
  
  export const SearchInput: React.FC = memo(() => {
    const [search, setSearch] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
  
    const query = searchParams.get('query') || '';
    const page = searchParams.get('page') || '1';
  
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (search.trim() === '') {
        navigate('/');
        return;
      }
  
  
      try {
        await searchImages(query, Number(page));
  
        if (query !== search) {
          setSearchParams(getSearchParams(
            searchParams,
            { query: search || null },
          ));
        }
  
        navigate(`/search?query=${search}`);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      return (() => {
        getSearchParams(searchParams, { query: null });
      });
    }, [searchParams]);
  
    return (
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="input"
          placeholder="Search high-resolution images"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    );
  });
  