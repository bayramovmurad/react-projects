import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

// Create a client
const queryClient = new QueryClient();

const fetchUnsplashData = async (searchTerm) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${import.meta.env.VITE_KEY}`);

  return response.data.results;
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('cat');

  const { data, error, isLoading } = useQuery({
    queryKey: ['unsplashData', searchTerm],
    queryFn: () => fetchUnsplashData(searchTerm),
    keepPreviousData: true
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const newSearchTerm = e.target.elements.search.value;
    setSearchTerm(newSearchTerm);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" name="search" defaultValue="cat" />
        <button type="submit">Search</button>
      </form>
      <div>
        {data.map((photo) => (
          <div key={photo.id}>
            <img src={photo.urls.small} alt={photo.description || 'No description'} />
          </div>
        ))}
      </div>
    </div>
  );
};

const AppWrapper = () => (
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

export default AppWrapper;
