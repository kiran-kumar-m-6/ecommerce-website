import { Flex, Icon, ParaText } from "@/components/atom";

type Props = {
  title: string;
  tClassName: string;
  description: string;
  dClassName: string;
};

export function MenuItem({
  title,
  description,
  tClassName,
  dClassName,
}: Props) {
  return (
    <Flex className="items-center gap-4">
      <Icon
        src="https://images.cdn.europe-west1.gcp.commercetools.com/93d1f945-5f87-4b87-84d5-63206de3eddf/BluBox_StarterKit_PL-YClOYiS-.png"
        alt={title}
        className="w-[40px] h-[40px] object-contain"
        width={40}
        height={40}
      />
      <div>
        <ParaText content={title} className={tClassName} />
        <ParaText content={description} className={dClassName} />
      </div>
      <ParaText content=">" className="ml-auto" />
    </Flex>
  );
}
