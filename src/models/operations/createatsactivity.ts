/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type CreateAtsActivityRequest = {
  /**
   * The connection token
   */
  xConnectionToken: string;
  /**
   * Set to true to include data from the original Ats software.
   */
  remoteData?: boolean | undefined;
  unifiedAtsActivityInput: components.UnifiedAtsActivityInput;
};

/** @internal */
export const CreateAtsActivityRequest$inboundSchema: z.ZodType<
  CreateAtsActivityRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-connection-token": z.string(),
  remote_data: z.boolean().optional(),
  UnifiedAtsActivityInput: components.UnifiedAtsActivityInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "x-connection-token": "xConnectionToken",
    "remote_data": "remoteData",
    "UnifiedAtsActivityInput": "unifiedAtsActivityInput",
  });
});

/** @internal */
export type CreateAtsActivityRequest$Outbound = {
  "x-connection-token": string;
  remote_data?: boolean | undefined;
  UnifiedAtsActivityInput: components.UnifiedAtsActivityInput$Outbound;
};

/** @internal */
export const CreateAtsActivityRequest$outboundSchema: z.ZodType<
  CreateAtsActivityRequest$Outbound,
  z.ZodTypeDef,
  CreateAtsActivityRequest
> = z.object({
  xConnectionToken: z.string(),
  remoteData: z.boolean().optional(),
  unifiedAtsActivityInput: components.UnifiedAtsActivityInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    xConnectionToken: "x-connection-token",
    remoteData: "remote_data",
    unifiedAtsActivityInput: "UnifiedAtsActivityInput",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAtsActivityRequest$ {
  /** @deprecated use `CreateAtsActivityRequest$inboundSchema` instead. */
  export const inboundSchema = CreateAtsActivityRequest$inboundSchema;
  /** @deprecated use `CreateAtsActivityRequest$outboundSchema` instead. */
  export const outboundSchema = CreateAtsActivityRequest$outboundSchema;
  /** @deprecated use `CreateAtsActivityRequest$Outbound` instead. */
  export type Outbound = CreateAtsActivityRequest$Outbound;
}
