import InputGroup from "components/InputGroup";
import StepText from "components/StepText";
import * as Yup from "yup";
import { useSteps } from "context-api/context";
import { useFormik } from "formik";
import { useEffect } from "react";

const Step1Content = () => {
  const { setFormik, setCurrentStep, currentStep } = useSteps();
  const formFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    onSubmit: (values) => {
      if (values.name && values.email && values.phoneNumber) {
        console.log("YOYO", JSON.stringify(values, null, 2));
        setCurrentStep(currentStep + 1);
      }
    },
    validationSchema: Yup.object({
      name: Yup.string().label("Name").required("Name is required!"),
      email: Yup.string()
        .email()
        .label("Email")
        .required("Invalid email provided!"),
      phoneNumber: Yup.string()
        .label("Phone Number")
        .required("Phone number is required!"),
    }),
  });

  useEffect(() => {
    if (formFormik) {
      setFormik(formFormik);
    }
  }, []);

  return (
    <>
      <StepText
        title="Personal Info"
        description="Please provide your name, email address, and phone number"
      />
      <form>
        <div className="mb-2">
          <InputGroup
            name="name"
            label="Name"
            type="text"
            placeholder="e.g. Stephen King"
            formik={formFormik}
          />
        </div>

        <div className="mb-2">
          <InputGroup
            name="email"
            label="Email Address"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            formik={formFormik}
          />
        </div>

        <div>
          <InputGroup
            name="phoneNumber"
            label="Phone Number"
            type="text"
            placeholder="e.g. +1 234 567 890"
            formik={formFormik}
          />
        </div>
      </form>
    </>
  );
};

export default Step1Content;
