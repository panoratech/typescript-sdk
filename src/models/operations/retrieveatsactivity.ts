/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type RetrieveAtsActivityRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the activity you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Ats software.
     */
    remoteData?: boolean | undefined;
};

export type RetrieveAtsActivityResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedAtsActivityOutput?: components.UnifiedAtsActivityOutput | undefined;
};

/** @internal */
export const RetrieveAtsActivityRequest$inboundSchema: z.ZodType<
    RetrieveAtsActivityRequest,
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
export type RetrieveAtsActivityRequest$Outbound = {
    "x-connection-token": string;
    id: string;
    remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveAtsActivityRequest$outboundSchema: z.ZodType<
    RetrieveAtsActivityRequest$Outbound,
    z.ZodTypeDef,
    RetrieveAtsActivityRequest
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
export namespace RetrieveAtsActivityRequest$ {
    /** @deprecated use `RetrieveAtsActivityRequest$inboundSchema` instead. */
    export const inboundSchema = RetrieveAtsActivityRequest$inboundSchema;
    /** @deprecated use `RetrieveAtsActivityRequest$outboundSchema` instead. */
    export const outboundSchema = RetrieveAtsActivityRequest$outboundSchema;
    /** @deprecated use `RetrieveAtsActivityRequest$Outbound` instead. */
    export type Outbound = RetrieveAtsActivityRequest$Outbound;
}

/** @internal */
export const RetrieveAtsActivityResponse$inboundSchema: z.ZodType<
    RetrieveAtsActivityResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        UnifiedAtsActivityOutput: components.UnifiedAtsActivityOutput$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            UnifiedAtsActivityOutput: "unifiedAtsActivityOutput",
        });
    });

/** @internal */
export type RetrieveAtsActivityResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    UnifiedAtsActivityOutput?: components.UnifiedAtsActivityOutput$Outbound | undefined;
};

/** @internal */
export const RetrieveAtsActivityResponse$outboundSchema: z.ZodType<
    RetrieveAtsActivityResponse$Outbound,
    z.ZodTypeDef,
    RetrieveAtsActivityResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        unifiedAtsActivityOutput: components.UnifiedAtsActivityOutput$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            unifiedAtsActivityOutput: "UnifiedAtsActivityOutput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveAtsActivityResponse$ {
    /** @deprecated use `RetrieveAtsActivityResponse$inboundSchema` instead. */
    export const inboundSchema = RetrieveAtsActivityResponse$inboundSchema;
    /** @deprecated use `RetrieveAtsActivityResponse$outboundSchema` instead. */
    export const outboundSchema = RetrieveAtsActivityResponse$outboundSchema;
    /** @deprecated use `RetrieveAtsActivityResponse$Outbound` instead. */
    export type Outbound = RetrieveAtsActivityResponse$Outbound;
}
