/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListCrmEngagementsRequest = {
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

export type ListCrmEngagementsResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedCrmEngagementOutput>;
};

export type ListCrmEngagementsResponse = {
    httpMeta: components.HTTPMetadata;
    object?: ListCrmEngagementsResponseBody | undefined;
};

/** @internal */
export const ListCrmEngagementsRequest$inboundSchema: z.ZodType<
    ListCrmEngagementsRequest,
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
export type ListCrmEngagementsRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListCrmEngagementsRequest$outboundSchema: z.ZodType<
    ListCrmEngagementsRequest$Outbound,
    z.ZodTypeDef,
    ListCrmEngagementsRequest
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
export namespace ListCrmEngagementsRequest$ {
    /** @deprecated use `ListCrmEngagementsRequest$inboundSchema` instead. */
    export const inboundSchema = ListCrmEngagementsRequest$inboundSchema;
    /** @deprecated use `ListCrmEngagementsRequest$outboundSchema` instead. */
    export const outboundSchema = ListCrmEngagementsRequest$outboundSchema;
    /** @deprecated use `ListCrmEngagementsRequest$Outbound` instead. */
    export type Outbound = ListCrmEngagementsRequest$Outbound;
}

/** @internal */
export const ListCrmEngagementsResponseBody$inboundSchema: z.ZodType<
    ListCrmEngagementsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedCrmEngagementOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListCrmEngagementsResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedCrmEngagementOutput$Outbound>;
};

/** @internal */
export const ListCrmEngagementsResponseBody$outboundSchema: z.ZodType<
    ListCrmEngagementsResponseBody$Outbound,
    z.ZodTypeDef,
    ListCrmEngagementsResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedCrmEngagementOutput$outboundSchema),
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
export namespace ListCrmEngagementsResponseBody$ {
    /** @deprecated use `ListCrmEngagementsResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListCrmEngagementsResponseBody$inboundSchema;
    /** @deprecated use `ListCrmEngagementsResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListCrmEngagementsResponseBody$outboundSchema;
    /** @deprecated use `ListCrmEngagementsResponseBody$Outbound` instead. */
    export type Outbound = ListCrmEngagementsResponseBody$Outbound;
}

/** @internal */
export const ListCrmEngagementsResponse$inboundSchema: z.ZodType<
    ListCrmEngagementsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        object: z.lazy(() => ListCrmEngagementsResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
        });
    });

/** @internal */
export type ListCrmEngagementsResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    object?: ListCrmEngagementsResponseBody$Outbound | undefined;
};

/** @internal */
export const ListCrmEngagementsResponse$outboundSchema: z.ZodType<
    ListCrmEngagementsResponse$Outbound,
    z.ZodTypeDef,
    ListCrmEngagementsResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        object: z.lazy(() => ListCrmEngagementsResponseBody$outboundSchema).optional(),
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
export namespace ListCrmEngagementsResponse$ {
    /** @deprecated use `ListCrmEngagementsResponse$inboundSchema` instead. */
    export const inboundSchema = ListCrmEngagementsResponse$inboundSchema;
    /** @deprecated use `ListCrmEngagementsResponse$outboundSchema` instead. */
    export const outboundSchema = ListCrmEngagementsResponse$outboundSchema;
    /** @deprecated use `ListCrmEngagementsResponse$Outbound` instead. */
    export type Outbound = ListCrmEngagementsResponse$Outbound;
}
