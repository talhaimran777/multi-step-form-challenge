import Steps from "components/Steps";

const NavigationBar = () => {
  return (
    <div
      className={
        'h-[175px] bg-[url("/images/bg-sidebar-mobile.svg")] bg-no-repeat bg-cover flex justify-center'
      }
    >
      <Steps />
    </div>
  );
};

export default NavigationBar;
