/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedHrisEmployeeInput = {};

/** @internal */
export const UnifiedHrisEmployeeInput$inboundSchema: z.ZodType<
    UnifiedHrisEmployeeInput,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedHrisEmployeeInput$Outbound = {};

/** @internal */
export const UnifiedHrisEmployeeInput$outboundSchema: z.ZodType<
    UnifiedHrisEmployeeInput$Outbound,
    z.ZodTypeDef,
    UnifiedHrisEmployeeInput
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedHrisEmployeeInput$ {
    /** @deprecated use `UnifiedHrisEmployeeInput$inboundSchema` instead. */
    export const inboundSchema = UnifiedHrisEmployeeInput$inboundSchema;
    /** @deprecated use `UnifiedHrisEmployeeInput$outboundSchema` instead. */
    export const outboundSchema = UnifiedHrisEmployeeInput$outboundSchema;
    /** @deprecated use `UnifiedHrisEmployeeInput$Outbound` instead. */
    export type Outbound = UnifiedHrisEmployeeInput$Outbound;
}
