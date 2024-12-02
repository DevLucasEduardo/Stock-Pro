import React, { useState } from "react";
import CardData from "../interface/CardData";
import Link from "next/link";

const Card = (props: CardData) => {
  return (
    <>
      <Link
        href={{
          pathname: "/page-see-card",
          query: {
            product: props.product,
            supplier: props.supplier,
            brand: props.brand,
          },
        }}
      >
        <div className="border h-72 px-16 rounded-2xl flex items-center justify-center bg-slate-200">
          <div className="flex flex-col gap-2 text-center w-40">
            <h1 className="font-bold text-sm">{props.product}</h1>
            <ul className="gap-2 text-sm">
              <li>Fornecedor: {props.supplier}</li>
              <li>Marca: {props.brand}</li>
            </ul>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
