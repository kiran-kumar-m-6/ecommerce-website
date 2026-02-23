"use client";
import { Flex } from "@/components/atom";
import MyServices from "./MyServices/MyServices";
import {
  MyServicesData,
  MainMenuData,
  RightMenuData,
  LeftMenuData,
  MyPlansData,
  RecommendationsData,
  EducationData,
  WorkHistoryData,
  BlogData,
  PortfolioData,
  PortfolioCategoriesData,
} from "@/Data/PortfolioData/PortFolioData";
import MyPlans from "./PricePlans/PricePlans";
import Recommendations from "./Recommendations/Recommendations";
import EduAndWorkHistory from "./Education/EduAndWorkHistory";
import Blog from "./Blog/Blog";
import LeavInformation from "./LeafInfo/LeavInformation";
import ContactInformation from "./ContactInformation/ContactInformation";
import Logos from "./Logos/Logos";
import SimpleMap from "./Maps/Map";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "./Footer/Footer";
import IntroductionSection from "./MainMenu/IntroductionSection";
import { useBreakPoint } from "@/hook/useBreakPoint";
import { useEffect } from "react";
import MenuBar from "./MenuBars/MenuBar";
import SideBar from "./MenuBars/SideBar";

export default function ResumePortfolio() {
  const screen = useBreakPoint();
  useEffect(() => {
    console.log(screen);
  }, [screen]);

  return (
    <div className="bg-[#F0F0F6] dark:bg-gray-700">
      <Flex className="flex-col lg:flex-row gap-[30px] w-full">
        <SideBar data={LeftMenuData} />
        <div className="flex-1 min-w-0">
          <IntroductionSection data={MainMenuData} />
          <MyServices data={MyServicesData} />
          <MyPlans data={MyPlansData} />
          <Recommendations data={RecommendationsData} />
          <EduAndWorkHistory data={EducationData} />
          <EduAndWorkHistory data={WorkHistoryData} />
          <Portfolio
            data={PortfolioData}
            categories={PortfolioCategoriesData}
          />
          <Blog data={BlogData} />
          <div className="flex flex-wrap justify-center gap-[30px]">
            <LeavInformation />
            <ContactInformation />
          </div>
          <SimpleMap />
          <Logos />
          <Footer />
        </div>
        <MenuBar data={RightMenuData} />
      </Flex>
    </div>
  );
}
