import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const traditions = [
  {
    name: "Csipkekészítés",
    description: "A brugge-i csipke világhírű. Ez a finom kézműves hagyomány a 15. századig nyúlik vissza.",
    image: "/csipke.jpg"
  },
  {
    name: "Sörfőzés",
    description: "Brugge híres sörfőző hagyományáról. A város számos sörfőzdével büszkélkedhet, amelyek egyedi ízvilágú söröket készítenek.",
    image: "/sor.jpg"
  },
  {
    name: "Csokoládékészítés",
    description: "A belga csokoládé világhírű, és Brugge az egyik központja ennek a finom hagyománynak.",
    image: "/csoki.jpg"
  },
  {
    name: "Heilig Bloedprocessie",
    description: "Ez az éves vallási felvonulás, amely Krisztus vérének ereklyéjét ünnepli, több mint 700 éves múltra tekint vissza.",
    image: "/heilige.jpg"
  },
  {
    name: "Karácsonyi vásár",
    description: "A brugge-i karácsonyi vásár egy varázslatos hagyomány, amely minden évben elbűvöli a látogatókat.",
    image: "/karacsonyivasar.jpg"
  },
  {
    name: "Népzene és tánc",
    description: "A flamand népzene és néptánc fontos része Brugge kulturális életének, számos fesztivállal és eseménnyel.",
    image: "/folktanc.jpg"
  }
]

export default function Hagyomanyok() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Brugge Hagyományai</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {traditions.map((tradition, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={tradition.image}
                alt={tradition.name}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle>{tradition.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{tradition.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

