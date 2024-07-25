/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type RetrieveAccountingContactRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the contact you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
};

export type RetrieveAccountingContactResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedAccountingContactOutput?: components.UnifiedAccountingContactOutput | undefined;
};

/** @internal */
export const RetrieveAccountingContactRequest$inboundSchema: z.ZodType<
    RetrieveAccountingContactRequest,
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
export type RetrieveAccountingContactRequest$Outbound = {
    "x-connection-token": string;
    id: string;
    remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveAccountingContactRequest$outboundSchema: z.ZodType<
    RetrieveAccountingContactRequest$Outbound,
    z.ZodTypeDef,
    RetrieveAccountingContactRequest
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
export namespace RetrieveAccountingContactRequest$ {
    /** @deprecated use `RetrieveAccountingContactRequest$inboundSchema` instead. */
    export const inboundSchema = RetrieveAccountingContactRequest$inboundSchema;
    /** @deprecated use `RetrieveAccountingContactRequest$outboundSchema` instead. */
    export const outboundSchema = RetrieveAccountingContactRequest$outboundSchema;
    /** @deprecated use `RetrieveAccountingContactRequest$Outbound` instead. */
    export type Outbound = RetrieveAccountingContactRequest$Outbound;
}

/** @internal */
export const RetrieveAccountingContactResponse$inboundSchema: z.ZodType<
    RetrieveAccountingContactResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        UnifiedAccountingContactOutput:
            components.UnifiedAccountingContactOutput$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            UnifiedAccountingContactOutput: "unifiedAccountingContactOutput",
        });
    });

/** @internal */
export type RetrieveAccountingContactResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    UnifiedAccountingContactOutput?: components.UnifiedAccountingContactOutput$Outbound | undefined;
};

/** @internal */
export const RetrieveAccountingContactResponse$outboundSchema: z.ZodType<
    RetrieveAccountingContactResponse$Outbound,
    z.ZodTypeDef,
    RetrieveAccountingContactResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        unifiedAccountingContactOutput:
            components.UnifiedAccountingContactOutput$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            unifiedAccountingContactOutput: "UnifiedAccountingContactOutput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveAccountingContactResponse$ {
    /** @deprecated use `RetrieveAccountingContactResponse$inboundSchema` instead. */
    export const inboundSchema = RetrieveAccountingContactResponse$inboundSchema;
    /** @deprecated use `RetrieveAccountingContactResponse$outboundSchema` instead. */
    export const outboundSchema = RetrieveAccountingContactResponse$outboundSchema;
    /** @deprecated use `RetrieveAccountingContactResponse$Outbound` instead. */
    export type Outbound = RetrieveAccountingContactResponse$Outbound;
}
