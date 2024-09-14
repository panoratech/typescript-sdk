/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { atsScorecardsList } from "../funcs/atsScorecardsList.js";
import { atsScorecardsRetrieve } from "../funcs/atsScorecardsRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Scorecards extends ClientSDK {
  /**
   * List  ScoreCards
   */
  async list(
    request: operations.ListAtsScorecardRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.ListAtsScorecardResponse>> {
    return unwrapResultIterator(atsScorecardsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve Score Cards
   *
   * @remarks
   * Retrieve Score Cards from any connected Ats software
   */
  async retrieve(
    request: operations.RetrieveAtsScorecardRequest,
    options?: RequestOptions,
  ): Promise<components.UnifiedAtsScorecardOutput> {
    return unwrapAsync(atsScorecardsRetrieve(
      this,
      request,
      options,
    ));
  }
}
