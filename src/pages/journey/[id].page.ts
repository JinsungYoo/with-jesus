// src/pages/journey/[id].page.ts
export const prerender = false;
import { createServerSupabaseClient } from '../../lib/createServerSupabaseClient';
export async function get({ request, params }: { request: Request; params: any }) {
  const supabase = createServerSupabaseClient(request); // ✅ request 객체 그대로 넘김

  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    return {
      redirect: '/login',
    };
  }

  const { data: post, error } = await supabase
    .from('posts')
    .select(`*, profiles(name)`)
    .eq('id', params.id)
    .single();

  return {
    props: {
      session,
      post,
      error,
    },
  };
}