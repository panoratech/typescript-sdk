/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedMarketingautomationEmailOutput = {};

/** @internal */
export const UnifiedMarketingautomationEmailOutput$inboundSchema: z.ZodType<
  UnifiedMarketingautomationEmailOutput,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type UnifiedMarketingautomationEmailOutput$Outbound = {};

/** @internal */
export const UnifiedMarketingautomationEmailOutput$outboundSchema: z.ZodType<
  UnifiedMarketingautomationEmailOutput$Outbound,
  z.ZodTypeDef,
  UnifiedMarketingautomationEmailOutput
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedMarketingautomationEmailOutput$ {
  /** @deprecated use `UnifiedMarketingautomationEmailOutput$inboundSchema` instead. */
  export const inboundSchema =
    UnifiedMarketingautomationEmailOutput$inboundSchema;
  /** @deprecated use `UnifiedMarketingautomationEmailOutput$outboundSchema` instead. */
  export const outboundSchema =
    UnifiedMarketingautomationEmailOutput$outboundSchema;
  /** @deprecated use `UnifiedMarketingautomationEmailOutput$Outbound` instead. */
  export type Outbound = UnifiedMarketingautomationEmailOutput$Outbound;
}
