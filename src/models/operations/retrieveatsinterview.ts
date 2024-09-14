/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type RetrieveAtsInterviewRequest = {
  /**
   * The connection token
   */
  xConnectionToken: string;
  /**
   * id of the interview you want to retrieve.
   */
  id: string;
  /**
   * Set to true to include data from the original Ats software.
   */
  remoteData?: boolean | undefined;
};

/** @internal */
export const RetrieveAtsInterviewRequest$inboundSchema: z.ZodType<
  RetrieveAtsInterviewRequest,
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
export type RetrieveAtsInterviewRequest$Outbound = {
  "x-connection-token": string;
  id: string;
  remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveAtsInterviewRequest$outboundSchema: z.ZodType<
  RetrieveAtsInterviewRequest$Outbound,
  z.ZodTypeDef,
  RetrieveAtsInterviewRequest
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
export namespace RetrieveAtsInterviewRequest$ {
  /** @deprecated use `RetrieveAtsInterviewRequest$inboundSchema` instead. */
  export const inboundSchema = RetrieveAtsInterviewRequest$inboundSchema;
  /** @deprecated use `RetrieveAtsInterviewRequest$outboundSchema` instead. */
  export const outboundSchema = RetrieveAtsInterviewRequest$outboundSchema;
  /** @deprecated use `RetrieveAtsInterviewRequest$Outbound` instead. */
  export type Outbound = RetrieveAtsInterviewRequest$Outbound;
}
