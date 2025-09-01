"use client";
import Link from "next/link";
import CallNow from "@/components/CallNow";
import ThemeToggle from "@/components/ThemeToggle";

const services = [
  { title: "Soins à domicile", desc: "Infirmier·e en moins de 30 min.", icon: "🏠" },
  { title: "Prélèvements sanguins", desc: "Laboratoire mobile – résultats 24 h.", icon: "🩸" },
  { title: "Suivi post-opératoire", desc: "Contrôles, pansements, conseils.", icon: "🩹" },
  { title: "Orientation CHU", desc: "Cas graves vers le CHU de Korhogo.", icon: "🚑" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 font-sans">
      {/* Bouton dark-mode */}
      <ThemeToggle />

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 py-32 md:py-48">
        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-2xl">POROCARE</h1>
          <p className="mt-4 text-2xl md:text-3xl text-white/90 max-w-3xl">
            Soins premium à domicile à Korhogo.<br />
            <span className="text-yellow-300 font-bold">« Toujours plus loin »</span>
          </p>
          <p className="mt-2 text-lg text-white/80">Disponible 24 h / 24 – Réponse en moins de 15 min</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demande" className="bg-white text-indigo-700 font-bold py-4 px-8 rounded-full text-xl shadow-2xl hover:scale-105 transition">
              Je fais une demande
            </Link>
            <a href="tel:+2250506337667" className="bg-yellow-400 text-slate-900 font-bold py-4 px-8 rounded-full text-xl shadow-2xl hover:scale-105 transition">
              📞 Appeler +225 05 06 33 76 67
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-white">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Nos services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((s, i) => (
            <div key={i} className="group bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition">
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-slate-100 text-center">
        <h3 className="text-3xl font-bold mb-4">Ils nous font confiance</h3>
        <div className="flex justify-center gap-8 text-3xl font-black text-blue-700">
          <div><p className="text-5xl">1 247</p><p className="text-sm font-normal">demandes traitées</p></div>
          <div><p className="text-5xl">4.9</p><p className="text-sm font-normal">/ 5 étoiles</p></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-slate-900 text-white text-center">
        <p>© 2025 POROCARE – Quartier France, Korhogo</p>
        <p>📞 +225 05 06 33 76 67 | 💬 WhatsApp +225 05 06 33 76 67</p>
      </footer>

      {/* Flottants */}
      <span className="fixed top-4 left-4 bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full z-50">
        <span className="w-2 h-2 me-1 bg-green-500 rounded-full"></span>⚡ 15 min garantie
      </span>
      <CallNow />
    </main>
  );
}
