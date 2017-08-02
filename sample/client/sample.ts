import { AuthenticationManager } from "../../lib/AuthenticationManager";

const config: adal.Config = {
  clientId: "",
  tenant: "",
  popUp: false
};

const authManager = new AuthenticationManager(config);
authManager.login();
authManager.handleWindowCallback();
document.write("Hey there sample js-auth!!");
