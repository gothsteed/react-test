import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(null);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setIsLoading(false);
      });
  }, []);

  const handleDollarChange = (event) => {
    setDollar(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const calculateCoinAmount = () => {
    if (!dollar || !selectedPrice) return null;
    return (dollar / selectedPrice).toFixed(6); // 소수점 6자리
  };

  return (
    <div>
      <h1>Coins Calculator ({coins.length})</h1>
      {isLoading ? <strong>Loading...</strong> : (
        <>
          <select onChange={handleSelectChange}>
            <option value="">Select a coin</option>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
              </option>
            ))}
          </select>
          <br />
          <input
            type="number"
            placeholder="Insert your dollar amount"
            value={dollar}
            onChange={handleDollarChange}
          />
          <div>
            {calculateCoinAmount() &&
              <p>You can get {calculateCoinAmount()} coins</p>
            }
          </div>
        </>
      )}
    </div>
  );
}

export default App;
