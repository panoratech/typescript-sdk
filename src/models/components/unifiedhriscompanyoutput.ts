/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedHrisCompanyOutput = {};

/** @internal */
export const UnifiedHrisCompanyOutput$inboundSchema: z.ZodType<
    UnifiedHrisCompanyOutput,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedHrisCompanyOutput$Outbound = {};

/** @internal */
export const UnifiedHrisCompanyOutput$outboundSchema: z.ZodType<
    UnifiedHrisCompanyOutput$Outbound,
    z.ZodTypeDef,
    UnifiedHrisCompanyOutput
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedHrisCompanyOutput$ {
    /** @deprecated use `UnifiedHrisCompanyOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedHrisCompanyOutput$inboundSchema;
    /** @deprecated use `UnifiedHrisCompanyOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedHrisCompanyOutput$outboundSchema;
    /** @deprecated use `UnifiedHrisCompanyOutput$Outbound` instead. */
    export type Outbound = UnifiedHrisCompanyOutput$Outbound;
}
