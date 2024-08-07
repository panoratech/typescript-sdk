/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedAccountingJournalentryOutput = {};

/** @internal */
export const UnifiedAccountingJournalentryOutput$inboundSchema: z.ZodType<
    UnifiedAccountingJournalentryOutput,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedAccountingJournalentryOutput$Outbound = {};

/** @internal */
export const UnifiedAccountingJournalentryOutput$outboundSchema: z.ZodType<
    UnifiedAccountingJournalentryOutput$Outbound,
    z.ZodTypeDef,
    UnifiedAccountingJournalentryOutput
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingJournalentryOutput$ {
    /** @deprecated use `UnifiedAccountingJournalentryOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedAccountingJournalentryOutput$inboundSchema;
    /** @deprecated use `UnifiedAccountingJournalentryOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedAccountingJournalentryOutput$outboundSchema;
    /** @deprecated use `UnifiedAccountingJournalentryOutput$Outbound` instead. */
    export type Outbound = UnifiedAccountingJournalentryOutput$Outbound;
}
