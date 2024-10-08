/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { crmContactsCreate } from "../funcs/crmContactsCreate.js";
import { crmContactsList } from "../funcs/crmContactsList.js";
import { crmContactsRetrieve } from "../funcs/crmContactsRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class PanoraContacts extends ClientSDK {
  /**
   * List CRM Contacts
   */
  async list(
    request: operations.ListCrmContactsRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.ListCrmContactsResponse>> {
    return unwrapResultIterator(crmContactsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Contacts
   *
   * @remarks
   * Create Contacts in any supported CRM
   */
  async create(
    request: operations.CreateCrmContactRequest,
    options?: RequestOptions,
  ): Promise<components.UnifiedCrmContactOutput> {
    return unwrapAsync(crmContactsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve Contacts
   *
   * @remarks
   * Retrieve Contacts from any connected CRM
   */
  async retrieve(
    request: operations.RetrieveCrmContactRequest,
    options?: RequestOptions,
  ): Promise<components.UnifiedCrmContactOutput> {
    return unwrapAsync(crmContactsRetrieve(
      this,
      request,
      options,
    ));
  }
}
