import Placeholder from "../placeholder/placeholder";

export const Button = ({
  children,
  className,
  loaded,
}: {
  children?: React.ReactNode;
  className?: string;
  loaded?: boolean;
}) => {
  if (!loaded) {
    return <Placeholder className="h-12 w-72" />;
  }
  return (
    <button
      className={` ${className} bg-primary hover:bg-primary/90 active:bg-primary/90 active:scale-95 text-white font-bold py-2 p-4 rounded-full flex items-center justify-center w-full gap-2 h-12 cursor-pointer`}
    >
      {children}
    </button>
  );
};

export const ButtonOutline = ({
  children,
  className,
  loaded,
}: {
  children: React.ReactNode;
  className?: string;
  loaded?: boolean;
}) => {
  if (!loaded) {
    return <Placeholder className="h-12 w-72" />;
  }
  return (
    <button
      className={` ${className} bg-transparent border hover:bg-white active:bg-white active:scale-95 border-white text-white hover:text-black active:text-black font-bold py-2 p-4 rounded-full flex items-center justify-center w-full gap-2 h-12 cursor-pointer`}
    >
      {children}
    </button>
  );
};
