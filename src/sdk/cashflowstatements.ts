/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountingCashflowstatementsList } from "../funcs/accountingCashflowstatementsList.js";
import { accountingCashflowstatementsRetrieve } from "../funcs/accountingCashflowstatementsRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Cashflowstatements extends ClientSDK {
  /**
   * List  CashflowStatements
   */
  async list(
    request: operations.ListAccountingCashflowStatementRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.ListAccountingCashflowStatementResponse>> {
    return unwrapResultIterator(accountingCashflowstatementsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve Cashflow Statements
   *
   * @remarks
   * Retrieve Cashflow Statements from any connected Accounting software
   */
  async retrieve(
    request: operations.RetrieveAccountingCashflowStatementRequest,
    options?: RequestOptions,
  ): Promise<components.UnifiedAccountingCashflowstatementOutput> {
    return unwrapAsync(accountingCashflowstatementsRetrieve(
      this,
      request,
      options,
    ));
  }
}
