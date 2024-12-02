"use client";

import Form from "../components/form";
import { useState } from "react";

import axios from "axios";
import Header from "../components/header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export default function Register() {
  const [isEmpty, setIsEmpty] = useState(false);
  const [formData, setFormData] = useState({
    product: "",
    supplier: "",
    brand: "",
    quantity: "",
  });

  const notify = () => {
    toast.success("Produto registrado!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleChange = (event: any) => {
    setIsEmpty(false);
    let { name, value } = event.target;

    if (name === "accessibility") {
      if (value === "sim") {
        value = true;
      } else if (value === "nao") {
        value = false;
      }
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleClick = (event: any) => {
    let allValuesNotEmpty = Object.values(formData).every(
      (value) => value !== ""
    );
    const { name, value } = event.target;

    if (name === "accessibility" && value === "") {
      allValuesNotEmpty = false;
    }

    if (!allValuesNotEmpty) {
      setIsEmpty(true);
      return;
    }
    const result = postData(formData, "cards/");
    notify();
    clearFields();
  };

  const postData = async (data: {}, endpoint: string) => {
    const API_URL = `http://localhost:8080/${endpoint}`;
    try {
      const request = await axios.post(API_URL, data);
    } catch (error) {
      console.log(error);
    }
  };

  const clearFields = () => {
    setFormData({
      product: "",
      supplier: "",
      brand: "",
      quantity: "",
    });
  };

  return (
    <>
      <Header logOut={true} />

      <h1 className="text-center bold text-3xl">Registrar produto</h1>
      <div className="max-w-3xl mx-auto">
        <form className="gap-4 flex flex-wrap justify-between py-10">
          <Form
            type="text"
            id="1"
            name="product"
            label="Produto"
            value={formData.product}
            onChange={handleChange}
          />
          <Form
            type="text"
            id="2"
            name="supplier"
            label="Fornecedor"
            value={formData.supplier}
            onChange={handleChange}
          />
          <Form
            type="text"
            id="3"
            name="brand"
            label="Marca"
            value={formData.brand}
            onChange={handleChange}
          />
          <Form
            type="text"
            id="4"
            name="quantity"
            label="Quantidade"
            value={formData.quantity}
            onChange={handleChange}
          />
        </form>

        {isEmpty && (
          <div className="flex justify-center pb-5">
            <p className="text-red-600">Há campos não preenchidos.</p>
          </div>
        )}
        <div className="flex justify-center mb-10 self-end">
          <button
            onClick={handleClick}
            className="bg-blue-600  text-white py-4 px-10 rounded-full"
          >
            Registrar
          </button>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </div>
    </>
  );
}
