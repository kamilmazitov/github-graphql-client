import React from "react";
import { StyledInput } from "./styles";

interface IInputProps {
  value?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
}

const Input = ({ value, type = "text", onChange, id }: IInputProps) => {
  return <StyledInput type={type} value={value} onChange={onChange} id={id} />;
};

export default Input;
