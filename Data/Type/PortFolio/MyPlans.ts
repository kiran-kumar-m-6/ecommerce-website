export type MyPlansProps = {
  planType?: string;
  price?: number;
  description?: string;
  offers?: OfferType[];
  popular?: boolean;
};

export type Offers = {
  uiDesign?: boolean;
  webDevelopment?: boolean;
  logoDesign?: boolean;
  seoOptimization?: boolean;
  wordpressIntegration?: boolean;
  fiveWebsites?: boolean;
  unlimitedUser?: boolean;
  bandWidth?: boolean;
};

export type OfferType = {
  offer?: string;
  value?: boolean;
};
