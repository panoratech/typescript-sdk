/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type RetrieveMarketingautomationMessageRequest = {
  /**
   * The connection token
   */
  xConnectionToken: string;
  /**
   * id of the message you want to retrieve.
   */
  id: string;
  /**
   * Set to true to include data from the original Marketingautomation software.
   */
  remoteData?: boolean | undefined;
};

/** @internal */
export const RetrieveMarketingautomationMessageRequest$inboundSchema: z.ZodType<
  RetrieveMarketingautomationMessageRequest,
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
export type RetrieveMarketingautomationMessageRequest$Outbound = {
  "x-connection-token": string;
  id: string;
  remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveMarketingautomationMessageRequest$outboundSchema:
  z.ZodType<
    RetrieveMarketingautomationMessageRequest$Outbound,
    z.ZodTypeDef,
    RetrieveMarketingautomationMessageRequest
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
export namespace RetrieveMarketingautomationMessageRequest$ {
  /** @deprecated use `RetrieveMarketingautomationMessageRequest$inboundSchema` instead. */
  export const inboundSchema =
    RetrieveMarketingautomationMessageRequest$inboundSchema;
  /** @deprecated use `RetrieveMarketingautomationMessageRequest$outboundSchema` instead. */
  export const outboundSchema =
    RetrieveMarketingautomationMessageRequest$outboundSchema;
  /** @deprecated use `RetrieveMarketingautomationMessageRequest$Outbound` instead. */
  export type Outbound = RetrieveMarketingautomationMessageRequest$Outbound;
}
