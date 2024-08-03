/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type CreateCrmEngagementRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Crm software.
     */
    remoteData?: boolean | undefined;
    unifiedCrmEngagementInput: components.UnifiedCrmEngagementInput;
};

/** @internal */
export const CreateCrmEngagementRequest$inboundSchema: z.ZodType<
    CreateCrmEngagementRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        remote_data: z.boolean().optional(),
        UnifiedCrmEngagementInput: components.UnifiedCrmEngagementInput$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
            UnifiedCrmEngagementInput: "unifiedCrmEngagementInput",
        });
    });

/** @internal */
export type CreateCrmEngagementRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    UnifiedCrmEngagementInput: components.UnifiedCrmEngagementInput$Outbound;
};

/** @internal */
export const CreateCrmEngagementRequest$outboundSchema: z.ZodType<
    CreateCrmEngagementRequest$Outbound,
    z.ZodTypeDef,
    CreateCrmEngagementRequest
> = z
    .object({
        xConnectionToken: z.string(),
        remoteData: z.boolean().optional(),
        unifiedCrmEngagementInput: components.UnifiedCrmEngagementInput$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xConnectionToken: "x-connection-token",
            remoteData: "remote_data",
            unifiedCrmEngagementInput: "UnifiedCrmEngagementInput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCrmEngagementRequest$ {
    /** @deprecated use `CreateCrmEngagementRequest$inboundSchema` instead. */
    export const inboundSchema = CreateCrmEngagementRequest$inboundSchema;
    /** @deprecated use `CreateCrmEngagementRequest$outboundSchema` instead. */
    export const outboundSchema = CreateCrmEngagementRequest$outboundSchema;
    /** @deprecated use `CreateCrmEngagementRequest$Outbound` instead. */
    export type Outbound = CreateCrmEngagementRequest$Outbound;
}
