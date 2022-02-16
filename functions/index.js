// @ts-nocheck
const functions = require("firebase-functions");
const {CloudBillingClient} = require("@google-cloud/billing");
// import * as functions from "firebase-functions";
// import {CloudBillingClient} from "@google-cloud/billing";

const PROJECT_ID = "fir-killswitch";
const PROJECT_NAME = `projects/${PROJECT_ID}`;
const billing = new CloudBillingClient();

// Google Cloud Functions
// exports.stopBilling = async (pubsubEvent) => {
//   const pubsubData = JSON.parse(
//       Buffer.from(pubsubEvent.data, "base64").toString()
//   );
//   console.log("pubsubEvent.data", pubsubEvent.data);
//   console.log("pubsubData", pubsubData);
//   console.log("pubsubData.costAmount", pubsubData.costAmount);
//   console.log("pubsubData.budgetAmount", pubsubData.budgetAmount);

//   if (pubsubData.costAmount <= pubsubData.budgetAmount) {
//     console.log("No action necessary.");
//     return `No action necessary. (Current cost: ${pubsubData.costAmount})`;
//   }
//   const billingEnabled = await _isBillingEnabled(PROJECT_NAME);
//   if (billingEnabled) {
//     return _disableBillingForProject(PROJECT_NAME);
//   } else {
//     console.log("Billing already disabled");
//     return "Billing already disabled";
//   }
// };

/**
 * Determine whether billing is enabled for a project
 * @param {string} projectName Name of project to check if billing is enabled
 * @return {bool} Whether project has billing enabled or not
 */
const _isBillingEnabled = async (projectName) => {
  try {
    const [res] = await billing.getProjectBillingInfo({name: projectName});
    console.log("isBillingEnabled:", res.billingEnabled);
    return res.billingEnabled;
  } catch (e) {
    console.log(
        "Unable to determine if billing is enabled on specified project,"
        , "assuming billing is enabled",
    );
    return true;
  }
};

/**
 * Disable billing for a project by removing its billing account
 * @param {string} projectName Name of project disable billing on
 * @return {Promise<string>} Text containing response from disabling billing
 */
const _disableBillingForProject = async (projectName) => {
  console.log("Disabling billing");
  const [res] = await billing.updateProjectBillingInfo({
    name: projectName,
    projectBillingInfo: {billingAccountName: ""}, // Disable billing
  });
  console.log("Billing disabled");
  return `Billing disabled: ${JSON.stringify(res)}`;
};


// Firebase Functions
/* eslint-disable-next-line max-len */
// exports.stopBilling = functions.region("australia-southeast1").runWith({
//   failurePolicy: true,
//   memory: '512MB',
//   timeoutSeconds: 60
// }).pubsub.topic("billing").onPublish(async (pubsubEvent) => {  // Not Tested
exports.stopBilling = functions.region("australia-southeast1").pubsub.topic("billing").onPublish(async (pubsubEvent) => {
  const pubsubData = JSON.parse(
      Buffer.from(pubsubEvent.data, "base64").toString(),
  );
  console.log("pubsubEvent.data", pubsubEvent.data);
  console.log("pubsubData", pubsubData);
  console.log("pubsubData.costAmount", pubsubData.costAmount);
  console.log("pubsubData.budgetAmount", pubsubData.budgetAmount);

  if (pubsubData.costAmount <= pubsubData.budgetAmount) {
    console.log("No action necessary.");
    return `No action necessary. (Current cost: ${pubsubData.costAmount})`;
  }
  const billingEnabled = await _isBillingEnabled(PROJECT_NAME);
  if (billingEnabled) {
    return _disableBillingForProject(PROJECT_NAME);
  } else {
    console.log("Billing already disabled");
    return "Billing already disabled";
  }
});
