interface TextProps {
  content: string;
  className?: string;
  onClick?: () => void;
}

export function HeadText({ content, className, onClick }: TextProps) {
  return (
    <h1
      className={`text-black font-bold font-sans m-0 p-0 ${className}`}
      onClick={onClick}
    >
      {content}
    </h1>
  );
}
