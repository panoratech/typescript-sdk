/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListAccountingExpenseRequest = {
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

export type ListAccountingExpenseResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedAccountingExpenseOutput>;
};

export type ListAccountingExpenseResponse = {
    httpMeta: components.HTTPMetadata;
    object?: ListAccountingExpenseResponseBody | undefined;
};

/** @internal */
export const ListAccountingExpenseRequest$inboundSchema: z.ZodType<
    ListAccountingExpenseRequest,
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
export type ListAccountingExpenseRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListAccountingExpenseRequest$outboundSchema: z.ZodType<
    ListAccountingExpenseRequest$Outbound,
    z.ZodTypeDef,
    ListAccountingExpenseRequest
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
export namespace ListAccountingExpenseRequest$ {
    /** @deprecated use `ListAccountingExpenseRequest$inboundSchema` instead. */
    export const inboundSchema = ListAccountingExpenseRequest$inboundSchema;
    /** @deprecated use `ListAccountingExpenseRequest$outboundSchema` instead. */
    export const outboundSchema = ListAccountingExpenseRequest$outboundSchema;
    /** @deprecated use `ListAccountingExpenseRequest$Outbound` instead. */
    export type Outbound = ListAccountingExpenseRequest$Outbound;
}

/** @internal */
export const ListAccountingExpenseResponseBody$inboundSchema: z.ZodType<
    ListAccountingExpenseResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedAccountingExpenseOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListAccountingExpenseResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedAccountingExpenseOutput$Outbound>;
};

/** @internal */
export const ListAccountingExpenseResponseBody$outboundSchema: z.ZodType<
    ListAccountingExpenseResponseBody$Outbound,
    z.ZodTypeDef,
    ListAccountingExpenseResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedAccountingExpenseOutput$outboundSchema),
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
export namespace ListAccountingExpenseResponseBody$ {
    /** @deprecated use `ListAccountingExpenseResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListAccountingExpenseResponseBody$inboundSchema;
    /** @deprecated use `ListAccountingExpenseResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListAccountingExpenseResponseBody$outboundSchema;
    /** @deprecated use `ListAccountingExpenseResponseBody$Outbound` instead. */
    export type Outbound = ListAccountingExpenseResponseBody$Outbound;
}

/** @internal */
export const ListAccountingExpenseResponse$inboundSchema: z.ZodType<
    ListAccountingExpenseResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        object: z.lazy(() => ListAccountingExpenseResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
        });
    });

/** @internal */
export type ListAccountingExpenseResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    object?: ListAccountingExpenseResponseBody$Outbound | undefined;
};

/** @internal */
export const ListAccountingExpenseResponse$outboundSchema: z.ZodType<
    ListAccountingExpenseResponse$Outbound,
    z.ZodTypeDef,
    ListAccountingExpenseResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        object: z.lazy(() => ListAccountingExpenseResponseBody$outboundSchema).optional(),
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
export namespace ListAccountingExpenseResponse$ {
    /** @deprecated use `ListAccountingExpenseResponse$inboundSchema` instead. */
    export const inboundSchema = ListAccountingExpenseResponse$inboundSchema;
    /** @deprecated use `ListAccountingExpenseResponse$outboundSchema` instead. */
    export const outboundSchema = ListAccountingExpenseResponse$outboundSchema;
    /** @deprecated use `ListAccountingExpenseResponse$Outbound` instead. */
    export type Outbound = ListAccountingExpenseResponse$Outbound;
}
