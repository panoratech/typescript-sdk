/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type Variant = {};

/** @internal */
export const Variant$inboundSchema: z.ZodType<Variant, z.ZodTypeDef, unknown> = z.object({});

/** @internal */
export type Variant$Outbound = {};

/** @internal */
export const Variant$outboundSchema: z.ZodType<Variant$Outbound, z.ZodTypeDef, Variant> = z.object(
    {}
);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Variant$ {
    /** @deprecated use `Variant$inboundSchema` instead. */
    export const inboundSchema = Variant$inboundSchema;
    /** @deprecated use `Variant$outboundSchema` instead. */
    export const outboundSchema = Variant$outboundSchema;
    /** @deprecated use `Variant$Outbound` instead. */
    export type Outbound = Variant$Outbound;
}