/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { hrisEmploymentsList } from "../funcs/hrisEmploymentsList.js";
import { hrisEmploymentsRetrieve } from "../funcs/hrisEmploymentsRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Employments extends ClientSDK {
    /**
     * List Employments
     */
    async list(
        request: operations.ListHrisEmploymentsRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.ListHrisEmploymentsResponse>> {
        return unwrapResultIterator(hrisEmploymentsList(this, request, options));
    }

    /**
     * Retrieve Employment
     *
     * @remarks
     * Retrieve an Employment from any connected Hris software
     */
    async retrieve(
        request: operations.RetrieveHrisEmploymentRequest,
        options?: RequestOptions
    ): Promise<components.UnifiedHrisEmploymentOutput> {
        return unwrapAsync(hrisEmploymentsRetrieve(this, request, options));
    }
}
