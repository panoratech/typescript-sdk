/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ticketingCommentsCreate } from "../funcs/ticketingCommentsCreate.js";
import { ticketingCommentsList } from "../funcs/ticketingCommentsList.js";
import { ticketingCommentsRetrieve } from "../funcs/ticketingCommentsRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Comments extends ClientSDK {
    /**
     * List Comments
     */
    async list(
        request: operations.ListTicketingCommentsRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.ListTicketingCommentsResponse>> {
        return unwrapResultIterator(ticketingCommentsList(this, request, options));
    }

    /**
     * Create Comments
     *
     * @remarks
     * Create Comments in any supported Ticketing software
     */
    async create(
        request: operations.CreateTicketingCommentRequest,
        options?: RequestOptions
    ): Promise<components.UnifiedTicketingCommentOutput> {
        return unwrapAsync(ticketingCommentsCreate(this, request, options));
    }

    /**
     * Retrieve Comment
     *
     * @remarks
     * Retrieve a Comment from any connected Ticketing software
     */
    async retrieve(
        request: operations.RetrieveTicketingCommentRequest,
        options?: RequestOptions
    ): Promise<operations.RetrieveTicketingCommentResponseBody> {
        return unwrapAsync(ticketingCommentsRetrieve(this, request, options));
    }
}
