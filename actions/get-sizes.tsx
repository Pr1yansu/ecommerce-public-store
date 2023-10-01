import { SizeProps } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

export const getSizes = async (): Promise<SizeProps[]> => {
  try {
    const res = await axios.get(URL);
    return res.data;
  } catch (error: any) {
    return error;
  }
};
