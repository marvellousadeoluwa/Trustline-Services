import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function GET() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: 'Supabase credentials not found in environment variables.' }, { status: 500 });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    // We try to query the database. Even fetching from a non-existent table or an existing one will confirm connection.
    // Assuming there might be a 'waitlist' table from the README.
    const { data, error } = await supabase.from('waitlist').select('*').limit(1);
    
    if (error) {
      // If the error is that the relation doesn't exist, it means we connected but the table isn't there, which still confirms connection.
      if (error.code === '42P01') {
        return NextResponse.json({ success: true, message: 'Connected to Supabase successfully, but waitlist table does not exist yet.' });
      }
      throw error;
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Failed to connect to Supabase' }, { status: 500 });
  }
}
