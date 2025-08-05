import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const supabaseUrl = 'https://vmthbmrxnkatbmtwhtxo.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtdGhibXJ4bmthdGJtdHdodHhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5NzM5MTEsImV4cCI6MjA2NzU0OTkxMX0.irH6VBASyG4iTkrRf9Jfk5sV2GTpTQe7WKrsADYR8p0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  });
