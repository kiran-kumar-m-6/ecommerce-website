export interface RightMenuItems {
  label?: string;
  alt?: string;
  href?: string;
}

export interface RightMenuProps {
  label?: string;
  alt?: string;
  href?: string;
  menuItems?: RightMenuItems[];
}

export type RecommendationsType = {
  rating?: boolean;
  reviewTitle?: string;
  reviewDescription?: string;
  reviewerImage?: string;
  reviewerName?: string;
  reviewerDesignation?: string;
};

export type PortfolioProps = {
  image?: string;
  alt?: string;
};

export type MainMenuProps = {
  image?: string;
  name?: string;
  designation?: string;
  description?: string;
};

export type PortfolioCategoryProps = {
  categories?: string;
};

export type MyServicesProps = {
  image?: string;
  heading?: string;
  description?: string;
  height?: number;
  width?: number;
  order?: boolean;
};

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

export type LogoProps = {
  image?: string;
  alt?: string;
};

export type LanguagesKnown = {
  language?: string;
  known?: number;
};

export type SkillsKnown = {
  skill?: string;
  known?: number;
};

export type ExtraSkillsKnown = {
  skill?: string;
};

export type SocialMediaIcons = {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedIn?: string;
  youtube?: string;
  dribble?: string;
};

export type SocialMedia = {
  icon?: string;
  alt?: string;
  href?: string;
};

export type LeftMenuProps = {
  image?: string;
  name?: string;
  designation?: string;
  socialmedia?: SocialMedia[];
  age?: number;
  residence?: string;
  freelance?: boolean;
  address?: string;
  languages?: LanguagesKnown[];
  skills?: SkillsKnown[];
  extraskills?: ExtraSkillsKnown[];
};

export type EduWorkHistory = {
  heading?: string;
  subHeading?: string;
  date?: string;
  title?: string;
  description?: string;
};

export type EduWorkProps = {
  mainTitle?: string;
  mainDescription?: string;
  eduWorkHistory?: EduWorkHistory[];
};

export type BlogProps = {
  image?: string;
  title?: string;
  description?: string;
};