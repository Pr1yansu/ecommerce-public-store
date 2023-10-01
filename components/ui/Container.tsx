import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return <div className="mx-auto max-w-[1440px] px-8 md:px-4">{children}</div>;
};

export default Container;
