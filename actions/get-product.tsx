import { ProductProps } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export const getProduct = async (id: string): Promise<ProductProps> => {
  try {
    const res = await axios.get(`${URL}/${id}`);
    return res.data;
  } catch (error: any) {
    return error;
  }
};
