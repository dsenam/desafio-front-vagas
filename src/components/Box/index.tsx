import React, {ReactNode} from 'react';
import "./styles.css";

interface IBoxProps {
  children: ReactNode;
}

const Box = React.memo(({ children }: IBoxProps) => {
  return <div data-testid='box' className="box">{children}</div>;
});

export default Box;
