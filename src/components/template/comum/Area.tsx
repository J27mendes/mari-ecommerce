interface AreaProps {
  children: any;
  className: string;
  id?: string;
  page?: boolean;
}

export default function Area(props: AreaProps) {
  return (
    <div
      id={props.id ?? ""}
      className={`flex justify-center 
        w-full ${props.children ?? ""}`}
    >
      <div
        className={`${
          props.page
            ? "flex row px-7 xl:px-0 mt-4 w-full xl:w-[1200px]"
            : "px-7 xl:px-0 mt-4 w-full xl:w-[1200px]"
        }`}
      >
        {props.children}
      </div>
    </div>
  );
}
