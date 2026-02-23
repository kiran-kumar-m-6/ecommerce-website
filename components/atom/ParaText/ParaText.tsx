type ParaProps = {
  content?: string;
  className?: string;
};

export function ParaText({ content, className }: ParaProps) {
  return (
    <p className={`text-black font-sans p-0 m-0 ${className}`}>{content}</p>
  );
}
