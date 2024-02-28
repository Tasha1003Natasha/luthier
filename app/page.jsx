import Navbar from "@/components/Navbar";
import s from "./page.module.css";
import Main from "@/components/Main";

export default function Home() {
  return (
    <main className={s.container}>
      <Navbar />
      <Main />
    </main>
  );
}
