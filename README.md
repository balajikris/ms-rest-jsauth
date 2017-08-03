# ms-rest-jsauth
Authentication library for azure-sdk-for-javascript, written in typescript. This is a super thin layer over adal-js.

If you are writing a web application in **Typescript**  or **Browser Javascript** and need to use ADAL for authentication, you can accomplish that by following the code in [Samples directory](./sample).

The intent of this project is to bundle authentication functionality into Azure SDK libraries for Node/Javascript, provided by [AzureSDKTeam](https://www.npmjs.com/~windowsazure)

### How to run the sample

1. Install dependencies - `npm install`.
2. Update relevant information in the samples.
   1. Update the clientId and tenantId fields with that of your ActiveDirectory Application over [here](https://github.com/balajikris/ms-rest-jsauth/blob/master/sample/client/authConstants.ts#L7).
   2. Update the subscriptionId over [here](https://github.com/balajikris/ms-rest-jsauth/blob/master/sample/client/browser-sample.ts#L6).
3. Execute - `npm run build` from the root of the cloned repo.
4. Start the server - `npm start`
5. Open `http://localhost:8080/login.html` for authentication. This will redirect you to AAD for login.
6. After successful login `http://localhost:8080/index.html` .

#### You may find some of our [learnings](./sample/Notes.md) helpful.
