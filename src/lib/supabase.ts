import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL or Anon Key is missing. Booking functionality will not work in production.');
}

// Export a dummy client if keys are missing to prevent app crash
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : { 
      from: () => ({ 
        insert: async () => ({ error: new Error("Supabase is not configured.") }) 
      }) 
    } as any;
