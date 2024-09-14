/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type RetrieveHrisGroupRequest = {
  /**
   * The connection token
   */
  xConnectionToken: string;
  /**
   * id of the group you want to retrieve.
   */
  id: string;
  /**
   * Set to true to include data from the original Hris software.
   */
  remoteData?: boolean | undefined;
};

/** @internal */
export const RetrieveHrisGroupRequest$inboundSchema: z.ZodType<
  RetrieveHrisGroupRequest,
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
export type RetrieveHrisGroupRequest$Outbound = {
  "x-connection-token": string;
  id: string;
  remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveHrisGroupRequest$outboundSchema: z.ZodType<
  RetrieveHrisGroupRequest$Outbound,
  z.ZodTypeDef,
  RetrieveHrisGroupRequest
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
export namespace RetrieveHrisGroupRequest$ {
  /** @deprecated use `RetrieveHrisGroupRequest$inboundSchema` instead. */
  export const inboundSchema = RetrieveHrisGroupRequest$inboundSchema;
  /** @deprecated use `RetrieveHrisGroupRequest$outboundSchema` instead. */
  export const outboundSchema = RetrieveHrisGroupRequest$outboundSchema;
  /** @deprecated use `RetrieveHrisGroupRequest$Outbound` instead. */
  export type Outbound = RetrieveHrisGroupRequest$Outbound;
}
