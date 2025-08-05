import { createServerClient } from '@supabase/ssr'

export function createServerSupabaseClient(request: Request) {
  return createServerClient(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(key: string) {
          const cookie = request.headers.get('cookie') || ''
          const match = cookie
            .split(';')
            .find(c => c.trim().startsWith(`${key}=`))
            ?.split('=')[1]
          return match ?? null
        }
      }
    }
  )
}
