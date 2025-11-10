import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ehgzwngxthniadxoyfwd.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoZ3p3bmd4dGhuaWFkeG95ZndkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NDQ4NTcsImV4cCI6MjA3ODMyMDg1N30.mnOcauSfpAEGRGRgUDDRJurqpYyM-w374fnK1MpGXNI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

