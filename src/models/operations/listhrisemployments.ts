/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListHrisEmploymentsRequest = {
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

export type ListHrisEmploymentsResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedHrisEmploymentOutput>;
};

export type ListHrisEmploymentsResponse = {
    result: ListHrisEmploymentsResponseBody;
};

/** @internal */
export const ListHrisEmploymentsRequest$inboundSchema: z.ZodType<
    ListHrisEmploymentsRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        remote_data: z.boolean().optional(),
        limit: z.number().default(30),
        cursor: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
        });
    });

/** @internal */
export type ListHrisEmploymentsRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListHrisEmploymentsRequest$outboundSchema: z.ZodType<
    ListHrisEmploymentsRequest$Outbound,
    z.ZodTypeDef,
    ListHrisEmploymentsRequest
> = z
    .object({
        xConnectionToken: z.string(),
        remoteData: z.boolean().optional(),
        limit: z.number().default(30),
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
export namespace ListHrisEmploymentsRequest$ {
    /** @deprecated use `ListHrisEmploymentsRequest$inboundSchema` instead. */
    export const inboundSchema = ListHrisEmploymentsRequest$inboundSchema;
    /** @deprecated use `ListHrisEmploymentsRequest$outboundSchema` instead. */
    export const outboundSchema = ListHrisEmploymentsRequest$outboundSchema;
    /** @deprecated use `ListHrisEmploymentsRequest$Outbound` instead. */
    export type Outbound = ListHrisEmploymentsRequest$Outbound;
}

/** @internal */
export const ListHrisEmploymentsResponseBody$inboundSchema: z.ZodType<
    ListHrisEmploymentsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedHrisEmploymentOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListHrisEmploymentsResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedHrisEmploymentOutput$Outbound>;
};

/** @internal */
export const ListHrisEmploymentsResponseBody$outboundSchema: z.ZodType<
    ListHrisEmploymentsResponseBody$Outbound,
    z.ZodTypeDef,
    ListHrisEmploymentsResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedHrisEmploymentOutput$outboundSchema),
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
export namespace ListHrisEmploymentsResponseBody$ {
    /** @deprecated use `ListHrisEmploymentsResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListHrisEmploymentsResponseBody$inboundSchema;
    /** @deprecated use `ListHrisEmploymentsResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListHrisEmploymentsResponseBody$outboundSchema;
    /** @deprecated use `ListHrisEmploymentsResponseBody$Outbound` instead. */
    export type Outbound = ListHrisEmploymentsResponseBody$Outbound;
}

/** @internal */
export const ListHrisEmploymentsResponse$inboundSchema: z.ZodType<
    ListHrisEmploymentsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: z.lazy(() => ListHrisEmploymentsResponseBody$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type ListHrisEmploymentsResponse$Outbound = {
    Result: ListHrisEmploymentsResponseBody$Outbound;
};

/** @internal */
export const ListHrisEmploymentsResponse$outboundSchema: z.ZodType<
    ListHrisEmploymentsResponse$Outbound,
    z.ZodTypeDef,
    ListHrisEmploymentsResponse
> = z
    .object({
        result: z.lazy(() => ListHrisEmploymentsResponseBody$outboundSchema),
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
export namespace ListHrisEmploymentsResponse$ {
    /** @deprecated use `ListHrisEmploymentsResponse$inboundSchema` instead. */
    export const inboundSchema = ListHrisEmploymentsResponse$inboundSchema;
    /** @deprecated use `ListHrisEmploymentsResponse$outboundSchema` instead. */
    export const outboundSchema = ListHrisEmploymentsResponse$outboundSchema;
    /** @deprecated use `ListHrisEmploymentsResponse$Outbound` instead. */
    export type Outbound = ListHrisEmploymentsResponse$Outbound;
}
