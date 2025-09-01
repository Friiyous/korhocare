"use client";
export default function CopyNumber() {
  const copy = () => {
    navigator.clipboard.writeText("+2250506337667");
    alert("Numéro copié !");
  };
  return (
    <button
      onClick={copy}
      className="mt-4 bg-slate-800 text-white px-3 py-1 rounded text-sm"
    >
      📋 Copier le numéro
    </button>
  );
}
