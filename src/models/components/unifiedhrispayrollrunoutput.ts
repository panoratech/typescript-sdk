/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedHrisPayrollrunOutput = {};

/** @internal */
export const UnifiedHrisPayrollrunOutput$inboundSchema: z.ZodType<
    UnifiedHrisPayrollrunOutput,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedHrisPayrollrunOutput$Outbound = {};

/** @internal */
export const UnifiedHrisPayrollrunOutput$outboundSchema: z.ZodType<
    UnifiedHrisPayrollrunOutput$Outbound,
    z.ZodTypeDef,
    UnifiedHrisPayrollrunOutput
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedHrisPayrollrunOutput$ {
    /** @deprecated use `UnifiedHrisPayrollrunOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedHrisPayrollrunOutput$inboundSchema;
    /** @deprecated use `UnifiedHrisPayrollrunOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedHrisPayrollrunOutput$outboundSchema;
    /** @deprecated use `UnifiedHrisPayrollrunOutput$Outbound` instead. */
    export type Outbound = UnifiedHrisPayrollrunOutput$Outbound;
}
