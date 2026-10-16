const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://femvkyynaomqynpwzomz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlbXZreXluYW9tcXlucHd6b216Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc5MDYzMTI5OCwiZXhwIjoyMTA2MjA3Mjk4fQ.eDXNSvnWduG_2e-6CFJzgP23EP48I95O2o4QehIU_a4';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  try {
    const { data, error } = await supabase.from('waitlist').select('*').limit(1);
    if (error) {
      if (error.code === '42P01') {
        console.log('SUCCESS: Connected to Supabase, waitlist table does not exist yet (error 42P01)');
      } else {
        console.error('ERROR querying table:', error);
      }
    } else {
      console.log('SUCCESS: Fetched waitlist data:', data);
    }
  } catch (err) {
    console.error('EXCEPTION:', err);
  }
}

testConnection();
