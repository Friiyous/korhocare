"use client";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem("cookies")) setShow(true);
  }, []);
  const accept = () => {
    localStorage.setItem("cookies", "1");
    setShow(false);
  };
  if (!show) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 text-white p-3 text-center text-sm z-50">
      Ce site utilise des cookies pour améliorer votre expérience.
      <button onClick={accept} className="ml-3 bg-blue-600 px-3 py-1 rounded">
        OK
      </button>
    </div>
  );
}
