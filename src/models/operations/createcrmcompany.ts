/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type CreateCrmCompanyRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original CRM software.
     */
    remoteData?: boolean | undefined;
    unifiedCrmCompanyInput: components.UnifiedCrmCompanyInput;
};

/** @internal */
export const CreateCrmCompanyRequest$inboundSchema: z.ZodType<
    CreateCrmCompanyRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        remote_data: z.boolean().optional(),
        UnifiedCrmCompanyInput: components.UnifiedCrmCompanyInput$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
            UnifiedCrmCompanyInput: "unifiedCrmCompanyInput",
        });
    });

/** @internal */
export type CreateCrmCompanyRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    UnifiedCrmCompanyInput: components.UnifiedCrmCompanyInput$Outbound;
};

/** @internal */
export const CreateCrmCompanyRequest$outboundSchema: z.ZodType<
    CreateCrmCompanyRequest$Outbound,
    z.ZodTypeDef,
    CreateCrmCompanyRequest
> = z
    .object({
        xConnectionToken: z.string(),
        remoteData: z.boolean().optional(),
        unifiedCrmCompanyInput: components.UnifiedCrmCompanyInput$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xConnectionToken: "x-connection-token",
            remoteData: "remote_data",
            unifiedCrmCompanyInput: "UnifiedCrmCompanyInput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCrmCompanyRequest$ {
    /** @deprecated use `CreateCrmCompanyRequest$inboundSchema` instead. */
    export const inboundSchema = CreateCrmCompanyRequest$inboundSchema;
    /** @deprecated use `CreateCrmCompanyRequest$outboundSchema` instead. */
    export const outboundSchema = CreateCrmCompanyRequest$outboundSchema;
    /** @deprecated use `CreateCrmCompanyRequest$Outbound` instead. */
    export type Outbound = CreateCrmCompanyRequest$Outbound;
}
