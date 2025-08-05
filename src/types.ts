export interface Post {
    id: string;
    title: string;
    content: string;
    image_url?: string | null;
    created_at: Date;
    user_id: string; // ✅ 이게 빠졌던 것
    profiles?: {
      name?: string;
    };
  }
  
  