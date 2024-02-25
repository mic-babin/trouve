import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Backdrop } from "./job-modal-form.styles";
import CloseWhiteSrc from "../../../assets/img/close-white.svg";
import { Icon } from "../job-modal-job-offer/job-modal-job-offer.styles";
import FileInput from "../file-input/file-input.component";
import { useJarvisForm } from "../../../utils/form.hook";
import { validate } from "../../../utils/form.validators";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";

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

  const {
    i18n: { language },
  } = useI18next();

  const [showForm, setShowForm] = useState(true);
  const [show, setShow] = useState(false);
  const { handleChange, fields, handleSubmit, errors } = useJarvisForm(
    validate,
    setShow,
    setShowModal
  );
  const [fileUploaded, setFileUploaded] = useState(false);
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    if (job) {
      let event = { target: { name: "id", value: job.referenceId } };
      handleChange(event);
    }
  }, [job]);

  return (
    <AnimatePresence>
      {showModal && (
        <Backdrop
          className="modal-backdrop"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`modal slide-up ${showForm ? "" : "success"}`}>
              <header>
                {showForm && (
                  <section>
                    <h2>{job.title.replace(/<[^>]*>/g, "")}</h2>
                    <span className="category">
                      {job.category.replace(/<[^>]*>/g, "")}
                    </span>
                    <span className="location">
                      {job.location.replace(/<[^>]*>/g, "")} |{" "}
                    </span>
                    <span className="type">
                      {job.schedule.replace(/<[^>]*>/g, "")}
                    </span>
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
                    <form>
                      <div className="form-field">
                        <input
                          type="text"
                          name="firstName"
                          placeholder={
                            language == "en" ? "First Name" : "Prénom"
                          }
                          value={fields["firstName"]}
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
                          placeholder={
                            language == "en" ? "Last Name" : "Nom de famille"
                          }
                          value={fields["lastName"]}
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
                          placeholder="Email"
                          value={fields["email"]}
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
                          placeholder={
                            language == "en"
                              ? "Mobile Phone (Optional)"
                              : "Téléphone (Optionel)"
                          }
                          value={fields["phone"]}
                          onChange={handleChange}
                        />
                      </div>
                      <span className="field-label">
                        <Trans>resume</Trans>
                      </span>
                      <div className="form-field upload-container">
                        <FileInput
                          fileUploaded={fileUploaded}
                          setFileUploaded={setFileUploaded}
                          fields={fields}
                          setFields={handleChange}
                        />
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
                          <Trans>cancel</Trans>
                        </button>
                        <button
                          type="submit"
                          disabled={show}
                          className="send"
                          onClick={(e) => handleSubmit(e)}
                        >
                          {show ? (
                            <Trans>submitting</Trans>
                          ) : (
                            <Trans>send</Trans>
                          )}
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
