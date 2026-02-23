import SingleProductView from "../../pages/SingProductView/SingleProductView";
import { productData } from "@/Data/ProductData/Restaurant/productData";

type Props = {
  params: {
    id: string;
  };
};

export default async function Product({ params }: Props) {
  const { id } = await params;

  const product = productData.find((dev) => dev.id === id);

  if (!product) return <h1>Product Not Found</h1>;

  return <SingleProductView data={product} />;
}
