"use client";
import React, { useState } from "react";

//context
import { FormContext } from "./formContext";

interface ReactTypes {
  children: React.ReactNode;
}

export default function FormProvider({ children }: ReactTypes) {
  const [sucess, setSucess] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <FormContext.Provider value={{ sucess, setSucess, email, setEmail }}>
      {children}
    </FormContext.Provider>
  );
}
