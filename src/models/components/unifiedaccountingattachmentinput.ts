/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedAccountingAttachmentInput = {};

/** @internal */
export namespace UnifiedAccountingAttachmentInput$ {
    export const inboundSchema: z.ZodType<UnifiedAccountingAttachmentInput, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedAccountingAttachmentInput
    > = z.object({});
}
