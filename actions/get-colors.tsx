import { ColorProps } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

export const getColors = async (): Promise<ColorProps[]> => {
  try {
    const res = await axios.get(URL);
    return res.data;
  } catch (error: any) {
    return error;
  }
};
