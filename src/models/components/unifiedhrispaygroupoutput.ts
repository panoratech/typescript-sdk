/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedHrisPaygroupOutput = {};

/** @internal */
export const UnifiedHrisPaygroupOutput$inboundSchema: z.ZodType<
    UnifiedHrisPaygroupOutput,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedHrisPaygroupOutput$Outbound = {};

/** @internal */
export const UnifiedHrisPaygroupOutput$outboundSchema: z.ZodType<
    UnifiedHrisPaygroupOutput$Outbound,
    z.ZodTypeDef,
    UnifiedHrisPaygroupOutput
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedHrisPaygroupOutput$ {
    /** @deprecated use `UnifiedHrisPaygroupOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedHrisPaygroupOutput$inboundSchema;
    /** @deprecated use `UnifiedHrisPaygroupOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedHrisPaygroupOutput$outboundSchema;
    /** @deprecated use `UnifiedHrisPaygroupOutput$Outbound` instead. */
    export type Outbound = UnifiedHrisPaygroupOutput$Outbound;
}
