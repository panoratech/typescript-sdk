/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListAccountingCashflowStatementRequest = {
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

export type ListAccountingCashflowStatementResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedAccountingCashflowstatementOutput>;
};

export type ListAccountingCashflowStatementResponse = {
    httpMeta: components.HTTPMetadata;
    object?: ListAccountingCashflowStatementResponseBody | undefined;
};

/** @internal */
export const ListAccountingCashflowStatementRequest$inboundSchema: z.ZodType<
    ListAccountingCashflowStatementRequest,
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
export type ListAccountingCashflowStatementRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListAccountingCashflowStatementRequest$outboundSchema: z.ZodType<
    ListAccountingCashflowStatementRequest$Outbound,
    z.ZodTypeDef,
    ListAccountingCashflowStatementRequest
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
export namespace ListAccountingCashflowStatementRequest$ {
    /** @deprecated use `ListAccountingCashflowStatementRequest$inboundSchema` instead. */
    export const inboundSchema = ListAccountingCashflowStatementRequest$inboundSchema;
    /** @deprecated use `ListAccountingCashflowStatementRequest$outboundSchema` instead. */
    export const outboundSchema = ListAccountingCashflowStatementRequest$outboundSchema;
    /** @deprecated use `ListAccountingCashflowStatementRequest$Outbound` instead. */
    export type Outbound = ListAccountingCashflowStatementRequest$Outbound;
}

/** @internal */
export const ListAccountingCashflowStatementResponseBody$inboundSchema: z.ZodType<
    ListAccountingCashflowStatementResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedAccountingCashflowstatementOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListAccountingCashflowStatementResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedAccountingCashflowstatementOutput$Outbound>;
};

/** @internal */
export const ListAccountingCashflowStatementResponseBody$outboundSchema: z.ZodType<
    ListAccountingCashflowStatementResponseBody$Outbound,
    z.ZodTypeDef,
    ListAccountingCashflowStatementResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedAccountingCashflowstatementOutput$outboundSchema),
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
export namespace ListAccountingCashflowStatementResponseBody$ {
    /** @deprecated use `ListAccountingCashflowStatementResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListAccountingCashflowStatementResponseBody$inboundSchema;
    /** @deprecated use `ListAccountingCashflowStatementResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListAccountingCashflowStatementResponseBody$outboundSchema;
    /** @deprecated use `ListAccountingCashflowStatementResponseBody$Outbound` instead. */
    export type Outbound = ListAccountingCashflowStatementResponseBody$Outbound;
}

/** @internal */
export const ListAccountingCashflowStatementResponse$inboundSchema: z.ZodType<
    ListAccountingCashflowStatementResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        object: z.lazy(() => ListAccountingCashflowStatementResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
        });
    });

/** @internal */
export type ListAccountingCashflowStatementResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    object?: ListAccountingCashflowStatementResponseBody$Outbound | undefined;
};

/** @internal */
export const ListAccountingCashflowStatementResponse$outboundSchema: z.ZodType<
    ListAccountingCashflowStatementResponse$Outbound,
    z.ZodTypeDef,
    ListAccountingCashflowStatementResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        object: z.lazy(() => ListAccountingCashflowStatementResponseBody$outboundSchema).optional(),
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
export namespace ListAccountingCashflowStatementResponse$ {
    /** @deprecated use `ListAccountingCashflowStatementResponse$inboundSchema` instead. */
    export const inboundSchema = ListAccountingCashflowStatementResponse$inboundSchema;
    /** @deprecated use `ListAccountingCashflowStatementResponse$outboundSchema` instead. */
    export const outboundSchema = ListAccountingCashflowStatementResponse$outboundSchema;
    /** @deprecated use `ListAccountingCashflowStatementResponse$Outbound` instead. */
    export type Outbound = ListAccountingCashflowStatementResponse$Outbound;
}
