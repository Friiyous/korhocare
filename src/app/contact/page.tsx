export default function Contact() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Où nous trouver</h1>
      <p className="mb-4">POROCARE – Quartier France, Korhogo, Côte d’Ivoire</p>
      <div className="aspect-video">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.123456789012!2d-5.623456789!3d9.456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMjcnMjQuNCJOIDXCsDM3JzI0LjQiVw!5e0!3m2!1sfr!2sci!4v9999999999999!5m2!1sfr!2sci"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
}
