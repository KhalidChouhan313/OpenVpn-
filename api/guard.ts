export const config = {
  runtime: 'edge',
}

const ALLOWED_IPS = [
  '39.34.154.108',
]

export default function handler(request: Request) {
  const ip =
    request.headers
      .get('x-forwarded-for')
      ?.split(',')[0]
      ?.trim()

  if (!ip || !ALLOWED_IPS.includes(ip)) {
    return new Response('Access Denied ❌', {
      status: 403,
    })
  }

  return new Response('OK', { status: 200 })
}
