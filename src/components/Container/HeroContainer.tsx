interface ContainerProps {
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={" w-full p-10 lg:p-20  bg-red-50 " + className}>{children}</div>
  );
};

export default Container;