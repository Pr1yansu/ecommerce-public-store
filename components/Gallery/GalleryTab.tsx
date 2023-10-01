import React from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import { ImageProps } from "@/types";
import { cn } from "@/libs/utils";

interface Props {
  image: ImageProps;
}

const GalleryTab: React.FC<Props> = ({ image }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              src={image.url}
              alt="Gallery"
              fill
              className="object-center object-cover"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-violet-500" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
