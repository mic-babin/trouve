const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  try {
    console.log(event);
    const data = JSON.parse(event.body);
    const response = await fetch(
      "https://functions.prod.jarvi.tech/v1/form_webhook_handler",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Include any other headers your target API requires
        },
        body: JSON.stringify(data),
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
