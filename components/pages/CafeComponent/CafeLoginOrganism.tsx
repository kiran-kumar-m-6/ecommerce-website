import { Button, Flex, HeadText, Icon, Label, Input } from "@/components/atom";

export default function CafeLoginOrganism() {
  return (
    <Flex className="flex-col">
      <Flex className="align-middle justify-center">
        <Icon
          src="/pngkey.com-coffee-png-225874.png"
          alt="Cafe Logo"
          className="w-[100px] h-[100px]"
          width={100}
          height={100}
        />
      </Flex>
      <HeadText content="Cafe Login" className="text-center m-0 p-0" />
      <Flex className="justify-center align-middle mb-2">
        <Flex className="flex-col items-center gap-3">
          <Flex className="flex-col gap-1">
            <Label htmlFor="username" label="Username" />
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              className="w-full sm:w-[400px] h-[40px]"
            />
          </Flex>
          <Flex className="flex-col gap-1">
            <Label htmlFor="password" label="Password" />
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full sm:w-[400px] h-[40px]"
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex className="justify-center align-middle gap-3">
        <Button
          label="Login"
          className="bg-[#d38c5e] w-[150px] h-[45px] rounded-lg"
        />
      </Flex>
    </Flex>
  );
}
