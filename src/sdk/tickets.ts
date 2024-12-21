/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ticketingTicketsCreate } from "../funcs/ticketingTicketsCreate.js";
import { ticketingTicketsList } from "../funcs/ticketingTicketsList.js";
import { ticketingTicketsRetrieve } from "../funcs/ticketingTicketsRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Tickets extends ClientSDK {
  /**
   * List  Tickets
   */
  async list(
    request: operations.ListTicketingTicketRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.ListTicketingTicketResponse, { cursor: string }>
  > {
    return unwrapResultIterator(ticketingTicketsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Tickets
   *
   * @remarks
   * Create Tickets in any supported Ticketing software
   */
  async create(
    request: operations.CreateTicketingTicketRequest,
    options?: RequestOptions,
  ): Promise<components.UnifiedTicketingTicketOutput> {
    return unwrapAsync(ticketingTicketsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve Tickets
   *
   * @remarks
   * Retrieve Tickets from any connected Ticketing software
   */
  async retrieve(
    request: operations.RetrieveTicketingTicketRequest,
    options?: RequestOptions,
  ): Promise<components.UnifiedTicketingTicketOutput> {
    return unwrapAsync(ticketingTicketsRetrieve(
      this,
      request,
      options,
    ));
  }
}
