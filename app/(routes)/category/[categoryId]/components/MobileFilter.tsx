"use client";

import { Button } from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import { ColorProps, SizeProps } from "@/types";
import { Dialog } from "@headlessui/react";
import { Plus, SidebarCloseIcon } from "lucide-react";
import React, { useState } from "react";
import Filter from "./Filter";
import { cn } from "@/libs/utils";

interface Props {
  sizes: SizeProps[];
  colors: ColorProps[];
}

const MobileFilter: React.FC<Props> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);
  const Open = () => {
    setOpen(true);
  };
  const Close = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        className={cn(
          "flex items-center font-medium gap-2 rounded-md",
          open ? "bg-violet-600 text-white" : "bg-gray-100 text-gray-700"
        )}
        onClick={open ? Close : Open}
      >
        Filters <Plus size={18} />
      </Button>
      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={Close}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton
                className="hover:scale-110 transition-all"
                icon={<SidebarCloseIcon size={15} />}
                onClick={Close}
              />
            </div>
            <div className="p-4">
              <Filter valueKey={"sizeId"} name={"Sizes"} data={sizes} />
              <Filter valueKey={"colorId"} name={"Colors"} data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilter;
