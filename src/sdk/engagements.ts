/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { crmEngagementsCreate } from "../funcs/crmEngagementsCreate.js";
import { crmEngagementsList } from "../funcs/crmEngagementsList.js";
import { crmEngagementsRetrieve } from "../funcs/crmEngagementsRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Engagements extends ClientSDK {
    /**
     * List Engagements
     */
    async list(
        request: operations.ListCrmEngagementsRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.ListCrmEngagementsResponse>> {
        return unwrapResultIterator(crmEngagementsList(this, request, options));
    }

    /**
     * Create Engagements
     *
     * @remarks
     * Create Engagements in any supported Crm software
     */
    async create(
        request: operations.CreateCrmEngagementRequest,
        options?: RequestOptions
    ): Promise<components.UnifiedCrmEngagementOutput> {
        return unwrapAsync(crmEngagementsCreate(this, request, options));
    }

    /**
     * Retrieve Engagements
     *
     * @remarks
     * Retrieve Engagements from any connected Crm software
     */
    async retrieve(
        request: operations.RetrieveCrmEngagementRequest,
        options?: RequestOptions
    ): Promise<components.UnifiedCrmEngagementOutput> {
        return unwrapAsync(crmEngagementsRetrieve(this, request, options));
    }
}
