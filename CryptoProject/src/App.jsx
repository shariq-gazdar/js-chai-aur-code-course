import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [cryptoData, setCryptoData] = useState(null);

  async function updateFunction() {
    const apiKey = "59936340-1c28-4440-8f54-6be9f10d556d";
    const url =
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

    try {
      const response = await fetch(url, {
        headers: {
          "X-CMC_PRO_API_KEY": apiKey,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setCryptoData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    updateFunction();
  }, []);

  return (
    <>
      <Navbar />
      <div className="App">
        <h1>Cryptocurrency Data</h1>
        <button onClick={updateFunction}>Update Data</button>
        {cryptoData ? (
          <div>
            {cryptoData.data.slice(0, 5).map((crypto) => (
              <div key={crypto.id}>
                <h2>{crypto.name}</h2>
                <p>Price: ${crypto.quote.USD.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </>
  );
}

export default App;
