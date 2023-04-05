import InputGroup from "components/InputGroup";
import StepText from "components/StepText";

const Step1Content = () => {
  return (
    <>
      <StepText
        title="Personal Info"
        description="Please provide your name, email address, and phone number"
      />
      <div className="mb-2">
        <InputGroup
          name="name"
          label="Name"
          type="text"
          placeholder="e.g. Stephen King"
        />
      </div>

      <div className="mb-2">
        <InputGroup
          name="email"
          label="Email Address"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
        />
      </div>

      <div>
        <InputGroup
          name="phoneNumber"
          label="Phone Number"
          type="text"
          placeholder="e.g. +1 234 567 890"
        />
      </div>
    </>
  );
};

export default Step1Content;
