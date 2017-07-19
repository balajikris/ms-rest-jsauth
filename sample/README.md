# How to build and run sample

1. cd to sample\server
1. tsc -p tsconfig.server.json (this should output server.js to dist\sample)
1. cd to sample\client
1. webpack (this should output bundle.js to dist\sample)
1. cd to dist\sample
1. node .\server.js to start server
1. open browser, navigate to [localhost:44326](http://localhost:44326) where the server is listening by default
   * Note that this url has to match verbatim, for e.g: it cannot be 127.0.0.1:44326. This has to match the app's configuration in Active Directory.
1. follow adal auth flow to complete authentication.
