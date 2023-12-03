"use client";
import React from "react";

//context
import { FormContext } from "./formContext";

interface ReactTypes {
  children: React.ReactNode;
}

export default function FormProvider({ children }: ReactTypes) {
  return <FormContext.Provider value={""}>{children}</FormContext.Provider>;
}
