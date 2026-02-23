import { productData } from "@/Data/ProductData/Cafe/productData";
import SingleProductView from "@/components/pages/SingleProductView/SingleProductView";

type Props = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = productData.find((p) => p.id === id);

  if (!product) return <div>Product not found</div>;

  return <SingleProductView data={product} />;
}
