"use client";

import React, { useState, useEffect } from "react";

import axios from "axios";
import Button from "../components/button";
import Button1 from "../components/button1";
import Button2 from "../components/button2";
import Header from "../components/header";
import Form from "../components/form";

export default function SignUp() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [isEmpty, setIsEmpty] = useState(false);
  const [isEmailRegistered, setIsEmailRegistered] = useState(false);
  const [href, setHref] = useState("");

  const handleChange = (event: any) => {
    setIsEmpty(false);
    setIsEmailRegistered(false);
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const postSignUpAuthentication = async () => {
    const API_URL = "http://localhost:8080/sign/";
    const sendDataJson = JSON.stringify(formData);

    const allValuesNotEmpty = Object.values(formData).every(
      (value) => value !== ""
    );
    if (!allValuesNotEmpty) {
      setIsEmpty(true);
      return;
    }

    try {
      const response = await axios.post(API_URL, sendDataJson, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setHref("/page-register-card");
      sessionStorage.setItem("isLogged", "true");
      sessionStorage.setItem("userName", response.data.userName);
    } catch (error) {
      setIsEmailRegistered(true);
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <div className="bg-gray-200 p-6 rounded-xl shadow-md max-w-md mx-auto">
        <h1 className="text-center bold text-3xl">Registrar</h1>
        <div className="flex justify-center">
          <div className="flex flex-col gap-4 px-10 pt-10">
            <Form
              type="text"
              id="0"
              name="userName"
              holder="Usuário"
              onChange={handleChange}
            />
            <Form
              type="email"
              id="1"
              name="email"
              holder="E-mail"
              onChange={handleChange}
            />
            <Form
              type="password"
              id="2"
              name="password"
              holder="Senha"
              onChange={handleChange}
            />
            <Form
              type="password"
              id="3"
              name="password"
              holder="Confirmar a Senha"
              onChange={handleChange}
            />
  
            {isEmpty && (
              <p className="text-red-600">Há dados sem preenchimento.</p>
            )}
            {isEmailRegistered && (
              <p className="text-red-600">
                O E-mail já foi previamente cadastrado.
              </p>
            )}
          </div>
        </div>
        <div className="mt-20 flex justify-center mt-5">
          <Button1
            label="Cadastrar"
            href={href}
            px="px-10"
            onClick={postSignUpAuthentication}
          />
        </div>
        <p className="mt-5 flex justify-center">
          Já possui uma conta?{" "}
        </p>
        <div className="mt-20 flex justify-center mt-5">
          <Button2
            label="Fazer Login"
            href={href}
            px="px-10"
            onClick={postSignUpAuthentication}
          />
        </div>
      </div>
    </>
  );
}
