import Addon from "components/Addon";

const Addons = () => {
  return (
    <div className="mt-6">
      <Addon
        isActive={true}
        title="Online service"
        description="Access to multiplayer games"
      />
      <Addon
        isActive={true}
        title="Larger storage"
        description="Extra 1TB of cloud save"
      />
      <Addon
        isActive={false}
        title="Customizable profile"
        description="Custom theme on your profile"
      />
    </div>
  );
};

export default Addons;
