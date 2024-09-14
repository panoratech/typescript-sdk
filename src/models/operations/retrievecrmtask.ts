/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type RetrieveCrmTaskRequest = {
  /**
   * The connection token
   */
  xConnectionToken: string;
  /**
   * id of the task you want to retrieve.
   */
  id: string;
  /**
   * Set to true to include data from the original Crm software.
   */
  remoteData?: boolean | undefined;
};

/** @internal */
export const RetrieveCrmTaskRequest$inboundSchema: z.ZodType<
  RetrieveCrmTaskRequest,
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
export type RetrieveCrmTaskRequest$Outbound = {
  "x-connection-token": string;
  id: string;
  remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveCrmTaskRequest$outboundSchema: z.ZodType<
  RetrieveCrmTaskRequest$Outbound,
  z.ZodTypeDef,
  RetrieveCrmTaskRequest
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
export namespace RetrieveCrmTaskRequest$ {
  /** @deprecated use `RetrieveCrmTaskRequest$inboundSchema` instead. */
  export const inboundSchema = RetrieveCrmTaskRequest$inboundSchema;
  /** @deprecated use `RetrieveCrmTaskRequest$outboundSchema` instead. */
  export const outboundSchema = RetrieveCrmTaskRequest$outboundSchema;
  /** @deprecated use `RetrieveCrmTaskRequest$Outbound` instead. */
  export type Outbound = RetrieveCrmTaskRequest$Outbound;
}
