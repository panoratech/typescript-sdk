/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedAccountingVendorcreditOutput = {};

/** @internal */
export namespace UnifiedAccountingVendorcreditOutput$ {
    export const inboundSchema: z.ZodType<
        UnifiedAccountingVendorcreditOutput,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedAccountingVendorcreditOutput
    > = z.object({});
}
