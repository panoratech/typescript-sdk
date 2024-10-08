/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountingVendorcreditsList } from "../funcs/accountingVendorcreditsList.js";
import { accountingVendorcreditsRetrieve } from "../funcs/accountingVendorcreditsRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Vendorcredits extends ClientSDK {
  /**
   * List  VendorCredits
   */
  async list(
    request: operations.ListAccountingVendorCreditRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.ListAccountingVendorCreditResponse>> {
    return unwrapResultIterator(accountingVendorcreditsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve Vendor Credits
   *
   * @remarks
   * Retrieve Vendor Credits from any connected Accounting software
   */
  async retrieve(
    request: operations.RetrieveAccountingVendorCreditRequest,
    options?: RequestOptions,
  ): Promise<components.UnifiedAccountingVendorcreditOutput> {
    return unwrapAsync(accountingVendorcreditsRetrieve(
      this,
      request,
      options,
    ));
  }
}
