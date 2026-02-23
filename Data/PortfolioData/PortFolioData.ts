export const MyServicesData = [
  {
    image: "/Coding.png",
    heading: "Web Development",
    description: "blog, e-commerce",
    height: 68,
    width: 68,
  },
  {
    image: "/Illustration.png",
    heading: "uI/uX design",
    description: "Mobile app, website design",
    height: 68,
    width: 68,
  },
  {
    image: "/Microphones.png",
    heading: "sound design",
    description: "Voice Over, Beat Making",
    height: 74,
    width: 74,
  },
  {
    image: "/Game-development.png",
    heading: "game design",
    description: "Character Design, Props & Objects",
    height: 74,
    width: 74,
  },
  {
    image: "/Photography.png",
    heading: "photography",
    description: "portrait, product photography",
    height: 78,
    width: 78,
  },
  {
    heading: "advertising",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. ",
    order: true,
  },
];

export const MainMenuData = {
  image: "/man.png",
  name: "Rayan Adlrdard",
  designation: "Front-end",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n\nEt, volutpat feugiat placerat lobortis. \n\nNatoque rutrum semper sed suspendisse nunc lectus.",
};

export const RightMenuData = [
  {
    label: "/Contrast.svg",
    alt: "Contrast",
    href: "",

    menuItems: [
      { label: "/Home.png", alt: "Home", href: "#target-mainmenu" },
      { label: "/Services.png", alt: "Services", href: "#target-services" },
      { label: "/cv.png", alt: "CV", href: "#target-cv" },
      { label: "/Portfolio.png", alt: "Portfolio", href: "#target-portfolio" },
      { label: "/Blog.png", alt: "Blog", href: "#target-blog" },
      { label: "/Contact.png", alt: "Contact", href: "#target-contact" },
    ],
  },
];

export const SocialMediaData = [
  {
    icon: "/facebook.png",
    alt: "Facebook",
    href: "https://www.facebook.com/",
  },
  {
    icon: "/instagram.png",
    alt: "Instagram",
    href: "https://www.instagram.com/",
  },
  {
    icon: "/twitter.png",
    alt: "Twitter",
    href: "https://x.com/",
  },
  {
    icon: "/linkedin.png",
    alt: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
  {
    icon: "/youtube.png",
    alt: "Youtube",
    href: "https://www.youtube.com/",
  },
  {
    icon: "/dribbble.png",
    alt: "Dribble",
    href: "https://dribbble.com/",
  },
];

export const LanguagesKnown = [
  {
    language: "bangala",
    known: 100,
  },
  {
    language: "english",
    known: 80,
  },
  {
    language: "spanish",
    known: 60,
  },
];

export const ExtraSkillsKnown = [
  {
    skill: "bootstrap, materialize",
  },
  {
    skill: "stylus, sass, less",
  },
  {
    skill: "gulp, webpack, grunt",
  },
  {
    skill: "gIT knowledge",
  },
];

export const SkillsKnown = [
  {
    skill: "hTML",
    known: 90,
  },
  {
    skill: "cSS",
    known: 85,
  },
  {
    skill: "jS",
    known: 80,
  },
  {
    skill: "pHP",
    known: 75,
  },
  {
    skill: "wordPress",
    known: 85,
  },
];

export const LeftMenuData = [
  {
    image: "/man.png",
    name: "Rayan Adlardard",
    designation: "front-end developer",
    socialmedia: SocialMediaData,
    age: 24,
    residence: "bd",
    freelance: true,
    address: "dhaka, bangladesh",
    languages: LanguagesKnown,
    skills: SkillsKnown,
    extraskills: ExtraSkillsKnown,
  },
];

export const SiverOffers = [
  {
    offer: "uI design",
    value: true,
  },
  {
    offer: "web development",
    value: true,
  },
  {
    offer: "logo design",
    value: false,
  },
  {
    offer: "seo optimization",
    value: false,
  },
  {
    offer: "wordPress integration",
    value: false,
  },
  {
    offer: "5 websites",
    value: false,
  },
  {
    offer: "unlimited user",
    value: false,
  },
  {
    offer: "20 gB bandwith",
    value: false,
  },
];

export const GoldOffers = [
  {
    offer: "uI design",
    value: true,
  },
  {
    offer: "web development",
    value: true,
  },
  {
    offer: "logo design",
    value: true,
  },
  {
    offer: "seo optimization",
    value: true,
  },
  {
    offer: "wordPress integration",
    value: false,
  },
  {
    offer: "5 websites",
    value: false,
  },
  {
    offer: "unlimited user",
    value: false,
  },
  {
    offer: "20 gB bandwith",
    value: false,
  },
];

export const DimondOffers = [
  {
    offer: "uI design",
    value: true,
  },
  {
    offer: "web development",
    value: true,
  },
  {
    offer: "logo design",
    value: true,
  },
  {
    offer: "seo optimization",
    value: true,
  },
  {
    offer: "wordPress integration",
    value: true,
  },
  {
    offer: "5 websites",
    value: true,
  },
  {
    offer: "unlimited user",
    value: true,
  },
  {
    offer: "20 gB bandwith",
    value: true,
  },
];

export const MyPlansData = [
  {
    planType: "silver",
    price: 0.0,
    description: "For most businesses that want to optimize web queries",
    offers: SiverOffers,
    popular: false,
  },
  {
    planType: "gold",
    price: 50.0,
    description: "For most businesses that want to optimize web queries",
    offers: GoldOffers,
    popular: true,
  },
  {
    planType: "dimond",
    price: 80.0,
    description: "For most businesses that want to optimize web queries",
    offers: DimondOffers,
    popular: false,
  },
];

export const RecommendationsData = [
  {
    rating: true,
    reviewTitle: "Great Quality",
    reviewDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
    reviewerImage: "/JamesGouse.png",
    reviewerName: "James Gouse",
    reviewerDesignation: "Graphic Designer",
  },
  {
    rating: true,
    reviewTitle: "Amazing Work",
    reviewDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
    reviewerImage: "/TianaPhilips.png",
    reviewerName: "Tiana Philips",
    reviewerDesignation: "Photographer",
  },
  {
    rating: true,
    reviewTitle: "Great Quality",
    reviewDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
    reviewerImage: "/TalanWestervelt.png",
    reviewerName: "Talan Westervelt",
    reviewerDesignation: "Business Man",
  },
];

export const EducationHistory = [
  {
    heading: "University of Toronto",
    subHeading: "student",
    date: "Jan 1016 - Dec 2021",
    title: "Certificate of web training",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
  },
  {
    heading: "Programming Course",
    subHeading: "student",
    date: "Jan 1016 - Dec 2021",
    title: "Certificate of web training",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
  },
  {
    heading: "Web developer courses",
    subHeading: "student",
    date: "Jan 1016 - Dec 2021",
    title: "Certificate of web training",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
  },
];

export const EducationData = [
  {
    mainTitle: "Education",
    mainDescription:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
    eduWorkHistory: EducationHistory,
  },
];

export const WorkHistory = [
  {
    heading: "Lead Web Designer",
    subHeading: "student",
    date: "Jan 1016 - Dec 2021",
    title: "Certificate of web training",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
  },
  {
    heading: "Junior Web Designer",
    subHeading: "student",
    date: "Jan 1016 - Dec 2021",
    title: "Certificate of web training",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
  },
  {
    heading: "Senior web Designer",
    subHeading: "student",
    date: "Jan 1016 - Dec 2021",
    title: "Certificate of web training",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
  },
];

export const WorkHistoryData = [
  {
    mainTitle: "Work History",
    mainDescription:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
    eduWorkHistory: EducationHistory,
  },
];

export const BlogData = [
  {
    image: "/FirstBlog.png",
    title: "How to make web tempates",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ",
  },
  {
    image: "/SecondBlog.png",
    title: "make Business card",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ",
  },
  {
    image: "/ThirdBlog.png",
    title: "How to make Flyer Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ",
  },
];

export const PortfolioData = [
  {
    image: "/Image (1).png",
    alt: "Portfolio1",
  },
  {
    image: "/Image (2).png",
    alt: "Portfolio2",
  },
  {
    image: "/Image (3).png",
    alt: "Portfolio3",
  },
  {
    image: "/Image (4).png",
    alt: "Portfolio4",
  },
  {
    image: "/Image (5).png",
    alt: "Portfolio5",
  },
  {
    image: "/Image (6).png",
    alt: "Portfolio6",
  },
  {
    image: "/Image (7).png",
    alt: "Portfolio7",
  },
  {
    image: "/Image (8).png",
    alt: "Portfolio8",
  },
  {
    image: "/Image (9).png",
    alt: "Portfolio9",
  },
];

export const PortfolioCategoriesData = [
  {
    categories: "All categories",
  },
  {
    categories: "UI Design",
  },
  {
    categories: "Web Templates",
  },
  {
    categories: "Logo",
  },
  {
    categories: "Branding",
  },
];

export const LogoData = [
  {
    image: "/Frame1.png",
    alt: "Logo",
  },
  {
    image: "/Frame2.png",
    alt: "Logo",
  },
  {
    image: "/Frame3.png",
    alt: "Logo",
  },
  {
    image: "/Frame4.png",
    alt: "Logo",
  },
];
