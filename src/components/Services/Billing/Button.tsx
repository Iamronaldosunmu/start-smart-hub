interface Props {
  text: string;
  className?: string;
}

const Button = ({ text, className }: Props) => {
  return (
    <div>
      <button
        className={
          "w-full rounded-md mb-10 mt-10 border-billing-purple font-semibold text-billing-purple border-2 py-3" +
          className
        }
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
