/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountingJournalentriesCreate } from "../funcs/accountingJournalentriesCreate.js";
import { accountingJournalentriesList } from "../funcs/accountingJournalentriesList.js";
import { accountingJournalentriesRetrieve } from "../funcs/accountingJournalentriesRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Journalentries extends ClientSDK {
    /**
     * List  JournalEntrys
     */
    async list(
        request: operations.ListAccountingJournalEntryRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.ListAccountingJournalEntryResponse>> {
        return unwrapResultIterator(accountingJournalentriesList(this, request, options));
    }

    /**
     * Create Journal Entries
     *
     * @remarks
     * Create Journal Entries in any supported Accounting software
     */
    async create(
        request: operations.CreateAccountingJournalEntryRequest,
        options?: RequestOptions
    ): Promise<components.UnifiedAccountingJournalentryOutput> {
        return unwrapAsync(accountingJournalentriesCreate(this, request, options));
    }

    /**
     * Retrieve Journal Entries
     *
     * @remarks
     * Retrieve Journal Entries from any connected Accounting software
     */
    async retrieve(
        request: operations.RetrieveAccountingJournalEntryRequest,
        options?: RequestOptions
    ): Promise<components.UnifiedAccountingJournalentryOutput> {
        return unwrapAsync(accountingJournalentriesRetrieve(this, request, options));
    }
}
