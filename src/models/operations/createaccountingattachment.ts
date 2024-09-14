/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type CreateAccountingAttachmentRequest = {
  /**
   * The connection token
   */
  xConnectionToken: string;
  /**
   * Set to true to include data from the original Accounting software.
   */
  remoteData?: boolean | undefined;
  unifiedAccountingAttachmentInput: components.UnifiedAccountingAttachmentInput;
};

/** @internal */
export const CreateAccountingAttachmentRequest$inboundSchema: z.ZodType<
  CreateAccountingAttachmentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-connection-token": z.string(),
  remote_data: z.boolean().optional(),
  UnifiedAccountingAttachmentInput:
    components.UnifiedAccountingAttachmentInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "x-connection-token": "xConnectionToken",
    "remote_data": "remoteData",
    "UnifiedAccountingAttachmentInput": "unifiedAccountingAttachmentInput",
  });
});

/** @internal */
export type CreateAccountingAttachmentRequest$Outbound = {
  "x-connection-token": string;
  remote_data?: boolean | undefined;
  UnifiedAccountingAttachmentInput:
    components.UnifiedAccountingAttachmentInput$Outbound;
};

/** @internal */
export const CreateAccountingAttachmentRequest$outboundSchema: z.ZodType<
  CreateAccountingAttachmentRequest$Outbound,
  z.ZodTypeDef,
  CreateAccountingAttachmentRequest
> = z.object({
  xConnectionToken: z.string(),
  remoteData: z.boolean().optional(),
  unifiedAccountingAttachmentInput:
    components.UnifiedAccountingAttachmentInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    xConnectionToken: "x-connection-token",
    remoteData: "remote_data",
    unifiedAccountingAttachmentInput: "UnifiedAccountingAttachmentInput",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAccountingAttachmentRequest$ {
  /** @deprecated use `CreateAccountingAttachmentRequest$inboundSchema` instead. */
  export const inboundSchema = CreateAccountingAttachmentRequest$inboundSchema;
  /** @deprecated use `CreateAccountingAttachmentRequest$outboundSchema` instead. */
  export const outboundSchema =
    CreateAccountingAttachmentRequest$outboundSchema;
  /** @deprecated use `CreateAccountingAttachmentRequest$Outbound` instead. */
  export type Outbound = CreateAccountingAttachmentRequest$Outbound;
}
