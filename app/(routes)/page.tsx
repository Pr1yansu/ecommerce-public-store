import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard(process.env.NEXT_PUBLIC_BILLBOARD_ID!);
  const products = await getProducts({ isFeatured: true });

  return (
    <div className="py-4">
      <Container>
        <div className="space-y-10 pb-10">
          <Billboard data={billboard} />
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title={"Featured Products"} products={products} />
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
