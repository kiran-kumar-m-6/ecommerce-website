export interface FlavourProductData {
  title: string;
  inStock: boolean;
  productKey: string;
  ratingCount: number;
  ratingStars: number;
  featuredReviewAutoselect: string;
  featuredReviewIds: string[];
  variants: Variant[];
  description: string;
  uspList: string[];
  price: PriceContainer;
  subscriptionTierItemPrice: any[];
  introText?: string;
  readMoreLink: string;
  productType: string;
  media: MediaCollection;
  uspIntro?: string;
  controlType: string;
  flavorSystemType: string;
  metadata: Metadata;
  flavorCollection: string;
  isLoyaltyOnly: boolean;
  isNewsletterOnly: boolean;
  productSlugOrKey: string;
  categories: string[];
}

export interface Variant {
  sku: string;
  variantKey: string;
  variantName: string;
  inStock: boolean;
  salableQuantity: number;
  discriminatorText: string;
  media: MediaCollection;
  price: PriceContainer;
  subscriptionTierItemPrice: any[];
  subscribable: boolean;
  isRestrictedForSale: boolean;
}

export interface MediaCollection {
  plp?: ImageDetails;
  plpTest?: Record<string, any>;
  plpSlider?: Record<string, any>;
  plpCarousel?: any[];
  pdpCarousel?: CarouselImage[];
  flickAway?: ImageDetails;
  comparison?: Record<string, any>;
  contentType: string;
}

export interface ImageDetails {
  url: string;
  height: string;
  width: string;
  altText: string;
}

export interface CarouselImage extends ImageDetails {
  type: string;
  loop: boolean;
  autoplay: boolean;
}

export interface PriceContainer {
  nowPrice: {
    amount: number;
    currencyCode: string;
  };
}

export interface Metadata {
  slug: string;
  metaTitle: string;
  metaDescription: string;
}
