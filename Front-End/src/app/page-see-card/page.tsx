import React from "react";
import CardData from "../interface/CardData";
import Header from "../components/header";
import Button from "../components/button";

export default function SeeCard({
  searchParams,
}: {
  searchParams: {
    product: string;
    supplier: string;
    brand: string;
  };
}) {
  return (
    <>
      <Header button={true} />
      <div className="max-w-2xl mx-auto h-64 rounded-2xl bg-slate-200 flex flex-col justify-center">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="font-bold text-sm">{searchParams.product}</h1>
          <ul className="gap-2 text-sm">
            <li>Fornecedor: {searchParams.supplier}</li>
            <li>Marca: {searchParams.brand}</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Button label={"Voltar"} href={"/page-cards"} px={"px-10"} />
      </div>
    </>
  );
}
