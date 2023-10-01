import { ProductProps } from "@/types";
import axios from "axios";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface QueryProps {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

export const getProducts = async (
  query: QueryProps
): Promise<ProductProps[]> => {
  try {
    const url = qs.stringifyUrl({
      url: URL,
      query: {
        colorId: query.colorId,
        categoryId: query.categoryId,
        sizeId: query.sizeId,
        isFeatured: query.isFeatured,
      },
    });

    const res = await axios.get(url);
    return res.data;
  } catch (error: any) {
    return error;
  }
};
