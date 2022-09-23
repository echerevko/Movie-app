type Props = {
  text: string;
  className?: string;
};

const Tag = ({ text, className }: Props) => (
  <div
    className={`bg-white text-black text-sm font-bold px-2 py-1 m-2 rounded-full inline-block ${className}`}
  >
    {text}
  </div>
);

export default Tag;
