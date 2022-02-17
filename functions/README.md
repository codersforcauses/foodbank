# Installation Guide

1. Create a budget in the `Budgets & alerts` tab <https://console.cloud.google.com/billing>

1. Enable `Connect a Pub/Sub topic to this budget`

1. Create a `Cloud Pub/Sub topic` for the firebase project and name it `billing`

1. Enable Cloud Billing API <https://console.developers.google.com/apis/api/cloudbilling.googleapis.com>

1. Give billing administrative privilege to <PROJECT_ID>@appspot.gserviceaccount.com <https://console.cloud.google.com/billing>

1. Set up firebase cli `npm install -g firebase-tools`

1. Log into firebase `firebase login`

1. Test if if CLI is installed correctly `firebase projects:list`

1. `cd functions`

1. `npm intall`

1. `yarn deploy:functions` to deploy the functions to firebase

1. If deployment fails, do
   `npm install --save @google-cloud/billing firebase-admin firebase-functions`

1. To activate retry in firebase cloud function programmatically
   <https://stackoverflow.com/questions/55606808/activate-retry-in-firebase-cloud-function-programmatically>

## To test if the functions works correctly

1. Go to <https://console.cloud.google.com/cloudpubsub/topic/detail>

1. Select the firebase project

1. Click on the `MESSAGES` tab, then click on the `PUBLISH MESSAGE` button

1. Copy the code in `pub_sub_sample_message.json` and paste it into `Message body` text box

1. Hit `PUBLISH`

1. Wait for an email notification from firebase. It will tell you that the project has been downgraded to the free tier.
