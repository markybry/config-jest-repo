// src/constants/config.js
import Constants from 'expo-constants';

const environments = {
  "development": {
    apiHost: "http://192.168.1.64:8080" // http://ipaddress:8080[container]|5000[debug]
  },
  "staging": {
    apiHost: "https://carefor-api-dev.azurewebsites.net",
  },
  "production": {
    apiHost: "https://carefor-api.azurewebsites.net",
  }
};

const commonConfigs = {
}

const env = Constants.manifest.extra.configChannel;  //works for web build too. release channels do not.

export default {
  ...commonConfigs,
  ...environments[env],
};