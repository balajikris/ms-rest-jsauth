# ms-rest-jsauth
Authentication library for azure-sdk-for-javascript, written in typescript. This is a super thin layer over adal-js.

If you are writing a web application in **Typescript**  or **Browser Javascript** and need to use ADAL for authentication, you can accomplish that by following the code in [Samples directory](./sample).

The intent of this project is to bundle authentication functionality into Azure SDK libraries for Node/Javascript, provided by [AzureSDKTeam](https://www.npmjs.com/~windowsazure)

### How to run the sample

1. install dependencies - `npm install`
2. Start the server - `npm start`
3. Open `http://localhost:8080/login.html`
4. After successful login `http://localhost:8080/index.html`

#### You may find some of our [learnings](./sample/server/Notes.md) helpful.
