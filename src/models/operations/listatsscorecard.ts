/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListAtsScorecardRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original software.
     */
    remoteData?: boolean | undefined;
    /**
     * Set to get the number of records.
     */
    limit?: number | undefined;
    /**
     * Set to get the number of records after this cursor.
     */
    cursor?: string | undefined;
};

export type ListAtsScorecardResponseBody = {
    prevCursor: string;
    nextCursor: string;
    data: Array<components.UnifiedAtsScorecardOutput>;
};

export type ListAtsScorecardResponse = {
    httpMeta: components.HTTPMetadata;
    object?: ListAtsScorecardResponseBody | undefined;
};

/** @internal */
export const ListAtsScorecardRequest$inboundSchema: z.ZodType<
    ListAtsScorecardRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        remote_data: z.boolean().optional(),
        limit: z.number().default(50),
        cursor: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
        });
    });

/** @internal */
export type ListAtsScorecardRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListAtsScorecardRequest$outboundSchema: z.ZodType<
    ListAtsScorecardRequest$Outbound,
    z.ZodTypeDef,
    ListAtsScorecardRequest
> = z
    .object({
        xConnectionToken: z.string(),
        remoteData: z.boolean().optional(),
        limit: z.number().default(50),
        cursor: z.string().optional(),
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
export namespace ListAtsScorecardRequest$ {
    /** @deprecated use `ListAtsScorecardRequest$inboundSchema` instead. */
    export const inboundSchema = ListAtsScorecardRequest$inboundSchema;
    /** @deprecated use `ListAtsScorecardRequest$outboundSchema` instead. */
    export const outboundSchema = ListAtsScorecardRequest$outboundSchema;
    /** @deprecated use `ListAtsScorecardRequest$Outbound` instead. */
    export type Outbound = ListAtsScorecardRequest$Outbound;
}

/** @internal */
export const ListAtsScorecardResponseBody$inboundSchema: z.ZodType<
    ListAtsScorecardResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.string(),
        next_cursor: z.string(),
        data: z.array(components.UnifiedAtsScorecardOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListAtsScorecardResponseBody$Outbound = {
    prev_cursor: string;
    next_cursor: string;
    data: Array<components.UnifiedAtsScorecardOutput$Outbound>;
};

/** @internal */
export const ListAtsScorecardResponseBody$outboundSchema: z.ZodType<
    ListAtsScorecardResponseBody$Outbound,
    z.ZodTypeDef,
    ListAtsScorecardResponseBody
> = z
    .object({
        prevCursor: z.string(),
        nextCursor: z.string(),
        data: z.array(components.UnifiedAtsScorecardOutput$outboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prevCursor: "prev_cursor",
            nextCursor: "next_cursor",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAtsScorecardResponseBody$ {
    /** @deprecated use `ListAtsScorecardResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListAtsScorecardResponseBody$inboundSchema;
    /** @deprecated use `ListAtsScorecardResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListAtsScorecardResponseBody$outboundSchema;
    /** @deprecated use `ListAtsScorecardResponseBody$Outbound` instead. */
    export type Outbound = ListAtsScorecardResponseBody$Outbound;
}

/** @internal */
export const ListAtsScorecardResponse$inboundSchema: z.ZodType<
    ListAtsScorecardResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        object: z.lazy(() => ListAtsScorecardResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
        });
    });

/** @internal */
export type ListAtsScorecardResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    object?: ListAtsScorecardResponseBody$Outbound | undefined;
};

/** @internal */
export const ListAtsScorecardResponse$outboundSchema: z.ZodType<
    ListAtsScorecardResponse$Outbound,
    z.ZodTypeDef,
    ListAtsScorecardResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        object: z.lazy(() => ListAtsScorecardResponseBody$outboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAtsScorecardResponse$ {
    /** @deprecated use `ListAtsScorecardResponse$inboundSchema` instead. */
    export const inboundSchema = ListAtsScorecardResponse$inboundSchema;
    /** @deprecated use `ListAtsScorecardResponse$outboundSchema` instead. */
    export const outboundSchema = ListAtsScorecardResponse$outboundSchema;
    /** @deprecated use `ListAtsScorecardResponse$Outbound` instead. */
    export type Outbound = ListAtsScorecardResponse$Outbound;
}
