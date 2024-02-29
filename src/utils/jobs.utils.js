export const enFields = [
  "955bd1cb-cec0-4c3d-96f4-26d6a69b527b",
  "7ead2eea-eeae-4802-bfc4-9393180d84f0",
  "e141ed28-5d1c-408f-955d-e4a53ac5fc3e",
  "440d4b49-3e83-418e-9ce8-04b926d86f96",
  "8bd6cffa-ef64-4547-8a70-9d77f7b6ceb9",
  "3b6c6a6b-7b9e-42b8-a520-7f7a39fd6378",
  "295366d6-b2a9-4917-a4fb-3d41518ad0ef",
  "c4f0e4bf-7d2f-40e9-87f3-968519a88b36",
  "eb079d8c-1301-4dd8-b24f-8e0b5498b8a1",
];
export const frFields = [
  "037b9bd1-1f92-4c88-ad79-302bdb784cef",
  "155a85c6-c677-48c1-8a3c-6afb967354bf",
  "a00b4cd3-8973-4d63-b65b-3ef6d6111136",
  "a96c1081-720b-41ae-9623-f14b26096f22",
  "302964d8-2ab6-467f-88b8-aa253c249f84",
  "429eb4e6-b232-4feb-931b-7dd6bb226def",
  "cd80b702-cfc2-4c42-b872-9b6ee07372b4",
  "ba816ff9-8b30-44b5-9d94-6a57b59bc7dc",
  "ce414904-9606-4c47-852a-07b0652775a0",
];

export const filterItems = (items, fieldName) => {
  return items.filter(
    (item) =>
      item.fieldsValues.some(
        (field) => field.field.name === fieldName && field.value === "true"
      ) && item.deletedAt == null
  );
};

export const extractArray = (items, fieldId) => {
  const allValues = items
    .flatMap((item) => item.fieldsValues)
    .filter((field) => field.field.id === fieldId)
    .map((field) => field.value);

  // Tally occurrences of each value
  const valueCounts = allValues.reduce((acc, value) => {
    if (value !== null && value !== undefined) {
      acc[value] = (acc[value] || 0) + 1;
    }
    return acc;
  }, {});

  // Transform the object map into an array of { value, count } objects
  const uniqueValuesWithCounts = Object.keys(valueCounts).map((value) => ({
    name: value.replace(/<[^>]*>/g, ""),
    count: valueCounts[value],
  }));

  return uniqueValuesWithCounts;
};

export const filterFieldsByLanguage = (jobs, language) => {
  const languageFields = language === "en" ? enFields : frFields;
  return jobs.map((job) => ({
    ...job, // Spread the rest of the job properties
    fieldsValues: job.fieldsValues.filter((fieldValue) =>
      languageFields.includes(fieldValue.field.id)
    ),
  }));
};

export const fieldToJobPropertyMap = {
  "037b9bd1-1f92-4c88-ad79-302bdb784cef": "title",
  "955bd1cb-cec0-4c3d-96f4-26d6a69b527b": "title",
  "ba816ff9-8b30-44b5-9d94-6a57b59bc7dc": "schedule",
  "295366d6-b2a9-4917-a4fb-3d41518ad0ef": "schedule",
  "ce414904-9606-4c47-852a-07b0652775a0": "category",
  "eb079d8c-1301-4dd8-b24f-8e0b5498b8a1": "category",
  "cd80b702-cfc2-4c42-b872-9b6ee07372b4": "location",
  "c4f0e4bf-7d2f-40e9-87f3-968519a88b36": "location",
  "429eb4e6-b232-4feb-931b-7dd6bb226def": "skills",
  "8bd6cffa-ef64-4547-8a70-9d77f7b6ceb9": "skills",
  "155a85c6-c677-48c1-8a3c-6afb967354bf": "description",
  "440d4b49-3e83-418e-9ce8-04b926d86f96": "description",
  "a96c1081-720b-41ae-9623-f14b26096f22": "responsibilities",
  "3b6c6a6b-7b9e-42b8-a520-7f7a39fd6378": "responsibilities",
  "302964d8-2ab6-467f-88b8-aa253c249f84": "contact",
  "e141ed28-5d1c-408f-955d-e4a53ac5fc3e": "contact",
  "a00b4cd3-8973-4d63-b65b-3ef6d6111136": "summary",
  "7ead2eea-eeae-4802-bfc4-9393180d84f0": "summary",
};
