interface ContainerProps {
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
}

const BodyContainer: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={"sm:p-10 p-5 lg:p-20 " + className}>{children}</div>
  );
};

export default BodyContainer;