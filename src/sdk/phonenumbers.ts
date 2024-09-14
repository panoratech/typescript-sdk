/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountingPhonenumbersList } from "../funcs/accountingPhonenumbersList.js";
import { accountingPhonenumbersRetrieve } from "../funcs/accountingPhonenumbersRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Phonenumbers extends ClientSDK {
  /**
   * List  PhoneNumbers
   */
  async list(
    request: operations.ListAccountingPhonenumberRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.ListAccountingPhonenumberResponse>> {
    return unwrapResultIterator(accountingPhonenumbersList(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve Phone Numbers
   *
   * @remarks
   * Retrieve Phone Numbers from any connected Accounting software
   */
  async retrieve(
    request: operations.RetrieveAccountingPhonenumberRequest,
    options?: RequestOptions,
  ): Promise<components.UnifiedAccountingPhonenumberOutput> {
    return unwrapAsync(accountingPhonenumbersRetrieve(
      this,
      request,
      options,
    ));
  }
}
