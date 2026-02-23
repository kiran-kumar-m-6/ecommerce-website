import { Icon } from "@/components/atom";
import { RecommendationsType } from "@/Data/Type/PortFolio/Recommendations";

type Props = {
  data: RecommendationsType[];
};

export default function Recommendations({ data }: Props) {
  return (
    <div className="pt-[70px]" id="target-education">
      <div className="text-center grid justify-center">
        <h2
          className="font-bold capitalize text-[#2B2B2B] dark:text-white text-lg sm:text-3xl md:text-4xl lg:text-5xl" >
          recommendations
        </h2>

        <p className="text-[#767676] dark:text-gray-400 text-center pt-4 max-w-[438px] capitalize" >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Lorem ipsum
        </p>
      </div>
      <div className="pt-[50px] flex justify-center flex-wrap gap-5">
        {data.map((review, index) => (
          <div
            key={review.reviewerName ?? index}
            className="bg-white dark:bg-gray-800 py-[25px] pl-[25px] pr-[23px] w-full sm:w-[310px] min-h-[323px] grid justify-center"
          >
            <div className="flex justify-center md:justify-start">
              {review.rating === true && (
                <Icon
                  src={"/Rating.png"}
                  alt="Rating"
                  width={130}
                  height={17}
                  className="object-scale-down py-2 "
                />
              )}
            </div>
            <div>
              <h4 className="font-semibold text-[#2B2B2B] text-center md:text-left  text-sm pt-[16.63px] dark:text-white">
                {review.reviewTitle ?? "Review Title"}
              </h4>
              <p className="text-[#767676] dark:text-white text-sm text-center md:text-lefts pt-[18px] pb-[30px]">
                {review.reviewDescription ?? "Review"}
              </p>

              <div className="grid justify-center align-middle sm:justify-center md:flex items-center gap-[13px]">
                <div className="flex justify-center">
                <Icon
                  src={review.reviewerImage ?? ""}
                  alt={review.reviewerName ?? "Reviewer Image"}
                  width={80}
                  height={80}
                  className="object-scale-down shrink-0"
                />
                </div>
                <div className="flex flex-col justify-center leading-tight">
                  <h4 className="font-semibold text-center md:text-left text-[#2B2B2B] dark:text-white m-0">
                    {review.reviewerName ?? "Reviewer Name"}
                  </h4>

                  <p className="text-[#767676] text-center md:text-left dark:text-white m-0">
                    {review.reviewerDesignation ?? "Reviewer Designation"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-[50px]">
        <Icon src="/Group.png" alt="End" width={50} height={10} />
      </div>
    </div>
  );
}
