"use client";
import { useState } from "react";
import { Button, Icon } from "@/components/atom";
import { NavBarType } from "@/Data/Type/WeatherApp/NavBar";

type Props = {
  logo?: string;
  data: NavBarType[];
};

export const NavBar = ({ logo, data }: Props) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="relative">
      <div className="flex items-center justify-between py-6 px-10">
        <Icon
          src={logo ?? "/logo.svg"}
          alt="Weather Now"
          height={200}
          width={200}
          className="object-scale-down"
        />
        <div className="relative">
          <Button
            label="Units"
            className="bg-gray-800 py-2 px-4 rounded-lg text-white capitalize"
            onClick={() => setOpenMenu((prev) => !prev)}
          />
          {openMenu && (
            <div className="absolute right-0 mt-2 z-50 w-[260px]">
              {data.map((group, index) => (
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
                      <div
                        key={item.label}
                        className={`flex items-center justify-between rounded-md ${
                          item.isOpen ? "bg-gray-500" : "hover:bg-gray-600"
                        }`}
                      >
                        <span className="capitalize text-sm pl-2 py-2 text-white w-full">
                          {item.label}
                        </span>
                        {item.isOpen && (
                          <span className="text-white pr-2">✓</span>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="border-b border-gray-500 py-3">
                    <h4 className="text-gray-300 text-xs font-semibold pl-2 pb-2">
                      Wind Speed
                    </h4>

                    {group.windSpeed?.map((item) => (
                      <div
                        key={item.label}
                        className={`flex items-center justify-between rounded-md ${
                          item.isOpen ? "bg-gray-500" : "hover:bg-gray-600"
                        }`}
                      >
                        <span className="capitalize text-sm pl-2 py-2 text-white w-full">
                          {item.label}
                        </span>
                        {item.isOpen && (
                          <span className="text-white pr-2">✓</span>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="py-3">
                    <h4 className="text-gray-300 text-xs font-semibold pl-2 pb-2">
                      Precipitation
                    </h4>

                    {group.precipitation?.map((item) => (
                      <div
                        key={item.label}
                        className={`flex items-center justify-between rounded-md ${
                          item.isOpen ? "bg-gray-500" : "hover:bg-gray-600"
                        }`}
                      >
                        <span className="capitalize text-sm pl-2 py-2 text-white w-full">
                          {item.label}
                        </span>
                        {item.isOpen && (
                          <span className="text-white pr-2">✓</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
