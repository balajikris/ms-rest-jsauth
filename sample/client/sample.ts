import { AuthenticationManager } from "../../lib/AuthenticationManager";

const config: adal.Config = {
  clientId: "4e577d28-b99d-4b38-829a-1adc38b0fab5",
  tenant: "72f988bf-86f1-41af-91ab-2d7cd011db47",
  popUp: false
};

const authManager = new AuthenticationManager(config);
authManager.login();

document.write("Hey there sample js-auth!!")
