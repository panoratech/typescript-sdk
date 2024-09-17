/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ragQueryQuery } from "../funcs/ragQueryQuery.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Query extends ClientSDK {
  /**
   * Query using RAG Search
   *
   * @remarks
   * Query across your connected data sources using RAG Search
   */
  async query(
    request: operations.QueryRequest,
    options?: RequestOptions,
  ): Promise<operations.QueryResponseBody> {
    return unwrapAsync(ragQueryQuery(
      this,
      request,
      options,
    ));
  }
}
