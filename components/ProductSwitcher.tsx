import { createClient } from '@/lib/supabase/server';
import ProductSwitcherClient from './ProductSwitcherClient';

export default async function ProductSwitcher() {
  const supabase = await createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: profile } = await supabase
    .from('user_profiles')
    .select('products')
    .eq('id', user.id)
    .single();

  if (!profile || !profile.products) return null;

  const products = profile.products as string[];
  
  // Only show the switcher if the user has access to more than one product
  if (products.length < 2) return null;

  return <ProductSwitcherClient />;
}
