/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { filestorageDrivesList } from "../funcs/filestorageDrivesList.js";
import { filestorageDrivesRetrieve } from "../funcs/filestorageDrivesRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Drives extends ClientSDK {
    /**
     * List Drives
     */
    async list(
        request: operations.ListFilestorageDrivesRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.ListFilestorageDrivesResponse>> {
        return unwrapResultIterator(filestorageDrivesList(this, request, options));
    }

    /**
     * Retrieve Drive
     *
     * @remarks
     * Retrieve a Drive from any connected file storage service
     */
    async retrieve(
        request: operations.RetrieveFilestorageDriveRequest,
        options?: RequestOptions
    ): Promise<components.UnifiedFilestorageDriveOutput> {
        return unwrapAsync(filestorageDrivesRetrieve(this, request, options));
    }
}
