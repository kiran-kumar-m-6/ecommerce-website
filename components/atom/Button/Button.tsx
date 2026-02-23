type Buttons = {
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
};

export function Button({ label, onClick, className, disabled, type }: Buttons) {
  return (
    <button
      className={`text-center ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
