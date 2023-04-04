import InputGroup from "components/InputGroup";

const Step1Content = () => {
  return (
    <>
      <div className="bg-white px-6 py-8 rounded-xl mx-4 -mt-20">
        <h1 className="text-2xl mb-[9px] font-bold">Personal Info</h1>
        <p className="text-base mb-[22px] text-[#9699ab]">
          Please provide your name, email address, and phone number
        </p>

        <div className="mb-3">
          <InputGroup
            name="name"
            label="Name"
            type="text"
            placeholder="e.g. Stephen King"
          />
        </div>

        <div className="mb-3">
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
      </div>
    </>
  );
};

export default Step1Content;
