import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <p className="text-red-600">Hello world</p>
      <Button variant="destructive">Click Me</Button>
    </>
  );
}
