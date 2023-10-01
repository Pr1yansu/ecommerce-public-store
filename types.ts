export interface BillboardProps {
  id: string;
  label: string;
  imageUrl: string;
}

export interface CategoryProps {
  id: string;
  name: string;
  billboard: BillboardProps;
}

export interface ProductProps {
  id: string;
  name: string;
  description: string;
  price: number;
  images: ImageProps[];
  category: CategoryProps;
  isFeatured: boolean;
  size: SizeProps;
  color: ColorProps;
}

export interface ImageProps {
  id: string;
  url: string;
}

export interface SizeProps {
  id: string;
  name: string;
  value: string;
}

export interface ColorProps {
  id: string;
  name: string;
  value: string;
}
