/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ticketingTagsList } from "../funcs/ticketingTagsList.js";
import { ticketingTagsRetrieve } from "../funcs/ticketingTagsRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Tags extends ClientSDK {
    /**
     * List Tags
     */
    async list(
        request: operations.ListTicketingTagsRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.ListTicketingTagsResponse>> {
        return unwrapResultIterator(ticketingTagsList(this, request, options));
    }

    /**
     * Retrieve Tag
     *
     * @remarks
     * Retrieve a Tag from any connected Ticketing software
     */
    async retrieve(
        request: operations.RetrieveTicketingTagRequest,
        options?: RequestOptions
    ): Promise<components.UnifiedTicketingTagOutput> {
        return unwrapAsync(ticketingTagsRetrieve(this, request, options));
    }
}
