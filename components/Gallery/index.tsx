"use client";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import React from "react";
import { ImageProps } from "@/types";
import GalleryTab from "./GalleryTab";

interface Props {
  images: ImageProps[];
}

const Gallery: React.FC<Props> = ({ images }) => {
  return (
    <Tab.Group as={"div"} className="flex">
      <div className="mx-auto w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.Panels className="aspect-square mb-6 w-full">
          {images.map((img, index) => (
            <Tab.Panel key={index}>
              <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
                <Image
                  src={img.url}
                  alt="Gallery"
                  fill
                  className="object-center object-cover"
                />
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((img, index) => (
            <GalleryTab key={index} image={img} />
          ))}
        </Tab.List>
      </div>
    </Tab.Group>
  );
};

export default Gallery;
