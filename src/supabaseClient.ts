import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://didgazkkuadbguuovgov.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpZGdhemtrdWFkYmd1dW92Z292Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDY0NTMzNjEsImV4cCI6MTk2MjAyOTM2MX0.KB6nghnkNc1-M0md50p6Q0EgKNlnAcl1D5KfXVk4cwo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
