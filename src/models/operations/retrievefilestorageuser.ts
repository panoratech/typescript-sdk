/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type RetrieveFilestorageUserRequest = {
  /**
   * The connection token
   */
  xConnectionToken: string;
  /**
   * id of the permission you want to retrieve.
   */
  id: string;
  /**
   * Set to true to include data from the original File Storage software.
   */
  remoteData?: boolean | undefined;
};

/** @internal */
export const RetrieveFilestorageUserRequest$inboundSchema: z.ZodType<
  RetrieveFilestorageUserRequest,
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
export type RetrieveFilestorageUserRequest$Outbound = {
  "x-connection-token": string;
  id: string;
  remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveFilestorageUserRequest$outboundSchema: z.ZodType<
  RetrieveFilestorageUserRequest$Outbound,
  z.ZodTypeDef,
  RetrieveFilestorageUserRequest
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
export namespace RetrieveFilestorageUserRequest$ {
  /** @deprecated use `RetrieveFilestorageUserRequest$inboundSchema` instead. */
  export const inboundSchema = RetrieveFilestorageUserRequest$inboundSchema;
  /** @deprecated use `RetrieveFilestorageUserRequest$outboundSchema` instead. */
  export const outboundSchema = RetrieveFilestorageUserRequest$outboundSchema;
  /** @deprecated use `RetrieveFilestorageUserRequest$Outbound` instead. */
  export type Outbound = RetrieveFilestorageUserRequest$Outbound;
}
