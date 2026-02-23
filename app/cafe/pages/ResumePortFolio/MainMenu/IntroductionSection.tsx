import { Button, Icon } from "@/components/atom";

type MainMenuProps = {
  image?: string;
  name?: string;
  designation?: string;
  description?: string;
};

type Props = {
  data: MainMenuProps;
};

export default function IntroductionSection({ data }: Props) {
  return (
    <div className="flex flex-wrap justify-center">
      <div
        className="bg-white dark:bg-gray-800 bg-cover flex lg:flex-row justify-center gap-7 m-0 p-0 w-full"
        id="#target-mainmenu"
      >
        <div className="pl-[60px] pt-[93px]">
          <h1 className="text-[#2B2B2B] dark:text-white text-2xl sm:text-xl lg:text-3xl xl:text-5xl font-bold pb-[18px] leading-tight">
            I’m {data.name ?? "name"}
            <br />
            <span className="text-[#FFB400]">
              {data.designation ?? "designation"}
            </span>
            {"  "}
            Developer
          </h1>
          <p className="capitalize text-[#767676] dark:text-gray-400 pb-[25px] text-left max-w-[424px]">
            {data.description ?? "Description"}
          </p>
          <div className="pt-[25px] pb-[74px]">
            <Button
              label="hire me ➜"
              className="uppercase bg-[#FFB400] text-[#2B2B2B] dark:text-white  rounded-md w-[154px] h-[51px]"
            />
          </div>
        </div>
        <div className="hidden sm:hidden md:block lg:block xl:block pt-2 pr-[57.6px]">
          <Icon
            src={`${`/man.png`}`}
            alt="me"
            height={459.09}
            width={325.72}
            quality={100}
            className="object-scale-down h-auto"
          />
        </div>
      </div>
    </div>
  );
}
