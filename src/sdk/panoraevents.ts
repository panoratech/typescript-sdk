/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { marketingautomationEventsList } from "../funcs/marketingautomationEventsList.js";
import { marketingautomationEventsRetrieve } from "../funcs/marketingautomationEventsRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class PanoraEvents extends ClientSDK {
  /**
   * List Events
   */
  async list(
    request: operations.ListMarketingAutomationEventsRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.ListMarketingAutomationEventsResponse>> {
    return unwrapResultIterator(marketingautomationEventsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve Event
   *
   * @remarks
   * Retrieve an Event from any connected Marketingautomation software
   */
  async retrieve(
    request: operations.RetrieveMarketingautomationEventRequest,
    options?: RequestOptions,
  ): Promise<components.UnifiedMarketingautomationEventOutput> {
    return unwrapAsync(marketingautomationEventsRetrieve(
      this,
      request,
      options,
    ));
  }
}
