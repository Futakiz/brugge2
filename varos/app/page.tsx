import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Image
        src="/brugge-background.jpg"
        alt="Brugge városkép"
        fill
        style={{objectFit: "cover"}}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 text-center">Brugge</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <InfoCard 
            title="Domborzata" 
            content="Brugge sík területen fekszik, átlagos tengerszint feletti magassága 10 méter. A város csatornákkal átszőtt, ami miatt az 'Észak Velencéje' becenevet kapta."
          />
          <InfoCard 
            title="Népesség" 
            content="Brugge lakossága körülbelül 118,000 fő (2021-es adat). A város történelmi központja UNESCO Világörökségi helyszín, ami jelentősen hozzájárul a turisztikai vonzerejéhez."
          />
          <InfoCard 
            title="Földrajzi elhelyezkedés" 
            content="Brugge Belgiumban, Nyugat-Flandria tartományban található, kb. 15 km-re a tengerparttól. Gent 50 km-re délkeletre, Brüsszel pedig 100 km-re délkeletre fekszik tőle."
          />
          <InfoCard 
            title="Legjobb időszak látogatásra" 
            content="A legjobb időszak Brugge meglátogatására a tavasz (április-május) és az ősz (szeptember-október). Ilyenkor kellemes az időjárás, és kevesebb a turista, mint a nyári csúcsidőszakban."
          />
        </div>
      </div>
    </div>
  )
}

function InfoCard({ title, content }: { title: string; content: string }) {
  return (
    <Card className="w-full bg-white bg-opacity-80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{content}</p>
      </CardContent>
    </Card>
  )
}

