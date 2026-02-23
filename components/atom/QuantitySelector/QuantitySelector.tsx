type Props = {
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
};

export function QuantitySelector({ value, max = 8, onChange }: Props) {
  const options = Array.from({ length: max }, (_, i) => i + 1);

  return (
    <div className="flex justify-center">
      <select
        id="quantityselector"
        value={value}
        onChange={(e) => onChange?.(Number(e.target.value))}
        className="text-sky-950 text-xl font-bold rounded-2xl hover:border-sky-950 px-6 border-2 border-sky-950 text-center"
      >
        {options.map((val) => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </select>
    </div>
  );
}
