export interface Product {
  id: string;
  productimage?: Images[];
  image?: string;
  name?: string;
  btnText?: string;
  textClass?: string;
  btnClass?: string;
  label?: string;
  flavour?: string;
  description?: string;
  fulldetails?: string;
  price?: number;
  nicotine?: string;
  sideAngleImage?: string;
  quantity?: number;
  fullImage?: string;
  flavourSystemType?: string;
  productType?: string;
}

interface Images {
  image: string;
}
