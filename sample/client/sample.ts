import { AuthenticationManager } from "../../lib/AuthenticationManager";

const config: adal.Config = {
  clientId: "Fill in client ID",
  tenant: "Fill in tenant ID"
};

const authManager = new AuthenticationManager(config);
authManager.login();
