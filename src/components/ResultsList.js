import { useEffect, useState } from "react";

import Results from "../pages/Results";

function EventsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedResults, setFetchedResults] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchResults() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/results");

      if (!response.ok) {
        setError("Não foi possível carregar resultados.");
      } else {
        const resData = await response.json();
        setFetchedResults(resData.results);
      }
      setIsLoading(false);
    }

    fetchResults();
  }, []);
  return (
    <>
      <div style={{ textAlign: "center" }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedResults && <Results results={fetchedResults} />}
    </>
  );
}

export default EventsPage;