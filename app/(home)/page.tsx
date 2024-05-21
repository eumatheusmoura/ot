import AdicionarCarteiraButton from "@/app/components/home/addcarteira-button";
import TabelaDeCarteiras from "../components/home/wallet/page";

export default async function Home() {
  return (
    <section className="container flex flex-col gap-8">
      <AdicionarCarteiraButton />
      <TabelaDeCarteiras />
    </section>
  );
}
