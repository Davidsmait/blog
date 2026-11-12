/**
 * Laboratorio de café: historial de pruebas leído en vivo desde Supabase.
 * Única puerta: RPC `public.lab_publico()` (todas las pruebas; `destacada` marca
 * las mejores). Se llama desde el navegador, así que la página se actualiza sin
 * deploy. Con error de red devuelve [].
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
  destacada: boolean
  prueba_padre_id: string | null
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
  agua_receta: string | null
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
    veredicto: 'repetir' | 'ajustar' | 'descartar' | null
  }
  notas: string | null
  cambio_siguiente: string | null
}

export const METODO_LABEL: Record<PruebaPublica['metodo'], string> = {
  espresso: 'Espresso',
  chemex: 'Chemex',
  prensa_francesa: 'Prensa francesa',
  v60: 'V60',
  aeropress: 'AeroPress',
  otro: 'Otro'
}

export async function getPruebasPublicas(
  url: string | undefined = import.meta.env.SUPABASE_URL,
  key: string | undefined = import.meta.env.SUPABASE_ANON_KEY
): Promise<PruebaPublica[]> {
  if (!url || !key) return []

  try {
    const res = await fetch(`${url}/rest/v1/rpc/lab_publico`, {
      method: 'POST',
      headers: {
        apikey: key,
        'Content-Type': 'application/json'
      },
      body: '{}',
      cache: 'no-store'
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
