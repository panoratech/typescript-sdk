/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type RetrieveCrmDealRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the deal you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Crm software.
     */
    remoteData?: boolean | undefined;
};

export type RetrieveCrmDealResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedCrmDealOutput?: components.UnifiedCrmDealOutput | undefined;
};

/** @internal */
export const RetrieveCrmDealRequest$inboundSchema: z.ZodType<
    RetrieveCrmDealRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        id: z.string(),
        remote_data: z.boolean().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
        });
    });

/** @internal */
export type RetrieveCrmDealRequest$Outbound = {
    "x-connection-token": string;
    id: string;
    remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveCrmDealRequest$outboundSchema: z.ZodType<
    RetrieveCrmDealRequest$Outbound,
    z.ZodTypeDef,
    RetrieveCrmDealRequest
> = z
    .object({
        xConnectionToken: z.string(),
        id: z.string(),
        remoteData: z.boolean().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            xConnectionToken: "x-connection-token",
            remoteData: "remote_data",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveCrmDealRequest$ {
    /** @deprecated use `RetrieveCrmDealRequest$inboundSchema` instead. */
    export const inboundSchema = RetrieveCrmDealRequest$inboundSchema;
    /** @deprecated use `RetrieveCrmDealRequest$outboundSchema` instead. */
    export const outboundSchema = RetrieveCrmDealRequest$outboundSchema;
    /** @deprecated use `RetrieveCrmDealRequest$Outbound` instead. */
    export type Outbound = RetrieveCrmDealRequest$Outbound;
}

/** @internal */
export const RetrieveCrmDealResponse$inboundSchema: z.ZodType<
    RetrieveCrmDealResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        UnifiedCrmDealOutput: components.UnifiedCrmDealOutput$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            UnifiedCrmDealOutput: "unifiedCrmDealOutput",
        });
    });

/** @internal */
export type RetrieveCrmDealResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    UnifiedCrmDealOutput?: components.UnifiedCrmDealOutput$Outbound | undefined;
};

/** @internal */
export const RetrieveCrmDealResponse$outboundSchema: z.ZodType<
    RetrieveCrmDealResponse$Outbound,
    z.ZodTypeDef,
    RetrieveCrmDealResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        unifiedCrmDealOutput: components.UnifiedCrmDealOutput$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            unifiedCrmDealOutput: "UnifiedCrmDealOutput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveCrmDealResponse$ {
    /** @deprecated use `RetrieveCrmDealResponse$inboundSchema` instead. */
    export const inboundSchema = RetrieveCrmDealResponse$inboundSchema;
    /** @deprecated use `RetrieveCrmDealResponse$outboundSchema` instead. */
    export const outboundSchema = RetrieveCrmDealResponse$outboundSchema;
    /** @deprecated use `RetrieveCrmDealResponse$Outbound` instead. */
    export type Outbound = RetrieveCrmDealResponse$Outbound;
}
