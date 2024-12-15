import WebshopClient from '@/components/WebshopClient'
import { products } from '@/lib/products'

export default function Home() {
  return (
    <WebshopClient initialProducts={products} />
  )
}

