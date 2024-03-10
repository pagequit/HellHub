import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
	import.meta.env.VITE_SUPABASE_API_URL,
	import.meta.env.VITE_SUPABASE_ANON_KEY,
);

export function useSupabase() {
	return supabase;
}
