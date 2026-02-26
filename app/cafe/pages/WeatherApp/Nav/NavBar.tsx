"use client";
import { useState } from "react";
import { Button, Flex, Icon } from "@/components/atom";
import { NavBarType } from "@/Data/Type/WeatherApp/WeatherAppTypes"; 

type Props = {
  logo?: string;
  data: NavBarType[];
};

export const NavBar = ({ logo, data }: Props) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
      <Flex className="relative items-center justify-between py-6 px-10">
        <Icon
          src={logo ?? "/logo.svg"}
          alt="Weather Now"
          height={41}
          width={200}
        />
        <div className="relative">
          <Button
            label="Units"
            className="bg-gray-800 py-2 px-4 rounded-lg text-white capitalize"
            onClick={() => setOpenMenu((prev) => !prev)}
          />
          {openMenu && (
            <div className="absolute right-0 mt-2 z-50 w-[260px]">
              {(data ?? []).map((group, index) => (
                <div
                  key={index}
                  className="bg-gray-700 rounded-xl px-4 py-3 shadow-lg"
                >
                  <h3 className="text-white">Switch to Imperial</h3>
                  <div className="border-b border-gray-500 py-3">
                    <h4 className="text-gray-300 text-xs font-semibold pl-2 pb-2">
                      Temperature
                    </h4>

                    {group.temprature?.map((item) => (
                      <Flex
                        key={item.label}
                        className={`items-center justify-between rounded-md ${
                          item.isOpen ? "bg-gray-500" : "hover:bg-gray-600"
                        }`}
                      >
                        <span className="capitalize text-sm pl-2 py-2 text-white w-full">
                          {item.label}
                        </span>
                        {item.isOpen && (
                          <span className="text-white pr-2">✓</span>
                        )}
                      </Flex>
                    ))}
                  </div>
                  <div className="border-b border-gray-500 py-3">
                    <h4 className="text-gray-300 text-xs font-semibold pl-2 pb-2">
                      Wind Speed
                    </h4>

                    {group.windSpeed?.map((item) => (
                      <Flex
                        key={item.label}
                        className={`items-center justify-between rounded-md ${
                          item.isOpen ? "bg-gray-500" : "hover:bg-gray-600"
                        }`}
                      >
                        <span className="capitalize text-sm pl-2 py-2 text-white w-full">
                          {item.label}
                        </span>
                        {item.isOpen && (
                          <span className="text-white pr-2">✓</span>
                        )}
                      </Flex>
                    ))}
                  </div>
                  <div className="py-3">
                    <h4 className="text-gray-300 text-xs font-semibold pl-2 pb-2">
                      Precipitation
                    </h4>

                    {group.precipitation?.map((item) => (
                      <Flex
                        key={item.label}
                        className={`items-center justify-between rounded-md ${
                          item.isOpen ? "bg-gray-500" : "hover:bg-gray-600"
                        }`}
                      >
                        <span className="capitalize text-sm pl-2 py-2 text-white w-full">
                          {item.label}
                        </span>
                        {item.isOpen && (
                          <span className="text-white pr-2">✓</span>
                        )}
                      </Flex>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Flex>
  );
};