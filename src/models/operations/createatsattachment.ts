/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type CreateAtsAttachmentRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Ats software.
     */
    remoteData?: boolean | undefined;
    unifiedAtsAttachmentInput: components.UnifiedAtsAttachmentInput;
};

/** @internal */
export const CreateAtsAttachmentRequest$inboundSchema: z.ZodType<
    CreateAtsAttachmentRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        remote_data: z.boolean().optional(),
        UnifiedAtsAttachmentInput: components.UnifiedAtsAttachmentInput$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
            UnifiedAtsAttachmentInput: "unifiedAtsAttachmentInput",
        });
    });

/** @internal */
export type CreateAtsAttachmentRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    UnifiedAtsAttachmentInput: components.UnifiedAtsAttachmentInput$Outbound;
};

/** @internal */
export const CreateAtsAttachmentRequest$outboundSchema: z.ZodType<
    CreateAtsAttachmentRequest$Outbound,
    z.ZodTypeDef,
    CreateAtsAttachmentRequest
> = z
    .object({
        xConnectionToken: z.string(),
        remoteData: z.boolean().optional(),
        unifiedAtsAttachmentInput: components.UnifiedAtsAttachmentInput$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xConnectionToken: "x-connection-token",
            remoteData: "remote_data",
            unifiedAtsAttachmentInput: "UnifiedAtsAttachmentInput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAtsAttachmentRequest$ {
    /** @deprecated use `CreateAtsAttachmentRequest$inboundSchema` instead. */
    export const inboundSchema = CreateAtsAttachmentRequest$inboundSchema;
    /** @deprecated use `CreateAtsAttachmentRequest$outboundSchema` instead. */
    export const outboundSchema = CreateAtsAttachmentRequest$outboundSchema;
    /** @deprecated use `CreateAtsAttachmentRequest$Outbound` instead. */
    export type Outbound = CreateAtsAttachmentRequest$Outbound;
}
