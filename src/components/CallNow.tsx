export default function CallNow() {
  return (
    <>
      {/* Appel direct */}
      <a
        href="tel:+2250506337667"
        className="fixed bottom-28 right-4 bg-blue-600 text-white p-4 rounded-full shadow-xl z-50"
      >
        📞 Appel
      </a>
      {/* WhatsApp */}
      <a
        href="https://wa.me/2250506337667?text=Bonjour%20POROCARE%2C%20j%27ai%20besoin%20d%27aide"
        className="fixed bottom-16 right-4 bg-green-500 text-white p-4 rounded-full shadow-xl z-50"
      >
        💬 WhatsApp
      </a>
    </>
  );
}
