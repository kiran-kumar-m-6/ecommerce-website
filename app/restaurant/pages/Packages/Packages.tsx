import {
  Button,
  Flex,
  HeadText,
  Icon,
  ParaText,
  Quantity,
} from "@/components/atom";
import { Product } from "@/Data/Type/Product/Product";
import { useOutsideClick } from "@/hook/useOutSideClick";
import { Control, UseFormSetValue, useWatch } from "react-hook-form";

type FormValues = Record<string, number>;

type Props = {
  data: Product[];
  open: boolean;
  onClose: () => void;
  control: Control<FormValues>;
  setValue: UseFormSetValue<FormValues>;
};

const PRODUCT_MAXIMUM_QUANTITY = 3;

export default function Packages({
  data,
  open,
  onClose,
  control,
  setValue,
}: Props) {
  const packagePageOnly = useOutsideClick({
    onOutsideClick: () => {
      if (open) onClose();
    },
  });

  const quantities = useWatch({ control }) || {};

  const getQty = (id: string) => quantities[id] ?? 0;

  const updateQty = (id: string, value: number) => {
    const total = Object.values(quantities).reduce(
      (sum, qty) => (sum ?? 0) + (qty ?? 0),
      0,
    );

    const oldValue = quantities[id] ?? 0;
    const newTotal = total && total - oldValue + value;

    if ((newTotal ?? 0) > PRODUCT_MAXIMUM_QUANTITY) return;

    setValue(id, value);
  };

  const totalSelected = Object.values(
    quantities as Record<string, number>,
  ).reduce((a, b) => a + b, 0);

  if (!open) return null;

  return (
    <div
      className="fixed z-50 h-screen w-full transform bg-white transition overflow-auto right-0 top-0 translate-x-0 opacity-100 duration-500 ease-in-out md:w-[65vw] lg:!w-[55vw] xl:!w-[45vw] !py-4 !px-2 md:!p-8"
      ref={packagePageOnly}
    >
      <Flex className="flex justify-end">
        <Button label="✕" onClick={onClose} className="text-sky-950 text-xl" />
      </Flex>
      <div>
        <HeadText
          content="Heated Rods"
          className="text-sky-950 text-4xl font-bold text-center py-4"
        />
        <HeadText
          content="You decide: Which 3 packages will you choose?"
          className="text-sky-950 text-3xl font-semibold text-center py-4"
        />
        <HeadText
          content="Έχεις επιλέξει 0 από τα 3 πακέτα"
          className="text-sky-950 text-3xl font-bold text-center py-4"
        />
      </div>
      {data.map((item, index) => (
        <Flex
          key={item.id ?? index}
          className=" flex-row items-center justify-between gap-1 md:gap-[20px] lg:gap-[20px] py-4"
        >
          <Flex className="gap-5">
            <Icon
              src={item.sideAngleImage ?? ""}
              alt={item.name ?? "Product package"}
              height={100}
              width={100}
            />
            <div>
              <ParaText content={item.name} className="text-sky-950 text-xl" />
              <ParaText
                content={`₹ ${item.price}`}
                className="text-sky-950 px-4 text-xl"
              />
            </div>
          </Flex>
          <div>
            <Quantity
              value={getQty(item.id)}
              onChange={(val) => {
                updateQty(item.id, val);
              }}
              className="rounded-[1.375rem] border-sky-950"
              disabled={totalSelected == 3 && getQty(item.id) === 0}
            />
          </div>
        </Flex>
      ))}
      <Flex className="justify-center">
        <Button
          label="ADD"
          className={
            totalSelected == 3
              ? `rounded-full bg-sky-950 text-white font-bold px-6 py-2`
              : `rounded-full bg-gray-500 text-white font-bold px-6 py-2`
          }
          disabled={!(totalSelected === 3)}
          onClick={() => onClose()}
        />
      </Flex>
    </div>
  );
}
