# Firebase Killswitch
When the billing limit is reached, it will automatically downgrade the application to the free tier.
# Installation Guide

1. Create a budget in the `Budgets & alerts` tab in [Billing](https://console.cloud.google.com/billing).

1. Enable `Connect a Pub/Sub topic to this budget`.

1. Create a `Cloud Pub/Sub topic` for the Firebase project and name it `billing`.

1. Enable [Cloud Billing API](https://console.developers.google.com/apis/api/cloudbilling.googleapis.com).

1. Give billing administrative privilege to <PROJECT_ID>@appspot.gserviceaccount.com in [Billing](https://console.cloud.google.com/billing).

1. Change the project id in `.firebaserc` and `index.js`.

1. Set up Firebase CLI and login:

 ```
 npm install -g firebase-tools
 firebase login
 ```


8. Check if CLI is installed correctly: 
```
firebase projects:list
```

1. Navigate to the functions folder and deploy functions to Firebase:
```
cd functions
npm install
yarn deploy:functions
```

Note: If deployment fails, run
   `npm install --save @google-cloud/billing firebase-admin firebase-functions`.

[Activating Retry in Firebase Cloud Function Programmatically](https://stackoverflow.com/questions/55606808/activate-retry-in-firebase-cloud-function-programmatically)

## Testing

1. Go to [Pub/Sub](https://console.cloud.google.com/cloudpubsub/topic/detail) and select the Firebase project.

1. Navigate to the `MESSAGES` tab, then click on the `PUBLISH MESSAGE` button.

1. Paste the code below into `Message body` text box and hit `PUBLISH`:
```
{
    "budgetDisplayName": "name-of-budget",
    "alertThresholdExceeded": 1.0,
    "costAmount": 100.01,
    "costIntervalStart": "2019-01-01T00:00:00Z",
    "budgetAmount": 0.2,
    "budgetAmountType": "SPECIFIED_AMOUNT",
    "currencyCode": "AUD"
}
```

4. An email should be sent from Firebase informing you that the project has been downgraded to the free tier.

# Credits

[How to Stop Runaway Bills on Google Cloud Platform](https://www.youtube.com/watch?v=KiTg8RPpGG4)
