# How to build and run sample

**prerequisite:** register your web application in AAD, edit its manifest and set `"oauth2AllowImplicitFlow": true`. Note down the app's clientId, tenant and reply url.

1. cd sample\server
1. edit server.ts to make server listen at url and port that matches app's reply url and homepage
1. tsc -p tsconfig.server.json (this should output server.js to &lt;project-root&gt;\dist\sample)
1. cd sample\client
1. edit sample.ts and update the clientId and tenant information
1. webpack (this should output bundle.js to &lt;project-root&gt;\dist\sample)
1. cd &lt;project-root&gt;\dist\sample
1. node .\server.js to start server
1. open browser, navigate to the URL where the server is listening (as configured in step 2)
1. follow adal auth flow to complete authentication.
