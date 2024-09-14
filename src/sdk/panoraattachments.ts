/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountingAttachmentsCreate } from "../funcs/accountingAttachmentsCreate.js";
import { accountingAttachmentsList } from "../funcs/accountingAttachmentsList.js";
import { accountingAttachmentsRetrieve } from "../funcs/accountingAttachmentsRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class PanoraAttachments extends ClientSDK {
  /**
   * List  Attachments
   */
  async list(
    request: operations.ListAccountingAttachmentsRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.ListAccountingAttachmentsResponse>> {
    return unwrapResultIterator(accountingAttachmentsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Attachments
   *
   * @remarks
   * Create attachments in any supported Accounting software
   */
  async create(
    request: operations.CreateAccountingAttachmentRequest,
    options?: RequestOptions,
  ): Promise<components.UnifiedAccountingAttachmentOutput> {
    return unwrapAsync(accountingAttachmentsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve Attachments
   *
   * @remarks
   * Retrieve attachments from any connected Accounting software
   */
  async retrieve(
    request: operations.RetrieveAccountingAttachmentRequest,
    options?: RequestOptions,
  ): Promise<components.UnifiedAccountingAttachmentOutput> {
    return unwrapAsync(accountingAttachmentsRetrieve(
      this,
      request,
      options,
    ));
  }
}
