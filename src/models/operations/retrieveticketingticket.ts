/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RetrieveTicketingTicketRequest = {
  /**
   * The connection token
   */
  xConnectionToken: string;
  /**
   * id of the `ticket` you want to retrive.
   */
  id: string;
  /**
   * Set to true to include data from the original Ticketing software.
   */
  remoteData?: boolean | undefined;
};

/** @internal */
export const RetrieveTicketingTicketRequest$inboundSchema: z.ZodType<
  RetrieveTicketingTicketRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-connection-token": z.string(),
  id: z.string(),
  remote_data: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "x-connection-token": "xConnectionToken",
    "remote_data": "remoteData",
  });
});

/** @internal */
export type RetrieveTicketingTicketRequest$Outbound = {
  "x-connection-token": string;
  id: string;
  remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveTicketingTicketRequest$outboundSchema: z.ZodType<
  RetrieveTicketingTicketRequest$Outbound,
  z.ZodTypeDef,
  RetrieveTicketingTicketRequest
> = z.object({
  xConnectionToken: z.string(),
  id: z.string(),
  remoteData: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    xConnectionToken: "x-connection-token",
    remoteData: "remote_data",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveTicketingTicketRequest$ {
  /** @deprecated use `RetrieveTicketingTicketRequest$inboundSchema` instead. */
  export const inboundSchema = RetrieveTicketingTicketRequest$inboundSchema;
  /** @deprecated use `RetrieveTicketingTicketRequest$outboundSchema` instead. */
  export const outboundSchema = RetrieveTicketingTicketRequest$outboundSchema;
  /** @deprecated use `RetrieveTicketingTicketRequest$Outbound` instead. */
  export type Outbound = RetrieveTicketingTicketRequest$Outbound;
}

export function retrieveTicketingTicketRequestToJSON(
  retrieveTicketingTicketRequest: RetrieveTicketingTicketRequest,
): string {
  return JSON.stringify(
    RetrieveTicketingTicketRequest$outboundSchema.parse(
      retrieveTicketingTicketRequest,
    ),
  );
}

export function retrieveTicketingTicketRequestFromJSON(
  jsonString: string,
): SafeParseResult<RetrieveTicketingTicketRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RetrieveTicketingTicketRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RetrieveTicketingTicketRequest' from JSON`,
  );
}
