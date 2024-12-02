import Button from "./components/button";
import Image from "next/image";
import warehouse1 from "./public/images/warehouse.jpg";
import warehouse2 from "./public/images/warehouse2.jpg";
import warehouse3 from "./public/images/warehouse3.jpg";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Header button={true} />
      <div className="max-w-6xl mx-auto">
        <section className="flex justify-center font-bold text-7xl">
          <h1 className="w-9/12 text-center mb-20">
            Estoque Inteligente com StockPro
          </h1>
        </section>

        <section className="flex justify-center flex-wrap mb-40">
          <Button
            label="Visualizar produtos cadastrados"
            href="/page-cards"
            px="px-40"
          />
        </section>
        <hr />
        <section className="mt-28 mb-28 gap-10 flex">
          <div className="flex-col basis-9/12">
            <h1 className="font-bold text-5xl mb-8">Sobre nós</h1>
            <p className="text-xl text-gray-500 mb-8">
              StockPro é um Software de gerenciamento de Estoque.
              Seu objetivo é otimizar seu estoque de maneira fácil e ágil. 
              Seja para pequenas empresas ou para quem lida com grandes 
              quantidades de estoque, o StockPro oferece as ferramentas 
              certas para manter tudo organizado e economizar tempo.
            </p>
          </div>
          <div className="">
            <Image
              src={warehouse1}
              width={500}
              height={500}
              alt="Picture of the author"
              className="rounded-md"
            />
          </div>
        </section>
        <hr />
        <section className="mt-28 mb-28 gap-10 flex">
          <div className="flex-col basis-9/12">
            <h1 className="font-bold text-5xl mb-8">Funcionalidades</h1>
            <p className="text-xl text-gray-500 mb-8">
            Nosso software permite que novos usuários se registrem facilmente, façam login de maneira 
            segura e tenham acesso a todas as funcionalidades. Além disso, 
            é possível adicionar produtos ao estoque de forma eficiente, 
            garantindo o controle completo dos itens disponíveis, o que facilita a administração e organização do seu negócio.
            </p>
          </div>
          <div className="">
            <Image
              src={warehouse2}
              width={500}
              height={500}
              alt="Picture of the author"
              className="rounded-md"
            />
          </div>
        </section>
        <hr />
        <section className="mt-28 gap-10 flex">
          <div className="flex-col basis-9/12">
            <h1 className="font-bold text-5xl mb-8">Por que a StockPro?</h1>
              <ul className="text-xl text-gray-500 mb-8">
                  <li><strong>Redução de Custos:</strong> Evita desperdícios e possibilita gerenciar seu inventário com precisão, reduzindo despesas.</li>
                  <li><strong>Gestão Eficiente:</strong> Permite organizar e monitorar seu estoque de forma centralizada e simples.</li>
                  <li><strong>Agilidade:</strong> É possível adicionar e gerenciar produtos rapidamente de forma a economizar tempo e otimizar processos.</li>
              </ul>
          </div>
          <div className="">
            <Image
              src={warehouse3}
              width={500}
              height={700}
              alt="Picture of the author"
              className="rounded-md"
            />
          </div>
        </section>


      </div>
    </>
  );
}
