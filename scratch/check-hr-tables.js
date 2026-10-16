const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://femvkyynaomqynpwzomz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlbXZreXluYW9tcXlucHd6b216Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc5MDYzMTI5OCwiZXhwIjoyMTA2MjA3Mjk4fQ.eDXNSvnWduG_2e-6CFJzgP23EP48I95O2o4QehIU_a4';

const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
  const tables = ['companies', 'user_profiles', 'hr_employees', 'staff_profiles', 'organizations'];
  for (const t of tables) {
    const { data, error } = await supabase.from(t).select('*').limit(1);
    console.log(`Table '${t}':`, error ? error.message : 'EXISTS');
  }
}

check().catch(console.error);
