import { PayloadSDK } from "@payloadcms/sdk";
import type { Config } from "payload-cms";
import { CMS_URL, CMS_API_SECRET } from "astro:env/server";

const payloadSDK = new PayloadSDK<Config>({
  baseURL: CMS_URL + "/api",
  baseInit: {
    headers: {
      Authorization: `apikey API-Key ${CMS_API_SECRET}`,
    },
  },
});

export default payloadSDK;
