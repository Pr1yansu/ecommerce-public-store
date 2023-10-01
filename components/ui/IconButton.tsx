import { cn } from "@/libs/utils";
import React, { MouseEventHandler } from "react";

interface Props {
  icon: React.ReactElement;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const IconButton: React.FC<Props> = ({ icon, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full items-center justify-center bg-white/75 hover:bg-white shadow-md p-2 hover:scale-110 transition-all",
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
