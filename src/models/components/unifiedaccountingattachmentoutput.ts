/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedAccountingAttachmentOutput = {};

/** @internal */
export namespace UnifiedAccountingAttachmentOutput$ {
    export const inboundSchema: z.ZodType<
        UnifiedAccountingAttachmentOutput,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedAccountingAttachmentOutput
    > = z.object({});
}
