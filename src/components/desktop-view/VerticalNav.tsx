import Steps from "components/Steps";

const VerticalNav = () => {
  return (
    <div
      className={
        'h-[600px] w-[274px] bg-[url("/images/bg-sidebar-desktop.svg")] bg-no-repeat bg-cover flex flex-col justify-start rounded-xl pl-8'
      }
    >
      <Steps />
    </div>
  );
};

export default VerticalNav;
