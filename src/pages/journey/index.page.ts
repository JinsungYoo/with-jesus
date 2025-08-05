// src/pages/journey/index.page.ts
export const prerender = false;
import { createServerSupabaseClient } from '../../lib/createServerSupabaseClient.js';

export async function get({ request }: { request: Request }) {
  
  const supabase = createServerSupabaseClient(request); // ✅ request 직접 넘김

  const { data: { session } } = await supabase.auth.getSession();
  console.log('🔐 session:', session);

  if (!session) {
    return {
      redirect: '/login',
    };
  }
  

  const { data: posts, error } = await supabase
    .from('posts')
    .select(`*, profiles(name)`)
    .order('created_at', { ascending: false });

    console.log('🔐 session:', session);     // 👉 session 이 null이면 인증 안됨
    console.log('🗂️ posts:', posts);         // 👉 인증 성공 시 posts 나와야 정상
    console.log('❗error:', error); 
    
  return {
    props: {
      session,
      posts,
      error,
    },
  };
}

