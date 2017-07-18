import { AuthenticationManager } from "./lib/AuthenticationManager";

// scrub this.
const config: adal.Config = {
  clientId: "8fb9db85-09d0-4e4f-a030-c9a51e2d14eb",
  tenant: "72f988bf-86f1-41af-91ab-2d7cd011db47"
};

const authManager = new AuthenticationManager(config);
authManager.login();
