import { useAppState } from "context-api/app-state-context";
import { fromAppState } from "utils/index";
import SelectedAddon from "components/SelectedAddon";

const SelectedAddons = () => {
  const { data } = useAppState();
  const { selectedAddons } = fromAppState(data);

  return (
    <>
      {data.addons.length > 0 && <hr />}
      {selectedAddons.map((addon) => (
        <SelectedAddon
          key={addon.id}
          id={addon.id}
          title={addon.title}
          pricing={addon.pricing}
        />
      ))}
    </>
  );
};

export default SelectedAddons;
