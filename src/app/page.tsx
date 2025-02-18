import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex gap-4">
      <Button size="sm">Primary</Button>
      <Button variant="secondary" size="sm">SECONDARY</Button>
      <Button variant="destructive" size="sm">destructive</Button>
      <Button variant="ghost" size="sm">ghost</Button>
      <Button variant="muted" size="sm">muted</Button>
      <Button variant="outline" size="sm">outline</Button>
      <Button variant="teritary" size="sm">teritary</Button>
    </div>
  )
}
