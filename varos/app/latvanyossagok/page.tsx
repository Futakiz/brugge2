import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const attractions = [
  {
    name: "Belfort",
    description: "A 13. századi harangtorony, amely 83 méter magas és csodálatos kilátást nyújt a városra.",
    image: "/belfort.jpg"
  },
  {
    name: "Grote Markt",
    description: "A város központi tere, amelyet gyönyörű középkori épületek vesznek körül.",
    image: "/grote-markt.jpg"
  },
  {
    name: "Groeningemuseum",
    description: "Híres múzeum, amely a flamand primitívek műveit mutatja be, köztük Jan van Eyck alkotásait.",
    image: "/groeningemuseum.jpg"
  },
  {
    name: "Szentvér-bazilika",
    description: "Gótikus stílusú templom, amely állítólag Krisztus vérének egy cseppjét őrzi.",
    image: "/szentver-bazilika.jpg"
  }
]

export default function Latvanyossagok() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Brugge Látványosságai</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {attractions.map((attraction, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={attraction.image}
                alt={attraction.name}
                width={600}
                height={400}
                className="w-full h-128 object-cover"
              />
              <CardHeader>
                <CardTitle>{attraction.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{attraction.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

