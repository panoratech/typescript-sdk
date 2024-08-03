/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type CreateMarketingAutomationContactRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Marketingautomation software.
     */
    remoteData?: boolean | undefined;
    unifiedMarketingautomationContactInput: components.UnifiedMarketingautomationContactInput;
};

/** @internal */
export const CreateMarketingAutomationContactRequest$inboundSchema: z.ZodType<
    CreateMarketingAutomationContactRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        remote_data: z.boolean().optional(),
        UnifiedMarketingautomationContactInput:
            components.UnifiedMarketingautomationContactInput$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
            UnifiedMarketingautomationContactInput: "unifiedMarketingautomationContactInput",
        });
    });

/** @internal */
export type CreateMarketingAutomationContactRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    UnifiedMarketingautomationContactInput: components.UnifiedMarketingautomationContactInput$Outbound;
};

/** @internal */
export const CreateMarketingAutomationContactRequest$outboundSchema: z.ZodType<
    CreateMarketingAutomationContactRequest$Outbound,
    z.ZodTypeDef,
    CreateMarketingAutomationContactRequest
> = z
    .object({
        xConnectionToken: z.string(),
        remoteData: z.boolean().optional(),
        unifiedMarketingautomationContactInput:
            components.UnifiedMarketingautomationContactInput$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xConnectionToken: "x-connection-token",
            remoteData: "remote_data",
            unifiedMarketingautomationContactInput: "UnifiedMarketingautomationContactInput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateMarketingAutomationContactRequest$ {
    /** @deprecated use `CreateMarketingAutomationContactRequest$inboundSchema` instead. */
    export const inboundSchema = CreateMarketingAutomationContactRequest$inboundSchema;
    /** @deprecated use `CreateMarketingAutomationContactRequest$outboundSchema` instead. */
    export const outboundSchema = CreateMarketingAutomationContactRequest$outboundSchema;
    /** @deprecated use `CreateMarketingAutomationContactRequest$Outbound` instead. */
    export type Outbound = CreateMarketingAutomationContactRequest$Outbound;
}
