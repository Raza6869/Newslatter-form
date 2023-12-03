"use client";
//react
import { useContext } from "react";

//context
import { FormContext } from "../context/formContext";

export default function UseFormContext() {
  const context = useContext(FormContext);

  return context;
}
