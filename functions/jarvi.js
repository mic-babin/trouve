const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  try {
    const eventData = JSON.parse(event.body);
    const data = {
      "x-client-id": "d621d817-20a5-4d51-884e-00b8a02a42cb",
      referenceId: eventData.id,
      firstName: eventData.firstName,
      lastName: eventData.lastName,
      emailAddresses: eventData.email,
      phoneNumbers: eventData.phoneNumbers,
      linkedinUrl: eventData.linkedIn,
      historyEntrySubject: "Candidature depuis trouvemtl.com",
      historyEntryMessage:
        "Voici mon commentaire, merci de regarde ma candidature avec attention",
      files: [],
      resumesFiles: [
        {
          data: eventData.resume,
          fileName: "cv.pdf",
        },
      ],
    };
    const bodyData = data;
    const response = await fetch(
      "https://functions.prod.jarvi.tech/v1/form_webhook_handler",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Include any other headers your target API requires
        },
        body: JSON.stringify(bodyData),
      }
    );

    if (!response.ok) {
      // Forward the HTTP status code and status text from the target API
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    const responseData = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(responseData),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `Server error: ${error.message}`,
    };
  }
};
