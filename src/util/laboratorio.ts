/**
 * Laboratorio de café: lectura en build de las pruebas marcadas como públicas.
 * Única puerta: RPC `public.lab_publico()` en Supabase. Sin env vars o con error
 * de red devuelve [] para que el build nunca se rompa.
 */

export interface Vertido {
  t_s: number
  g: number
  tipo?: string
}

export interface PruebaPublica {
  id: string
  fecha: string
  titulo: string | null
  metodo: 'espresso' | 'chemex' | 'prensa_francesa' | 'v60' | 'aeropress' | 'otro'
  familia: 'espresso' | 'filtrado'
  metodo_equipo: string | null
  molino: string | null
  molienda: number | null
  dosis_g: number
  agua_g: number | null
  rendimiento_g: number | null
  ratio: number | null
  temp_c: number | null
  tiempo_total_s: number | null
  preinfusion_agua_s: number | null
  preinfusion_total_s: number | null
  extraccion_s: number | null
  presion_bar: number | null
  vertidos: Vertido[]
  dias_desde_tueste: number | null
  cafe: {
    nombre: string | null
    tostador: string | null
    origen: string | null
    proceso: string | null
    variedad: string | null
  }
  evaluacion: {
    acidez: number | null
    dulzor: number | null
    cuerpo: number | null
    amargor: number | null
    final: number | null
    descriptores: string[]
    calificacion: number | null
  }
  notas: string | null
}

export const METODO_LABEL: Record<PruebaPublica['metodo'], string> = {
  espresso: 'Espresso',
  chemex: 'Chemex',
  prensa_francesa: 'Prensa francesa',
  v60: 'V60',
  aeropress: 'AeroPress',
  otro: 'Otro'
}

export async function getPruebasPublicas(): Promise<PruebaPublica[]> {
  const url = import.meta.env.SUPABASE_URL
  const key = import.meta.env.SUPABASE_ANON_KEY
  if (!url || !key) return []

  try {
    const res = await fetch(`${url}/rest/v1/rpc/lab_publico`, {
      method: 'POST',
      headers: {
        apikey: key,
        'Content-Type': 'application/json'
      },
      body: '{}'
    })
    if (!res.ok) {
      console.warn(`[laboratorio] lab_publico respondió ${res.status}`)
      return []
    }
    const data: unknown = await res.json()
    return Array.isArray(data) ? (data as PruebaPublica[]) : []
  } catch (err) {
    console.warn('[laboratorio] no se pudo leer lab_publico', err)
    return []
  }
}
