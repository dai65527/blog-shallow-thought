import { createClient, MicroCMSClient } from "microcms-js-sdk";
import { APIConfig } from "./config"

export default class APIClient {
  private client: {
    get: <T>({
      endpoint,
      contentId,
      queries,
      useGlobalDraftKey,
    }: {
      endpoint: string;
      contentId?: string;
      queries?: {
        draftKey?: string;
        limit?: number;
        offset?: number;
        orders?: string;
        fields?: string;
        q?: string;
        depth?: 1 | 2 | 3;
        ids?: string;
        filters?: string;
      };
      useGlobalDraftKey?: boolean;
    }) => Promise<T>;
  };

  constructor() {
    this.client = createClient({
      serviceDomain: APIConfig.microCMSServiceDomain,
      apiKey: APIConfig.microCMSApiKey,
    });
  }
}
