import { useState } from "react";
import Button from "@/components/atom/Button/Button";
import Input from "@/components/atom/Input/Input";
import { useDate } from "@/hook/useDate";
import ParaText from "@/components/atom/ParaText/ParaText";
import Flex from "@/components/atom/Flex/Flex";

export default function DateChange() {
  const [inputDate, setInputDate] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const [check, setCheck] = useState(false);

  const handleButtonClick = () => {
    setCheck((prev) => !prev);
    const result = useDate(inputDate);
    if (!result) {
      setFormattedDate("Please enter a valid date in DD-MM-YYYY format");
      return;
    }
    setInputDate("");
    setFormattedDate(result);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputDate(e.target.value);
    setFormattedDate("");
  };

  return (
    <div className="rounded-lg  bg-white p-4">
      <div className="grid justify-center gap-3">
        {formattedDate && (
          <div className="font-semibold text-gray-800">
            <ParaText
              content={`Result: ${formattedDate}`}
              className="text-blue-600 text-center"
            />
          </div>
        )}
        <Input
          type="text"
          name="dateChange"
          id="dateChange"
          placeholder="Enter Date (DD-MM-YYYY)"
          value={inputDate}
          onChange={handleInputChange}
        />
        <Flex className="justify-center">
          <Button
            label="Change Date"
            onClick={handleButtonClick}
            className="bg-yellow-500 hover:bg-[#0099ff] w-[150px] h-[45px] rounded-lg"
          />
        </Flex>
      </div>
    </div>
  );
}
