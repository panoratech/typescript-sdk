/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedHrisLocationOutput = {};

/** @internal */
export const UnifiedHrisLocationOutput$inboundSchema: z.ZodType<
    UnifiedHrisLocationOutput,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedHrisLocationOutput$Outbound = {};

/** @internal */
export const UnifiedHrisLocationOutput$outboundSchema: z.ZodType<
    UnifiedHrisLocationOutput$Outbound,
    z.ZodTypeDef,
    UnifiedHrisLocationOutput
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedHrisLocationOutput$ {
    /** @deprecated use `UnifiedHrisLocationOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedHrisLocationOutput$inboundSchema;
    /** @deprecated use `UnifiedHrisLocationOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedHrisLocationOutput$outboundSchema;
    /** @deprecated use `UnifiedHrisLocationOutput$Outbound` instead. */
    export type Outbound = UnifiedHrisLocationOutput$Outbound;
}
