'use client'

import React, { useState } from 'react'
import { CartProvider } from '../contexts/CartContext'
import ProductList from './ProductList'
import Cart from './Cart'
import OrderForm from './OrderForm'
import { Product } from '../lib/products'

interface WebshopClientProps {
  initialProducts: Product[]
}

export default function WebshopClient({ initialProducts }: WebshopClientProps) {
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handleOrderSubmit = async (formData: FormData) => {
    try {
      const response = await fetch('/api/placeOrder', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setOrderPlaced(true)
      } else {
        throw new Error('Hiba történt a rendelés során')
      }
    } catch (error) {
      console.error('Rendelési hiba:', error)
      alert('Hiba történt a rendelés során. Kérjük, próbálja újra később.')
    }
  }

  return (
    <CartProvider>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Webshop</h1>
        {orderPlaced ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Sikeres rendelés!</strong>
            <span className="block sm:inline"> Köszönjük a vásárlást!</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <ProductList products={initialProducts} />
            </div>
            <div>
              <Cart />
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Rendelés leadása</h2>
                <OrderForm onSubmit={handleOrderSubmit} />
              </div>
            </div>
          </div>
        )}
      </div>
    </CartProvider>
  )
}

