export default async function handler(req, res) {
  try {
    const r = await fetch('https://api.api-ninjas.com/v1/quotes', {
      headers: { 'X-Api-Key': process.env.API_NINJAS_KEY, 'Accept': 'application/json' }
    })
    if (!r.ok) return res.status(r.status).json({ error: 'Upstream error' })
    const data = await r.json()
    const item = Array.isArray(data) ? data[0] : data
    return res.status(200).json({ quote: item?.quote ?? '', author: item?.author ?? 'Unknown' })
  } catch (e) {
    return res.status(502).json({ error: 'Proxy failure' })
  }
}