import { CategoryProps } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategories = async (): Promise<CategoryProps[]> => {
  try {
    const res = await axios.get(URL);
    return res.data;
  } catch (error: any) {
    return error;
  }
};
