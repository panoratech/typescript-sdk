/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedAccountingInvoiceInput = {};

/** @internal */
export namespace UnifiedAccountingInvoiceInput$ {
    export const inboundSchema: z.ZodType<UnifiedAccountingInvoiceInput, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedAccountingInvoiceInput> =
        z.object({});
}
