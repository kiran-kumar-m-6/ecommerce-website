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
