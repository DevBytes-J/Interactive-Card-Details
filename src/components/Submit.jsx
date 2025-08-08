import Success from "./Success";
import React, { useState } from "react";
export default function Submit (){
    const [setSuccess, SuccessOpen] = useState(false);
  return(
    <>
      <Success isOpen={setSuccess} onClose={() => SuccessOpen(false)} />
      <button
        type="submit"
        onClick={() => setSuccess(true)}
        className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/70 transition-colors duration-200 transform hover:scale-105 hover:cursor-pointer"
      >  
        Confirm
      </button>
    </>
  );
}
