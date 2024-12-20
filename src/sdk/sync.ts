/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { syncGetPullFrequency } from "../funcs/syncGetPullFrequency.js";
import { syncResync } from "../funcs/syncResync.js";
import { syncStatus } from "../funcs/syncStatus.js";
import { syncUpdatePullFrequency } from "../funcs/syncUpdatePullFrequency.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Sync extends ClientSDK {
  /**
   * Retrieve sync status of a certain vertical
   */
  async status(
    request: operations.StatusRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(syncStatus(
      this,
      request,
      options,
    ));
  }

  /**
   * Resync common objects across a vertical
   */
  async resync(
    options?: RequestOptions,
  ): Promise<components.ResyncStatusDto> {
    return unwrapAsync(syncResync(
      this,
      options,
    ));
  }

  /**
   * Update pull frequency for verticals
   */
  async updatePullFrequency(
    request: components.UpdatePullFrequencyDto,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(syncUpdatePullFrequency(
      this,
      request,
      options,
    ));
  }

  /**
   * Get pull frequency for verticals
   */
  async getPullFrequency(
    options?: RequestOptions,
  ): Promise<components.UpdatePullFrequencyDto> {
    return unwrapAsync(syncGetPullFrequency(
      this,
      options,
    ));
  }
}
