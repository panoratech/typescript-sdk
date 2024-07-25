/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedHrisTimeoffOutput = {};

/** @internal */
export const UnifiedHrisTimeoffOutput$inboundSchema: z.ZodType<
    UnifiedHrisTimeoffOutput,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedHrisTimeoffOutput$Outbound = {};

/** @internal */
export const UnifiedHrisTimeoffOutput$outboundSchema: z.ZodType<
    UnifiedHrisTimeoffOutput$Outbound,
    z.ZodTypeDef,
    UnifiedHrisTimeoffOutput
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedHrisTimeoffOutput$ {
    /** @deprecated use `UnifiedHrisTimeoffOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedHrisTimeoffOutput$inboundSchema;
    /** @deprecated use `UnifiedHrisTimeoffOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedHrisTimeoffOutput$outboundSchema;
    /** @deprecated use `UnifiedHrisTimeoffOutput$Outbound` instead. */
    export type Outbound = UnifiedHrisTimeoffOutput$Outbound;
}
