import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Backdrop } from "./job-modal-form.styles";
import CloseWhiteSrc from "../../../assets/img/close-white.svg";
import { Icon } from "../job-modal-job-offer/job-modal-job-offer.styles";
import FileInput from "../file-input/file-input.component";

const JobModalForm = ({ showModal, setShowModal, job }) => {
  const modalVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
    exit: {
      y: -50,
      opacity: 0,
      transition: { ease: "easeInOut" },
    },
  };

  const uploadResume = () => console.log("sent");

  const [showForm, setShowForm] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "", // Optional
    resume: null,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    if (!formData.firstName) {
      errors.firstName = "Please enter your first name.";
      formIsValid = false;
    }

    if (!formData.lastName) {
      errors.lastName = "Please enter your last name.";
      formIsValid = false;
    }

    if (!formData.email) {
      errors.email = "Please enter your email.";
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email.";
      formIsValid = false;
    }

    if (!formData.resume) {
      errors.resume = "Please attach your resume.";
      formIsValid = false;
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await uploadResume(formData);
      setShowForm(false);
      setIsSubmitting(false);
      // Handle success, maybe reset form or give feedback to the user
    } catch (error) {
      setIsSubmitting(false);
      // Handle error, show message to the user
      setErrors({ submit: "An error occurred. Please try again." });
    }
  };

  const closeModal = () => setShowModal(false);

  return (
    <AnimatePresence>
      {showModal && (
        <Backdrop
          className="modal-backdrop"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`modal slide-up ${showForm ? "" : "success"}`}>
              <header>
                {showForm && (
                  <section>
                    <h2>Gérant(e) de Magasin</h2>
                    <span className="category">Management</span>
                    <span className="location">Montréal, Quebec | </span>
                    <span className="type">Permanent</span>
                    <Icon
                      onClick={closeModal}
                      className="close"
                      src={CloseWhiteSrc}
                      alt="close"
                    />
                  </section>
                )}
              </header>
              <div className="main">
                {showForm && (
                  <section>
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="form-field">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                        {errors.firstName && (
                          <span className="error">{errors.firstName}</span>
                        )}
                      </div>
                      <div className="form-field">
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                        {errors.lastName && (
                          <span className="error">{errors.lastName}</span>
                        )}
                      </div>
                      <div className="form-field">
                        <input
                          type="email"
                          name="email"
                          placeholder="email@domain.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        {errors.email && (
                          <span className="error">{errors.email}</span>
                        )}
                      </div>
                      <div className="form-field">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Mobile Phone (Optional)"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <span class="field-label">Resume File</span>
                      <div className="form-field upload-container">
                        <FileInput />
                        {errors.resume && (
                          <span className="error">{errors.resume}</span>
                        )}
                      </div>
                      {errors.submit && (
                        <span className="error submit-error">
                          {errors.submit}
                        </span>
                      )}
                      <footer>
                        <button
                          type="button"
                          onClick={closeModal}
                          className="cancel"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="send"
                        >
                          {isSubmitting ? "Submitting..." : "Send"}
                        </button>
                      </footer>
                    </form>
                  </section>
                )}
                {!showForm && (
                  <section>
                    <p>Thank you for your submission!</p>
                    <button onClick={closeModal}>Okay, Got it!</button>
                  </section>
                )}
              </div>
            </div>
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

export default JobModalForm;
