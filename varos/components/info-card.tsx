import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

interface InfoCardProps {
  title: string;
  content: string;
}

export function InfoCard({ title, content }: InfoCardProps) {
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

