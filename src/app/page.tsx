import Image from "next/image";
import { money_track as MoneyTrack } from "../components/money_track";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
     <MoneyTrack />
    </main>
  );
}
