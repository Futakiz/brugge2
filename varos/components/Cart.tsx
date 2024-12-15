'use client'

import React from 'react';
import Image from 'next/image';
import { useCart } from '../contexts/CartContext';

const Cart: React.FC = () => {
  const { items, removeFromCart, total } = useCart();

  return (
    <div className="border p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Kosár</h2>
      {items.length === 0 ? (
        <p>A kosár üres.</p>
      ) : (
        <>
          {items.map(item => (
            <div key={item.id} className="flex items-center mb-2 border-b pb-2">
              <Image
                src={item.image}
                alt={item.name}
                width={50}
                height={50}
                className="mr-2 rounded"
              />
              <div className="flex-grow">
                <span className="font-semibold">{item.name}</span>
                <span className="block text-sm text-gray-500">
                  {item.quantity} x {item.price} Ft
                </span>
              </div>
              <span className="font-semibold">{item.price * item.quantity} Ft</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-2 text-red-500 hover:text-red-700"
              >
                Törlés
              </button>
            </div>
          ))}
          <div className="mt-4 text-xl font-bold">
            Összesen: {total} Ft
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

