import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const address = formData.get('address');
  const total = formData.get('total');
  const items = formData.get('items');

  // Itt feldolgozhatjuk a rendelést, például elmenthetjük egy adatbázisba
  console.log('Rendelés feldolgozva:', { name, email, address, total, items });

  // Szimuláljunk egy kis késleltetést a feldolgozásban
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Sikeres válasz küldése
  return NextResponse.json({ success: true, message: 'Rendelés sikeresen feldolgozva' });
}

