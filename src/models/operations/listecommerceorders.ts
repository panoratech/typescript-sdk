/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListEcommerceOrdersRequest = {
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

export type ListEcommerceOrdersResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedEcommerceOrderOutput>;
};

export type ListEcommerceOrdersResponse = {
    result: ListEcommerceOrdersResponseBody;
};

/** @internal */
export const ListEcommerceOrdersRequest$inboundSchema: z.ZodType<
    ListEcommerceOrdersRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        remote_data: z.boolean().optional(),
        limit: z.number().optional(),
        cursor: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
        });
    });

/** @internal */
export type ListEcommerceOrdersRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit?: number | undefined;
    cursor?: string | undefined;
};

/** @internal */
export const ListEcommerceOrdersRequest$outboundSchema: z.ZodType<
    ListEcommerceOrdersRequest$Outbound,
    z.ZodTypeDef,
    ListEcommerceOrdersRequest
> = z
    .object({
        xConnectionToken: z.string(),
        remoteData: z.boolean().optional(),
        limit: z.number().optional(),
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
export namespace ListEcommerceOrdersRequest$ {
    /** @deprecated use `ListEcommerceOrdersRequest$inboundSchema` instead. */
    export const inboundSchema = ListEcommerceOrdersRequest$inboundSchema;
    /** @deprecated use `ListEcommerceOrdersRequest$outboundSchema` instead. */
    export const outboundSchema = ListEcommerceOrdersRequest$outboundSchema;
    /** @deprecated use `ListEcommerceOrdersRequest$Outbound` instead. */
    export type Outbound = ListEcommerceOrdersRequest$Outbound;
}

/** @internal */
export const ListEcommerceOrdersResponseBody$inboundSchema: z.ZodType<
    ListEcommerceOrdersResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedEcommerceOrderOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListEcommerceOrdersResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedEcommerceOrderOutput$Outbound>;
};

/** @internal */
export const ListEcommerceOrdersResponseBody$outboundSchema: z.ZodType<
    ListEcommerceOrdersResponseBody$Outbound,
    z.ZodTypeDef,
    ListEcommerceOrdersResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedEcommerceOrderOutput$outboundSchema),
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
export namespace ListEcommerceOrdersResponseBody$ {
    /** @deprecated use `ListEcommerceOrdersResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListEcommerceOrdersResponseBody$inboundSchema;
    /** @deprecated use `ListEcommerceOrdersResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListEcommerceOrdersResponseBody$outboundSchema;
    /** @deprecated use `ListEcommerceOrdersResponseBody$Outbound` instead. */
    export type Outbound = ListEcommerceOrdersResponseBody$Outbound;
}

/** @internal */
export const ListEcommerceOrdersResponse$inboundSchema: z.ZodType<
    ListEcommerceOrdersResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: z.lazy(() => ListEcommerceOrdersResponseBody$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type ListEcommerceOrdersResponse$Outbound = {
    Result: ListEcommerceOrdersResponseBody$Outbound;
};

/** @internal */
export const ListEcommerceOrdersResponse$outboundSchema: z.ZodType<
    ListEcommerceOrdersResponse$Outbound,
    z.ZodTypeDef,
    ListEcommerceOrdersResponse
> = z
    .object({
        result: z.lazy(() => ListEcommerceOrdersResponseBody$outboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            result: "Result",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListEcommerceOrdersResponse$ {
    /** @deprecated use `ListEcommerceOrdersResponse$inboundSchema` instead. */
    export const inboundSchema = ListEcommerceOrdersResponse$inboundSchema;
    /** @deprecated use `ListEcommerceOrdersResponse$outboundSchema` instead. */
    export const outboundSchema = ListEcommerceOrdersResponse$outboundSchema;
    /** @deprecated use `ListEcommerceOrdersResponse$Outbound` instead. */
    export type Outbound = ListEcommerceOrdersResponse$Outbound;
}
