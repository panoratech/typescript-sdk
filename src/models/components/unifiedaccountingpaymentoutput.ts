/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedAccountingPaymentOutput = {};

/** @internal */
export const UnifiedAccountingPaymentOutput$inboundSchema: z.ZodType<
    UnifiedAccountingPaymentOutput,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedAccountingPaymentOutput$Outbound = {};

/** @internal */
export const UnifiedAccountingPaymentOutput$outboundSchema: z.ZodType<
    UnifiedAccountingPaymentOutput$Outbound,
    z.ZodTypeDef,
    UnifiedAccountingPaymentOutput
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingPaymentOutput$ {
    /** @deprecated use `UnifiedAccountingPaymentOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedAccountingPaymentOutput$inboundSchema;
    /** @deprecated use `UnifiedAccountingPaymentOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedAccountingPaymentOutput$outboundSchema;
    /** @deprecated use `UnifiedAccountingPaymentOutput$Outbound` instead. */
    export type Outbound = UnifiedAccountingPaymentOutput$Outbound;
}
