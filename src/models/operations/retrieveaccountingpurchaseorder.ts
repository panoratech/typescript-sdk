/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type RetrieveAccountingPurchaseOrderRequest = {
  /**
   * The connection token
   */
  xConnectionToken: string;
  /**
   * id of the purchaseorder you want to retrieve.
   */
  id: string;
  /**
   * Set to true to include data from the original Accounting software.
   */
  remoteData?: boolean | undefined;
};

/** @internal */
export const RetrieveAccountingPurchaseOrderRequest$inboundSchema: z.ZodType<
  RetrieveAccountingPurchaseOrderRequest,
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
export type RetrieveAccountingPurchaseOrderRequest$Outbound = {
  "x-connection-token": string;
  id: string;
  remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveAccountingPurchaseOrderRequest$outboundSchema: z.ZodType<
  RetrieveAccountingPurchaseOrderRequest$Outbound,
  z.ZodTypeDef,
  RetrieveAccountingPurchaseOrderRequest
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
export namespace RetrieveAccountingPurchaseOrderRequest$ {
  /** @deprecated use `RetrieveAccountingPurchaseOrderRequest$inboundSchema` instead. */
  export const inboundSchema =
    RetrieveAccountingPurchaseOrderRequest$inboundSchema;
  /** @deprecated use `RetrieveAccountingPurchaseOrderRequest$outboundSchema` instead. */
  export const outboundSchema =
    RetrieveAccountingPurchaseOrderRequest$outboundSchema;
  /** @deprecated use `RetrieveAccountingPurchaseOrderRequest$Outbound` instead. */
  export type Outbound = RetrieveAccountingPurchaseOrderRequest$Outbound;
}
