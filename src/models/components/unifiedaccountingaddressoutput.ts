/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedAccountingAddressOutput = {};

/** @internal */
export namespace UnifiedAccountingAddressOutput$ {
    export const inboundSchema: z.ZodType<UnifiedAccountingAddressOutput, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedAccountingAddressOutput> =
        z.object({});
}
