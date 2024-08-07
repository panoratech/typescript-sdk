/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedAccountingCreditnoteOutput = {};

/** @internal */
export const UnifiedAccountingCreditnoteOutput$inboundSchema: z.ZodType<
    UnifiedAccountingCreditnoteOutput,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedAccountingCreditnoteOutput$Outbound = {};

/** @internal */
export const UnifiedAccountingCreditnoteOutput$outboundSchema: z.ZodType<
    UnifiedAccountingCreditnoteOutput$Outbound,
    z.ZodTypeDef,
    UnifiedAccountingCreditnoteOutput
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingCreditnoteOutput$ {
    /** @deprecated use `UnifiedAccountingCreditnoteOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedAccountingCreditnoteOutput$inboundSchema;
    /** @deprecated use `UnifiedAccountingCreditnoteOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedAccountingCreditnoteOutput$outboundSchema;
    /** @deprecated use `UnifiedAccountingCreditnoteOutput$Outbound` instead. */
    export type Outbound = UnifiedAccountingCreditnoteOutput$Outbound;
}
