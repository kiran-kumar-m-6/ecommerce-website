import { Button, Flex } from "@/components/atom";
import { MyPlansProps } from "@/Data/Type/PortFolio/MyPlans";

type Props = {
  data: MyPlansProps[];
};
export default function PricePlans({ data }: Props) {
  return (
    <div className="pt-[70px]">
      <div className="text-center grid justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#2B2B2B] font-bold text-center capitalize h-[40px] dark:text-white">
          Price plans
        </h2>
        <p className="text-[#767676] dark:text-gray-400 text-center pt-[25px] capitalize max-w-[438px]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-[21px] pt-[50px]">
        {data.map((plan, index) => (
          <div
            key={plan.planType ?? index}
            className={`bg-white dark:bg-gray-800 dark:text-white h-[700px] sm:h-[609px] w-[310px] flex flex-col ${plan.popular ? `shadow-md` : ``}`}
          >
            <div className="h-[29px]">
              {plan.popular === true && (
                <p className="bg-[#FFB400] text-center font-semibold text-[15px] py-1">
                  Most Popular
                </p>
              )}
            </div>
            <div className=" px-[33px]">
              <h3 className="text-center text-[#2B2B2B] text-lg sm:text-xl font-bold capitalize dark:text-white pt-[25px] line-clamp-1">
                {plan.planType ?? "plan"}
              </h3>
              <h1 className="text-center capitalize text-xs sm:text-sm pt-[19px]  line-clamp-2">
                <span className="text-2xl font-bold">${plan.price}</span>{" "}
                <span className="text-xs">/Hour</span>
              </h1>
              <p className="text-[#767676] dark:text-gray-400 text-center capitalize text-xs sm:text-sm line-clamp-3 pt-[8px]">
                {plan.description ?? "description"}
              </p>
              <div className="pt-[5px]">
                {plan.offers?.map((offer, index) => (
                  <div key={index}>
                    {offer.value === true ? (
                      <Flex className="gap-4 align-middle pt-4">
                        <h1 className="text-[#FFB400] dark:text-[#FFB600]">
                          ✓
                        </h1>
                        <h1 className="capitalize text-xs sm:text-sm">{`${offer.offer ?? "offer"}`}</h1>
                      </Flex>
                    ) : (
                      <Flex className="gap-4 align-middle pt-4">
                        <h1 className="text-[#767676] text-xs sm:text-sm dark:text-gray-300">
                          ✕
                        </h1>
                        <h1 className="capitalize">{`${offer.offer ?? "offer"}`}</h1>
                      </Flex>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <div className="mb-auto pt-3 sm:pt-4 lg:pt-[21px] h-auto lg:h-[38px]">
                  <Button
                    label="ORDER NOW"
                    className={`
                  shadow-md font-semibold rounded-full
                  text-[10px] sm:text-xs
                  px-5 sm:px-7 lg:px-[41px]
                  py-2 sm:py-[10px] lg:pt-[11px] lg:pb-[10px]
                  ${plan.popular ? "bg-[#FFB400] text-black" : ""}
                `}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
