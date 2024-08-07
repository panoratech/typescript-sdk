/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedAccountingPhonenumberOutput = {};

/** @internal */
export const UnifiedAccountingPhonenumberOutput$inboundSchema: z.ZodType<
    UnifiedAccountingPhonenumberOutput,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedAccountingPhonenumberOutput$Outbound = {};

/** @internal */
export const UnifiedAccountingPhonenumberOutput$outboundSchema: z.ZodType<
    UnifiedAccountingPhonenumberOutput$Outbound,
    z.ZodTypeDef,
    UnifiedAccountingPhonenumberOutput
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingPhonenumberOutput$ {
    /** @deprecated use `UnifiedAccountingPhonenumberOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedAccountingPhonenumberOutput$inboundSchema;
    /** @deprecated use `UnifiedAccountingPhonenumberOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedAccountingPhonenumberOutput$outboundSchema;
    /** @deprecated use `UnifiedAccountingPhonenumberOutput$Outbound` instead. */
    export type Outbound = UnifiedAccountingPhonenumberOutput$Outbound;
}
