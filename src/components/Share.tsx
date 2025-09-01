"use client";
export default function Share() {
  const share = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "KorhoCare – Soins à domicile Korhogo",
        text: "Bénéficiez de soins infirmiers à domicile en 30 min !",
        url: window.location.href,
      });
    }
  };
  return (
    <button
      onClick={share}
      className="bg-blue-600 text-white px-4 py-2 rounded-full shadow"
    >
      📤 Partager
    </button>
  );
}
