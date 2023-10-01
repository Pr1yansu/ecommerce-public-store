import { CategoryProps } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategory = async (id: string): Promise<CategoryProps> => {
  try {
    const res = await axios.get(`${URL}/${id}`);
    return res.data;
  } catch (error: any) {
    return error;
  }
};
