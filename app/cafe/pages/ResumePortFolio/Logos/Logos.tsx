import { Icon } from "@/components/atom";

export default function Logos() {
  return (
    <div className="pt-[70px]">
      <div className="flex flex-wrap gap-[137px] justify-center">
        <Icon
          src="/Frame1.png"
          alt="Logo"
          height={140}
          width={140}
          className="object-scale-down "
        />
        <Icon
          src="/Frame2.png"
          alt="Logo"
          height={140}
          width={140}
          className="object-scale-down"
        />
        <Icon
          src="/Frame3.png"
          alt="Logo"
          height={140}
          width={140}
          className="object-scale-down"
        />
        <Icon
          src="/Frame4.png"
          alt="Logo"
          height={140}
          width={140}
          className="object-scale-down"
        />
      </div>
    </div>
  );
}
