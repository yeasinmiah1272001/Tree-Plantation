import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className: string;
}

const Container = ({ children, className }: Props) => {
  const newClassName = twMerge(
    "max-w-screen-xl mx-auto px-4 xl:px-0 py-4",
    className
  );
  return <div className={newClassName}>{children}</div>;
};

export default Container;
