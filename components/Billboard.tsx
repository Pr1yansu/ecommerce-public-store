import React from "react";
import { BillboardProps } from "@/types";

interface Props {
  data: BillboardProps;
}

const Billboard: React.FC<Props> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-6 rounded-xl">
      <div
        className="aspect-square relative md:aspect-[2.4/1] bg-cover bg-center rounded-xl overflow-hidden"
        style={{
          backgroundImage: `url(${data.imageUrl})`,
        }}
      >
        <div className="absolute bottom-0 from-black bg-gradient-to-t to-transparent w-full h-full opacity-50"></div>
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-7xl sm:max-w-xl max-w-xs relative z-20 cursive text-violet-700">
            {data.label}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
