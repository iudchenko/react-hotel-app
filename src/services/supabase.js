import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jfqqtvxjamulzztcatph.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmcXF0dnhqYW11bHp6dGNhdHBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE0ODkyMDUsImV4cCI6MjAwNzA2NTIwNX0.1dKwkubVxBmNHPeNZ9LIi7DhLH7g_-ga_f6cCze-9XQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
