import { ParaText } from "@/components/atom";

type BulletProps = {
  point: string;
};

type Props = {
  data: BulletProps[];
};

export default function BulletPoints({ data }: Props) {
  if(!data) return;
  
  return (
    <div>
      {(data ?? []).map((item, index) => (
        <div key={index}>
          <ParaText
            content={`• ${item.point ?? "text"}`}
            className="text-sky-950 text-3xl py-2"
          />
        </div>
      ))}
      <ParaText
        content="The experience you want!"
        className="text-sky-950 text-3xl py-2 pb-14"
      />
    </div>
  );
}
