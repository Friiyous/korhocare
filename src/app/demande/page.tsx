"use client"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {z} from "zod"
import {useEffect, useState} from "react"

const schema = z.object({
  patientName: z.string().min(2),
  phone: z.string().min(8),
  service: z.enum(["soins","analyse","suivi","orientation CHR"]),
  description: z.string().optional(),
  address: z.string().min(4)
})
type Form = z.infer<typeof schema>

export default function Demande() {
  const [requests, setRequests] = useState<Form[]>([])
  const [loading, setLoading] = useState(true)
  const {register, handleSubmit, reset} = useForm<Form>({resolver: zodResolver(schema)})

  const refresh = () => {
    setLoading(true)
    fetch("/api/requests").then(r => r.json()).then(data => {
      setRequests(data)
      setLoading(false)
    })
  }
  useEffect(() => {refresh()}, [])

  const onSubmit = async (data:Form) => {
    await fetch("/api/requests", {method: "POST", body: JSON.stringify(data), headers:{"Content-Type":"application/json"}})
    reset(); refresh();
  }

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Demande de soins</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 mb-8">
        <input {...register("patientName")} placeholder="Nom complet" className="input" />
        <input {...register("phone")} placeholder="Téléphone" className="input" />
        <select {...register("service")} className="input">
          <option>Sélectionner le service</option>
          <option value="soins">Soins à domicile</option>
          <option value="analyse">Prélèvement / analyse</option>
          <option value="suivi">Suivi post-opératoire</option>
          <option value="orientation CHR">Orientation CHR</option>
        </select>
        <input {...register("address")} placeholder="Adresse" className="input" />
        <textarea {...register("description")} placeholder="Description" className="input" />
        <button className="btn">Envoyer</button>
      </form>

      {loading && <div className="text-center my-6">Chargement…</div>}

      <section>
        <h2 className="text-2xl mb-2">Demandes en cours</h2>
        {requests.map(r => (
          <div key={r.phone} className="card mb-2">
            <p><b>{r.patientName}</b> – {r.service}</p>
            <p>{r.address} – {r.phone}</p>
          </div>
        ))}
      </section>
    </main>
  )
}
