import { useState, useEffect } from "react";
import axios from "axios";

export const useForm = (validate, setShow) => {
  const defaultFields = {
    firstName: "",
    lastName: "",
    email: "",
    linkedIn: "",
    resume: "",
    message: "",
  };

  const [fields, setFields] = useState(defaultFields);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetFields = () => {
    setFields(defaultFields);
  };

  const handleChange = (event) => {
    if (event.target) {
      const { name, value } = event.target;
      setFields({ ...fields, [name]: value });
    } else {
      setFields({ ...fields, ["resume"]: event["resume"] });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(fields));
    setIsSubmitting(true);
  };

  const sendEmail = async () => {
    try {
      await axios.post("/.netlify/functions/email", { fields });
      resetFields();
      setShow(true);
      setIsSubmitting(false);
    } catch (error) {
      alert("Une erreur est survenue");
      console.log("error", error.response.data);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      sendEmail();
    }
  }, [errors, isSubmitting]);

  return { handleChange, fields, handleSubmit, errors };
};
