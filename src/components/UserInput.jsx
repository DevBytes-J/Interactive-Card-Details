import React from "react";

export default function UserInput({
  cardholderName,
  setCardholderName,
  cardNumber,
  setCardNumber,
  expiryMonth,
  setExpiryMonth,
  expiryYear,
  setExpiryYear,
  cvc,
  setCvc,
  errors,
}) {
  const handleCardholderNameChange = (e) => {
    const value = e.target.value.toUpperCase().replace(/[^A-Z\s]/g, "");
    setCardholderName(value);
  };

  const handleCardNumberChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, "").substring(0, 16);
    const formatted = rawValue.replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardNumber(formatted);
  };

  const handleMonthChange = (e) => {
    let value = e.target.value.replace(/\D/g, "").substring(0, 2);
    if (value.length === 2) {
      const month = parseInt(value, 10);
      if (month < 1 || month > 12) value = "01";
    }
    setExpiryMonth(value);
  };

  const handleYearChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").substring(0, 2);
    setExpiryYear(value);
  };

  const handleCvcChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").substring(0, 4);
    setCvc(value);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 border ${
      errors[field] ? "border-red-500" : "border-secondary-200"
    } rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200`;

  const errorText = (field) =>
    errors[field] && (
      <p className="text-sm text-red-500 mt-1">{errors[field]}</p>
    );

  return (
    <div className="space-y-5 font-display mt-[0px] md:mt-[0px]">
      <div>
        <label htmlFor="cardholderName" className="block text-sm font-medium text-primary mb-1">
          Cardholder Name
        </label>
        <input
          type="text"
          id="cardholderName"
          className={inputClass("cardholderName")}
          placeholder="e.g. Jane Appleseed"
          value={cardholderName}
          onChange={handleCardholderNameChange}
          maxLength="26"
        />
        {errorText("cardholderName")}
      </div>

      <div>
        <label htmlFor="cardNumber" className="block text-sm font-medium text-primary mb-1">
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          className={inputClass("cardNumber")}
          placeholder="e.g. 1234 5678 9123 0000"
          value={cardNumber}
          onChange={handleCardNumberChange}
          maxLength="19"
        />
        {errorText("cardNumber")}
      </div>

      <div className="flex gap-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-primary mb-1">
            Exp. Date (MM/YY)
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              className={inputClass("expiryMonth")}
              placeholder="MM"
              value={expiryMonth}
              onChange={handleMonthChange}
              maxLength="2"
            />
            <input
              type="text"
              className={inputClass("expiryYear")}
              placeholder="YY"
              value={expiryYear}
              onChange={handleYearChange}
              maxLength="2"
            />
          </div>
          {(errors.expiryMonth || errors.expiryYear) && (
            <p className="text-sm text-red-500 mt-1">
              {errors.expiryMonth || errors.expiryYear}
            </p>
          )}
        </div>

        <div className="w-1/2">
          <label htmlFor="cvc" className="block text-sm font-medium text-primary mb-1">
            CVC
          </label>
          <input
            type="text"
            id="cvc"
            className={inputClass("cvc")}
            placeholder="e.g. 123"
            value={cvc}
            onChange={handleCvcChange}
            maxLength="4"
          />
          {errorText("cvc")}
        </div>
      </div>
    </div>
  );
}
