import { Icon } from "@/components/atom";
import { MyServicesProps } from "@/Data/Type/PortFolio/MyServices";

type Props = {
  data: MyServicesProps[];
};

export default function MyServices({ data }: Props) {
  return (
    <div className="pt-[137.91px]">
      <div className="text-center grid justify-center" id="target-services">
        <h2 className="text-[#2B2B2B] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl dark:text-white h-[40px]">
          My Services
        </h2>
        <div className="pb-[50px] pt-[25px]">
          <p className="text-[#767676] dark:text-gray-400 text-center pt-[25px] capitalize max-w-[438px]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-[970px]">
          <div className="flex flex-wrap justify-center gap-[20px]">
            {data.map((service, index) => (
              <div key={service.heading ?? index}>
                <div
                  className="
                    bg-white 
                    dark:bg-gray-800
                    lg:hover:scale-105  
                    hover:bg-[#fdefce] 
                    w-[200px] sm:w-[240px] md:w-[280px] lg:w-[310px]
                    min-h-[200px] sm:min-h-[210px] md:min-h-[220px] lg:h-[225px]
                    px-6 md:px-8 lg:px-10
                    py-4 md:py-5 lg:py-6
                    flex 
                    flex-col
                    items-center 
                    text-center
                    transition-transform
                  "
                >
                  {service.image && (
                    <div className="mb-2">
                      <Icon
                        src={service.image ?? ""}
                        alt={service.description ?? "my service"}
                        width={service.width ?? 74}
                        height={service.height ?? 74}
                      />
                    </div>
                  )}

                  <h4 className="capitalize font-bold text-[#2B2B2B] dark:text-white mt-auto text-sm md:text-lg ">
                    {service.heading || "Service"}
                  </h4>
                  <p className="capitalize text-xs md:text-sm text-[#767676] dark:text-white  mt-auto">
                    {service.description ?? "Description"}
                  </p>
                  {service.order && (
                    <p className="capitalize text-[#FFB400] mt-2">
                      Order now {`>`}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
