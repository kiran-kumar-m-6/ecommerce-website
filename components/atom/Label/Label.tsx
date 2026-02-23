type PropVal = {
  label: string;
  htmlFor?: string;
  className?: string;
};

export function Label({ label, htmlFor, className }: PropVal) {
  return (
    <div>
      <label className={className} htmlFor={htmlFor} role="label">
        {label}
      </label>
    </div>
  );
}
