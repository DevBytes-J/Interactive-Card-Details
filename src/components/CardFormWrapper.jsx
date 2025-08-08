import React, { useState } from "react";
import SideBar from "./SideBar";
import UserInput from "./UserInput";
import Success from "./Success";

export default function CardFormWrapper() {
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};

    const rawCardNumber = cardNumber.replace(/\s+/g, ""); // remove all spaces

    if (!cardholderName.trim()) {
      newErrors.cardholderName = "Can't be blank";
    }

    if (!cardNumber.trim()) {
      newErrors.cardNumber = "Can't be blank";
    } else if (!/^\d{16}$/.test(rawCardNumber)) {
      newErrors.cardNumber = "Wrong format, 16 digits only";
    }

    if (!expiryMonth.trim()) {
      newErrors.expiryMonth = "Can't be blank";
    }

    if (!expiryYear.trim()) {
      newErrors.expiryYear = "Can't be blank";
    }

    if (!cvc.trim()) {
      newErrors.cvc = "Can't be blank";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowSuccess(true);
      resetForm();
    }
  };

  const resetForm = () => {
    setCardholderName("");
    setCardNumber("");
    setExpiryMonth("");
    setExpiryYear("");
    setCvc("");
    setErrors({});
  };

  const handleContinue = () => {
    setShowSuccess(false);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <SideBar
        cardholderName={cardholderName || "JANE APPLESEED"}
        cardNumber={cardNumber || "0000 0000 0000 0000"}
        expiryMonth={expiryMonth || "00"}
        expiryYear={expiryYear || "00"}
        cvc={cvc || "000"}
      />
      <div className="flex-1 flex items-center justify-center p-6 md:p-16">
        {showSuccess ? (
          <Success onContinue={handleContinue} />
        ) : (
          <form
            className="w-full max-w-md p-1 rounded-md"
            onSubmit={handleConfirm}
          >
            <UserInput
              cardholderName={cardholderName}
              setCardholderName={setCardholderName}
              cardNumber={cardNumber}
              setCardNumber={setCardNumber}
              expiryMonth={expiryMonth}
              setExpiryMonth={setExpiryMonth}
              expiryYear={expiryYear}
              setExpiryYear={setExpiryYear}
              cvc={cvc}
              setCvc={setCvc}
              errors={errors}
            />

            <button
              type="submit"
              className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/70 transition-transform duration-200 transform hover:scale-105 mt-6"
            >
              Confirm
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
