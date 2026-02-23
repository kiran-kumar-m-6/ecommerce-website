import Devices from "../../pages/Devices/Devices";
import { DevicesData } from "@/Data/ProductData/Restaurant/Devices/DevicesData";

type Props = {
  params: {
    device: string;
  };
};

export default async function Device({ params }: Props) {
  const { device } = await params;

  const devic = DevicesData.find((dev) => dev.device === device);

  if (!devic) return <h1>Device Not Found</h1>;

  return <Devices data={devic} />;
}
