import React, { useState } from 'react';
import './CurrencyConverter.css'; // Import the CSS file

function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [sourceCurrency, setSourceCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(null);

  // Define additional state for custom conversion rate inputs
  const [customConversionRate, setCustomConversionRate] = useState('');
  const [customConversionResult, setCustomConversionResult] = useState('');

  const handleConvert = () => {
    // Your conversion logic here (for fixed conversion rate)
    const conversionRate = 0.85;
    const result = amount * conversionRate;
    setConvertedAmount(result.toFixed(2)); // Display up to 2 decimal places

    // Calculate custom conversion result if a custom rate is provided
    if (customConversionRate !== '') {
      const customResult = amount * parseFloat(customConversionRate);
      setCustomConversionResult(customResult.toFixed(2));
    } else {
      setCustomConversionResult('');
    }
  };

  return (
    <div className="currency-converter-container">
      <h1 className="currency-converter-title">Currency Converter</h1>
      <div className="currency-converter-input">
        <label className="currency-converter-label">
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
      </div>
      <div className="currency-converter-input">
        <label className="currency-converter-label">
          Source Currency:
          <input
            type="text"
            value={sourceCurrency}
            onChange={(e) => setSourceCurrency(e.target.value)}
          />
        </label>
      </div>
      <div className="currency-converter-input">
        <label className="currency-converter-label">
          Target Currency:
          <input
            type="text"
            value={targetCurrency}
            onChange={(e) => setTargetCurrency(e.target.value)}
          />
        </label>
      </div>
      <button className="currency-converter-button" onClick={handleConvert}>
        Convert
      </button>
      {convertedAmount !== null && (
        <p className="currency-converter-result">
          {amount} {sourceCurrency} is approximately {convertedAmount}{' '}
          {targetCurrency}.
        </p>
      )}

      {/* Additional section for custom conversion rate */}
      <div className="currency-converter-input">
        <label className="currency-converter-label">
          Custom Conversion Rate:
          <input
            type="number"
            step="0.01"
            value={customConversionRate}
            onChange={(e) => setCustomConversionRate(e.target.value)}
          />
        </label>
      </div>
      {customConversionResult !== '' && (
        <p className="currency-converter-result">
          Custom conversion result: {customConversionResult} {targetCurrency}
        </p>
      )}
    </div>
  );
}

export default CurrencyConverter;



