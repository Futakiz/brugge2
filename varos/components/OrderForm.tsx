'use client'

import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';

interface OrderFormProps {
  onSubmit: (formData: FormData) => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ onSubmit }) => {
  const { total, items } = useCart();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('address', address);
    formData.append('total', total.toString());
    formData.append('items', JSON.stringify(items));
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-1">Név</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-1">E-mail</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="address" className="block mb-1">Cím</label>
        <textarea
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <button type="submit" className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Rendelés leadása
      </button>
    </form>
  );
};

export default OrderForm;

