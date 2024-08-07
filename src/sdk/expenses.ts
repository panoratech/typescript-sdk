/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountingExpensesCreate } from "../funcs/accountingExpensesCreate.js";
import { accountingExpensesList } from "../funcs/accountingExpensesList.js";
import { accountingExpensesRetrieve } from "../funcs/accountingExpensesRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Expenses extends ClientSDK {
    /**
     * List  Expenses
     */
    async list(
        request: operations.ListAccountingExpenseRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.ListAccountingExpenseResponse>> {
        return unwrapResultIterator(accountingExpensesList(this, request, options));
    }

    /**
     * Create Expenses
     *
     * @remarks
     * Create Expenses in any supported Accounting software
     */
    async create(
        request: operations.CreateAccountingExpenseRequest,
        options?: RequestOptions
    ): Promise<components.UnifiedAccountingExpenseOutput> {
        return unwrapAsync(accountingExpensesCreate(this, request, options));
    }

    /**
     * Retrieve Expenses
     *
     * @remarks
     * Retrieve Expenses from any connected Accounting software
     */
    async retrieve(
        request: operations.RetrieveAccountingExpenseRequest,
        options?: RequestOptions
    ): Promise<components.UnifiedAccountingExpenseOutput> {
        return unwrapAsync(accountingExpensesRetrieve(this, request, options));
    }
}
