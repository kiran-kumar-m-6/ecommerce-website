import { Flex } from "@/components/atom";
import RestaurentLoginOrganism from "@/components/pages/RestaurentComponents/RestaurentLoginOrganism";

function RestaurentLoginComponent() {
  return (
    <Flex className="justify-center items-center h-screen ">
      <div className="rounded-xl shadow-lg p-8 bg-white">
        <RestaurentLoginOrganism />
      </div>
    </Flex>
  );
}

export default RestaurentLoginComponent;
