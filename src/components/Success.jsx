export default function Success({ onContinue }) {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-6 max-w-sm">
      <img src="/images/icon-complete.svg" alt="Success" className="w-20 h-20" />
      <h2 className="text-2xl font-semibold text-primary">Thank you!</h2>
      <p className="text-gray-600">We've added your card details.</p>
      <button
        onClick={onContinue}
        className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/70 transition-transform duration-200 transform hover:scale-105"
      >
        Continue
      </button>
    </div>
  );
}
