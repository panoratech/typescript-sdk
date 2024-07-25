/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type RetrieveHrisEmployeeRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the employee you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Hris software.
     */
    remoteData?: boolean | undefined;
};

export type RetrieveHrisEmployeeResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedHrisEmployeeOutput?: components.UnifiedHrisEmployeeOutput | undefined;
};

/** @internal */
export const RetrieveHrisEmployeeRequest$inboundSchema: z.ZodType<
    RetrieveHrisEmployeeRequest,
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
export type RetrieveHrisEmployeeRequest$Outbound = {
    "x-connection-token": string;
    id: string;
    remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveHrisEmployeeRequest$outboundSchema: z.ZodType<
    RetrieveHrisEmployeeRequest$Outbound,
    z.ZodTypeDef,
    RetrieveHrisEmployeeRequest
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
export namespace RetrieveHrisEmployeeRequest$ {
    /** @deprecated use `RetrieveHrisEmployeeRequest$inboundSchema` instead. */
    export const inboundSchema = RetrieveHrisEmployeeRequest$inboundSchema;
    /** @deprecated use `RetrieveHrisEmployeeRequest$outboundSchema` instead. */
    export const outboundSchema = RetrieveHrisEmployeeRequest$outboundSchema;
    /** @deprecated use `RetrieveHrisEmployeeRequest$Outbound` instead. */
    export type Outbound = RetrieveHrisEmployeeRequest$Outbound;
}

/** @internal */
export const RetrieveHrisEmployeeResponse$inboundSchema: z.ZodType<
    RetrieveHrisEmployeeResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        UnifiedHrisEmployeeOutput: components.UnifiedHrisEmployeeOutput$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            UnifiedHrisEmployeeOutput: "unifiedHrisEmployeeOutput",
        });
    });

/** @internal */
export type RetrieveHrisEmployeeResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    UnifiedHrisEmployeeOutput?: components.UnifiedHrisEmployeeOutput$Outbound | undefined;
};

/** @internal */
export const RetrieveHrisEmployeeResponse$outboundSchema: z.ZodType<
    RetrieveHrisEmployeeResponse$Outbound,
    z.ZodTypeDef,
    RetrieveHrisEmployeeResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        unifiedHrisEmployeeOutput: components.UnifiedHrisEmployeeOutput$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            unifiedHrisEmployeeOutput: "UnifiedHrisEmployeeOutput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveHrisEmployeeResponse$ {
    /** @deprecated use `RetrieveHrisEmployeeResponse$inboundSchema` instead. */
    export const inboundSchema = RetrieveHrisEmployeeResponse$inboundSchema;
    /** @deprecated use `RetrieveHrisEmployeeResponse$outboundSchema` instead. */
    export const outboundSchema = RetrieveHrisEmployeeResponse$outboundSchema;
    /** @deprecated use `RetrieveHrisEmployeeResponse$Outbound` instead. */
    export type Outbound = RetrieveHrisEmployeeResponse$Outbound;
}
