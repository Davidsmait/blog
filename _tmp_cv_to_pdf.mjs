import { readFileSync } from 'fs'
import { chromium } from 'playwright'

async function htmlToPdf(htmlPath, outPath) {
  const browser = await chromium.launch()
  const ctx = await browser.newContext()
  const page = await ctx.newPage()
  const html = readFileSync(htmlPath, 'utf-8')
  await page.setContent(html, { waitUntil: 'networkidle' })
  await page.pdf({
    path: outPath,
    format: 'Letter',
    printBackground: true,
    preferCSSPageSize: true
  })
  await browser.close()
  console.log(`✓ ${outPath}`)
}

await htmlToPdf(
  '/sessions/modest-brave-planck/mnt/outputs/cv_es.html',
  '/sessions/modest-brave-planck/mnt/outputs/David_San_Luis_Aguirre_CV_Espanol.pdf'
)
await htmlToPdf(
  '/sessions/modest-brave-planck/mnt/outputs/cv_en.html',
  '/sessions/modest-brave-planck/mnt/outputs/David_San_Luis_Aguirre_Resume.pdf'
)
