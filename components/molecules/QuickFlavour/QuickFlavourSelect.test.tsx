import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import QuickFlavourSelect from "./QuickFlavourSelect";

const mockFlavourData = [
  {
    title: "blu PRO Kit",
    inStock: true,
    productKey: "blu-pro",
    ratingCount: 476,
    ratingStars: 3.65126050420168,
    featuredReviewAutoselect: "disabled",
    featuredReviewIds: [],
    variants: [
      {
        sku: "2212306",
        variantKey: "blu-pro-kit-uk",
        variantName: "blu PRO Kit - blu-pro-kit-uk",
        inStock: true,
        salableQuantity: 3166,
        discriminatorText: "blu-pro-kit-uk",
        media: {
          plp: {
            url: "https://images.cdn.europe-west1.gcp.commercetools.com/93d1f945-5f87-4b87-84d5-63206de3eddf/blu%20pro%20plp%20512x727--dnCXXonV.png",
            height: "727",
            width: "512",
            altText: "blu PRO Kit",
          },
          plpTest: {},
          plpSlider: {},
          plpCarousel: [],
          pdpCarousel: [
            {
              type: "image",
              url: "https://images.cdn.europe-west1.gcp.commercetools.com/93d1f945-5f87-4b87-84d5-63206de3eddf/New-blu-PRO-PDP-lu6E_mFD.png",
              height: "2048",
              width: "2048",
              loop: false,
              altText: "blu PRO Kit",
              autoplay: false,
            },
          ],
          flickAway: {
            url: "https://images.cdn.europe-west1.gcp.commercetools.com/93d1f945-5f87-4b87-84d5-63206de3eddf/blu%20pro%20plp%20512x727--dnCXXonV.png",
            height: "727",
            width: "512",
            altText: "blu PRO Kit",
          },
          comparison: {},
          contentType: "MediaCollection",
        },
        price: {
          nowPrice: {
            amount: 17.99,
            currencyCode: "GBP",
          },
        },
        subscriptionTierItemPrice: [],
        subscribable: false,
        isRestrictedForSale: false,
      },
    ],
    description:
      "Our blu PRO™ Kit just got even better. Designed to have a smoother taste and premium features, the PRO™ vape pen device is built for a better flavour experience than before. All with our [30 Day Money Back Guarantee](https://www.blu.com/en-GB/30-day-money-back-guarantee). Our most popular refillable vape pen.\n---\n \nYour blu PRO™ Kit comes with everything you need to start or continue your [journey with blu™.](https://www.blu.com/en-GB/all-rechargeables-vapes)\n\nYou will receive:\n+ 1x blu PRO™ Clearomiser\n+ 1x blu PRO™ Rechargeable device\n+ 1x blu PRO™ USB charger\n\nblu™ E-liquids are not included. To buy, view our [blu™ e-liquids.](https://www.blu.com/en-GB/all-e-liquids-and-pods?flavorSystemType=bluELiquid) \n\nOnly compatible with the [blu PRO™ Clearomiser.](https://www.blu.com/en-GB/spares/blu-pro-tank)\n\nFind all your blu PRO troubleshooting questions answered on the [Troubleshooting page.](https://www.blu.com/en-GB/blu-pro-trouble-shooting)",
    uspList: [
      "Easy refilling with blu flavour e-liquids",
      "Most advanced blu vaping experience",
      "Larger battery that lasts all day",
    ],
    price: {
      nowPrice: {
        amount: 17.99,
        currencyCode: "GBP",
      },
    },
    subscriptionTierItemPrice: [],
    introText: "Our blu PRO™ Kit - rechargeable open device ",
    readMoreLink: "/blu-pro",
    productType: "device",
    media: {
      plp: {
        url: "https://images.cdn.europe-west1.gcp.commercetools.com/93d1f945-5f87-4b87-84d5-63206de3eddf/blu%20pro%20plp%20512x727--dnCXXonV.png",
        height: "727",
        width: "512",
        altText: "blu PRO Kit",
      },
      plpTest: {},
      plpSlider: {},
      plpCarousel: [],
      pdpCarousel: [
        {
          type: "image",
          url: "https://images.cdn.europe-west1.gcp.commercetools.com/93d1f945-5f87-4b87-84d5-63206de3eddf/New-blu-PRO-PDP-lu6E_mFD.png",
          height: "2048",
          width: "2048",
          loop: false,
          altText: "blu PRO Kit",
          autoplay: false,
        },
      ],
      flickAway: {
        url: "https://images.cdn.europe-west1.gcp.commercetools.com/93d1f945-5f87-4b87-84d5-63206de3eddf/blu%20pro%20plp%20512x727--dnCXXonV.png",
        height: "727",
        width: "512",
        altText: "blu PRO Kit",
      },
      comparison: {},
      contentType: "MediaCollection",
    },
    uspIntro: "Our blu PRO™ Kit - rechargeable open device ",
    controlType: "none",
    flavorSystemType: "bluELiquid",
    metadata: {
      slug: "blu-pro",
      metaTitle: "blu PRO Kit | E-Cigarettes & Vaping Kits | blu",
      metaDescription:
        "blu PRO™ Kit now better than ever—smoother taste, premium features, and improved flavour experience. Backed by our 30-Day Money-Back Guarantee.",
    },
    flavorCollection: "none",
    isLoyaltyOnly: false,
    isNewsletterOnly: false,
    productSlugOrKey: "blu-pro",
    categories: [
      "devices_oneliquid",
      "blu-Pro-2e-liquids",
      "device-flavours",
      "devices",
      "e-liquid-devices",
    ],
  },{
    title: "New Blu 2.0",
    inStock: true,
    productKey: "blu-2-0-new",
    ratingCount: 20,
    ratingStars: 3.1,
    featuredReviewAutoselect: "disabled",
    featuredReviewIds: [],
    variants: [
      {
        sku: "2214757",
        variantKey: "blu-2-0-new",
        variantName: "New Blu 2.0 - black",
        inStock: true,
        salableQuantity: 327,
        discriminatorText: "black",
        media: {
          plp: {
            url: "https://images.cdn.europe-west1.gcp.commercetools.com/93d1f945-5f87-4b87-84d5-63206de3eddf/New-blu-2.0-PLP-v5-37os0CDi.png",
            height: "727",
            width: "512",
            altText: "New Blu 2.0",
          },
          plpTest: {},
          plpSlider: {},
          plpCarousel: [],
          pdpCarousel: [
            {
              type: "image",
              url: "https://images.cdn.europe-west1.gcp.commercetools.com/93d1f945-5f87-4b87-84d5-63206de3eddf/Coyote_PDP_Device_1_-imuz3fNh.png",
              height: "2021",
              width: "2048",
              loop: false,
              altText: "New Blu 2.0",
              autoplay: false,
            },
          ],
          flickAway: {
            url: "https://images.cdn.europe-west1.gcp.commercetools.com/93d1f945-5f87-4b87-84d5-63206de3eddf/New-blu-2.0-PLP-v5-37os0CDi.png",
            height: "727",
            width: "512",
            altText: "New Blu 2.0",
          },
          comparison: {},
          contentType: "MediaCollection",
        },
        price: {
          nowPrice: {
            amount: 9.99,
            currencyCode: "GBP",
          },
        },
        subscriptionTierItemPrice: [],
        subscribable: false,
        isRestrictedForSale: false,
      },
    ],
    description:
      "The latest in vape technology for flexible control of your puffs, flavour intensity and battery life.\n\nWe recommend pairing Flavour Max Pods, with our upgraded blu 2.0 device for optimal performance.\n\n---\n\nYour new blu 2.0 device comes with:\n- Black 2.0 electronic vape device\n- 1 USB charger",
    uspList: [],
    price: {
      nowPrice: {
        amount: 9.99,
        currencyCode: "GBP",
      },
    },
    subscriptionTierItemPrice: [],
    introText:
      "The latest in vape technology for flexible control of your puffs, flavour intensity and battery life.",
    readMoreLink: "/blu-2-0",
    productType: "device",
    media: {
      plp: {
        url: "https://images.cdn.europe-west1.gcp.commercetools.com/93d1f945-5f87-4b87-84d5-63206de3eddf/New-blu-2.0-PLP-v5-37os0CDi.png",
        height: "727",
        width: "512",
        altText: "New Blu 2.0",
      },
      plpTest: {},
      plpSlider: {},
      plpCarousel: [],
      pdpCarousel: [
        {
          type: "image",
          url: "https://images.cdn.europe-west1.gcp.commercetools.com/93d1f945-5f87-4b87-84d5-63206de3eddf/Coyote_PDP_Device_1_-imuz3fNh.png",
          height: "2021",
          width: "2048",
          loop: false,
          altText: "New Blu 2.0",
          autoplay: false,
        },
      ],
      flickAway: {
        url: "https://images.cdn.europe-west1.gcp.commercetools.com/93d1f945-5f87-4b87-84d5-63206de3eddf/New-blu-2.0-PLP-v5-37os0CDi.png",
        height: "727",
        width: "512",
        altText: "New Blu 2.0",
      },
      comparison: {},
      contentType: "MediaCollection",
    },
    uspIntro:
      "The latest in vape technology for flexible control of your puffs, flavour intensity and battery life.",
    controlType: "none",
    flavorSystemType: "bluTwo",
    metadata: {
      slug: "new-blu-2-0",
      metaTitle: "New blu 2.0 | Rechargeable vape pen | blu 2.0",
      metaDescription:
        "The latest in vape technology for flexible control of your puffs, flavour intensity and battery life. UP TO 2,600 PUFFS PER PACK.",
    },
    flavorCollection: "none",
    isLoyaltyOnly: false,
    isNewsletterOnly: false,
    productSlugOrKey: "blu-2-0-new",
    categories: ["devices", "pod-devices"],
  },
];

describe("QuickFlavourSelect Component", () => {
  describe("Rendering", () => {
    beforeEach(() => {
      render(<QuickFlavourSelect data={mockFlavourData} />);
    });

    test("renders product titles from data", () => {
      expect(screen.getByText("blu PRO Kit")).toBeInTheDocument();
      expect(screen.getByText("New Blu 2.0")).toBeInTheDocument();
    });

    test("renders product images using alt text", () => {
      const firstImage = screen.getByAltText("blu PRO Kit");
      const secondImage = screen.getByAltText("New Blu 2.0");

      expect(firstImage).toBeInTheDocument();
      expect(secondImage).toBeInTheDocument();
    });
  });

  describe("Data Mapping", () => {
    beforeEach(() => {
      render(<QuickFlavourSelect data={mockFlavourData} />);
    });

    test("renders correct number of product titles", () => {
      const firstProduct = screen.getByText("blu PRO Kit");
      const secondProduct = screen.getByText("New Blu 2.0");

      expect(firstProduct).toBeInTheDocument();
      expect(secondProduct).toBeInTheDocument();
    });
  });

  describe("Empty Data Handling", () => {
    beforeEach(() => {
      render(<QuickFlavourSelect data={[]} />);
    });

    test("does not render any product titles", () => {
      expect(screen.queryByText("blu PRO Kit")).not.toBeInTheDocument();
    });

    test("does not render any product images", () => {
      expect(screen.queryByAltText("blu PRO Kit")).not.toBeInTheDocument();
    });
  });
});