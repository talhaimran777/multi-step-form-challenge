import Addon from "components/Addon";
import addons from "data/addons";

const Addons = () => {
  return (
    <div className="mt-6">
      {addons.map((addon, idx) => (
        <div key={idx}>
          <Addon
            id={addon.id}
            title={addon.title}
            description={addon.description}
            pricing={addon.pricing}
          />
        </div>
      ))}
    </div>
  );
};

export default Addons;
