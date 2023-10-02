import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
        console.log(data)
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
    // fetch('url')
    // .then((res) => res.json())
    // .then((data) => setData(data))
  }, [url]);

  return { data, loading, error };
};

// Example usage in a component
const MyComponent = () => {
  const { data, loading, error } = useFetch('https://dummyjson.com/products/');
  console.log(data)

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      {data && (
        <ul>
          {data.products.slice(0, 5).map((item) => (
            <li key={item.brand}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyComponent;
