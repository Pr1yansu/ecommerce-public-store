import { create } from "zustand";

import { ProductProps } from "@/types";

interface StateProps {
  isOpen: boolean;
  data?: ProductProps | null;
  onOpen: (data: ProductProps) => void;
  onClose: () => void;
}

const usePreviewModels = create<StateProps>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data) =>
    set({
      data: data,
      isOpen: true,
    }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModels;
