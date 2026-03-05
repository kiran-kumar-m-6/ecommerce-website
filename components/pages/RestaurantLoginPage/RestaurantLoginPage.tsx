import { Button, HeadText, Input, Label, Icon, Flex } from "@/components/atom";

export default function RestaurantLoginPage() {
  return (
    <Flex className="flex-col items-center gap-4 rounded-xl shadow-lg p-8 bg-white">
      <HeadText content="Restaurant Login" className="text-center" />
      <Flex className="flex-row gap-6">
        <Flex
          className="flex-col items-center gap-3"
          data-testid="Input&Button"
        >
          <Flex className="flex-col gap-1">
            <Label htmlFor="username" label="Username" />
            <Input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full sm:w-[400px] h-[40px]"
            />
          </Flex>
          <Flex className="flex-col gap-1">
            <Label htmlFor="password" label="Password" />
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full sm:w-[400px] h-[40px]"
            />
          </Flex>
          <Button
            label="Login"
            className="bg-[#e52826] text-white rounded-lg hover:bg-[#c91f1d] w-[150px] h-[45px]"
          />
        </Flex>
        <Icon
          src="/restarant.png"
          alt="Restaurant Logo"
          width={200}
          height={200}
        />
      </Flex>
    </Flex>
  );
}
