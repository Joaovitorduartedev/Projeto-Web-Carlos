
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ofntyopaopidbjxdsxsv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mbnR5b3Bhb3BpZGJqeGRzeHN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyMzIwODAsImV4cCI6MjA2MzgwODA4MH0.AcEsxwKjcTQihjIy8ogH9aQyBMA7E8Z2dO8yfUJ5tOk";


export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);