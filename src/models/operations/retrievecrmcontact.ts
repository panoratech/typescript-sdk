/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type RetrieveCrmContactRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the `contact` you want to retrive.
     */
    id: string;
    /**
     * Set to true to include data from the original CRM software.
     */
    remoteData?: boolean | undefined;
};

export type RetrieveCrmContactResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedCrmContactOutput?: components.UnifiedCrmContactOutput | undefined;
};

/** @internal */
export const RetrieveCrmContactRequest$inboundSchema: z.ZodType<
    RetrieveCrmContactRequest,
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
export type RetrieveCrmContactRequest$Outbound = {
    "x-connection-token": string;
    id: string;
    remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveCrmContactRequest$outboundSchema: z.ZodType<
    RetrieveCrmContactRequest$Outbound,
    z.ZodTypeDef,
    RetrieveCrmContactRequest
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
export namespace RetrieveCrmContactRequest$ {
    /** @deprecated use `RetrieveCrmContactRequest$inboundSchema` instead. */
    export const inboundSchema = RetrieveCrmContactRequest$inboundSchema;
    /** @deprecated use `RetrieveCrmContactRequest$outboundSchema` instead. */
    export const outboundSchema = RetrieveCrmContactRequest$outboundSchema;
    /** @deprecated use `RetrieveCrmContactRequest$Outbound` instead. */
    export type Outbound = RetrieveCrmContactRequest$Outbound;
}

/** @internal */
export const RetrieveCrmContactResponse$inboundSchema: z.ZodType<
    RetrieveCrmContactResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        UnifiedCrmContactOutput: components.UnifiedCrmContactOutput$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            UnifiedCrmContactOutput: "unifiedCrmContactOutput",
        });
    });

/** @internal */
export type RetrieveCrmContactResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    UnifiedCrmContactOutput?: components.UnifiedCrmContactOutput$Outbound | undefined;
};

/** @internal */
export const RetrieveCrmContactResponse$outboundSchema: z.ZodType<
    RetrieveCrmContactResponse$Outbound,
    z.ZodTypeDef,
    RetrieveCrmContactResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        unifiedCrmContactOutput: components.UnifiedCrmContactOutput$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            unifiedCrmContactOutput: "UnifiedCrmContactOutput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveCrmContactResponse$ {
    /** @deprecated use `RetrieveCrmContactResponse$inboundSchema` instead. */
    export const inboundSchema = RetrieveCrmContactResponse$inboundSchema;
    /** @deprecated use `RetrieveCrmContactResponse$outboundSchema` instead. */
    export const outboundSchema = RetrieveCrmContactResponse$outboundSchema;
    /** @deprecated use `RetrieveCrmContactResponse$Outbound` instead. */
    export type Outbound = RetrieveCrmContactResponse$Outbound;
}
