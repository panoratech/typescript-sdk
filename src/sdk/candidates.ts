/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { atsCandidatesCreate } from "../funcs/atsCandidatesCreate.js";
import { atsCandidatesList } from "../funcs/atsCandidatesList.js";
import { atsCandidatesRetrieve } from "../funcs/atsCandidatesRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Candidates extends ClientSDK {
  /**
   * List  Candidates
   */
  async list(
    request: operations.ListAtsCandidateRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.ListAtsCandidateResponse>> {
    return unwrapResultIterator(atsCandidatesList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Candidates
   *
   * @remarks
   * Create Candidates in any supported Ats software
   */
  async create(
    request: operations.CreateAtsCandidateRequest,
    options?: RequestOptions,
  ): Promise<components.UnifiedAtsCandidateOutput> {
    return unwrapAsync(atsCandidatesCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve Candidates
   *
   * @remarks
   * Retrieve Candidates from any connected Ats software
   */
  async retrieve(
    request: operations.RetrieveAtsCandidateRequest,
    options?: RequestOptions,
  ): Promise<components.UnifiedAtsCandidateOutput> {
    return unwrapAsync(atsCandidatesRetrieve(
      this,
      request,
      options,
    ));
  }
}
