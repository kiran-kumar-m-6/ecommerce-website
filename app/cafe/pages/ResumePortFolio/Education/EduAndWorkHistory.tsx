import { EduWorkProps } from "@/Data/Type/PortFolio/PortFolioTypes"; 

type Props = {
  data: EduWorkProps[];
};

export default function EduAndWorkHistory({ data }: Props) {
  return (
    <div className="pt-[70px]">
      {data.map((item, index) => (
        <div key={item.mainTitle ?? index} id="target-cv">
          <div className="text-center grid justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#2B2B2B] font-bold capitalize h-[40px] dark:text-white">
              {item.mainTitle ?? "Main Title"}
            </h2>
            <p className="text-[#767676] dark:text-gray-400 text-center pt-[25px] capitalize max-w-[438px]">
              {item.mainDescription ?? "Main Description"}
            </p>
          </div>
          <div className="pt-[50px] flex justify-center">
            <div className="pt-[19px] pl-[37px] pr-[29px] w-[970px] bg-[#FFFFFF] dark:bg-gray-800">
              {item.eduWorkHistory?.map((history, index) => (
                <div
                  key={history.heading ?? index}
                  className="pt-[28px] pb-[30px] border-b-2 border-[#F0F0F6] last:border-0"
                >
                  <div className="dark:bg-gray-800 ">
                    <div className="grid sm:grid md:grid lg:flex xl:flex justify-between gap-[30px] lg:gap-[184px] ">
                      <div>
                        <h4 className="font-semibold text-[#2B2B2B] text-[18px] pb-[25px] dark:text-white">
                          {history.heading ?? "Heading"}
                        </h4>
                        <div className="gap-2 lg:gap-[21px] grid md:flex lg:flex xl:flex">
                          <p className="font-semibold text-[#2B2B2B] text-sm capitalize dark:text-white">
                            {history.subHeading}
                          </p>
                          <p className="bg-[#FFB400] text-[10px] text-white w-[111px] py-[4px] px-[7px]">
                            {history.date}
                          </p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#2B2B2B] text-[18px] dark:text-white">
                          {history.title ?? "Title"}
                        </h4>
                        <p className="text-[#767676]  text-[15px] capitalize dark:text-white pt-[28px] line-clamp-4">
                          {history.description ?? "Description"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
