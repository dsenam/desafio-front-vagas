import { ReactNode } from "react";
import "./styles.css";

interface IBoxProps {
  children: ReactNode;
}

const Box = ({ children }: IBoxProps) => {
  return <div className="box">{children}</div>;
};

export default Box;
