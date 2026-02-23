import { Flex } from "@/components/atom";
import CafeLoginOrganism from "@/components/pages/CafeComponent/CafeLoginOrganism";

export default function CafeLoginComponent() {
  return (
    <Flex className="justify-center items-center h-screen">
      <div className="rounded-xl shadow-lg p-8 bg-white">
        <CafeLoginOrganism />
      </div>
    </Flex>
  );
}
