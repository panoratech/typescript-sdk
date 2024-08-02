/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListAccountingJournalEntryRequest = {
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

export type ListAccountingJournalEntryResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedAccountingJournalentryOutput>;
};

export type ListAccountingJournalEntryResponse = {
    httpMeta: components.HTTPMetadata;
    object?: ListAccountingJournalEntryResponseBody | undefined;
};

/** @internal */
export const ListAccountingJournalEntryRequest$inboundSchema: z.ZodType<
    ListAccountingJournalEntryRequest,
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
export type ListAccountingJournalEntryRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListAccountingJournalEntryRequest$outboundSchema: z.ZodType<
    ListAccountingJournalEntryRequest$Outbound,
    z.ZodTypeDef,
    ListAccountingJournalEntryRequest
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
export namespace ListAccountingJournalEntryRequest$ {
    /** @deprecated use `ListAccountingJournalEntryRequest$inboundSchema` instead. */
    export const inboundSchema = ListAccountingJournalEntryRequest$inboundSchema;
    /** @deprecated use `ListAccountingJournalEntryRequest$outboundSchema` instead. */
    export const outboundSchema = ListAccountingJournalEntryRequest$outboundSchema;
    /** @deprecated use `ListAccountingJournalEntryRequest$Outbound` instead. */
    export type Outbound = ListAccountingJournalEntryRequest$Outbound;
}

/** @internal */
export const ListAccountingJournalEntryResponseBody$inboundSchema: z.ZodType<
    ListAccountingJournalEntryResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedAccountingJournalentryOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListAccountingJournalEntryResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedAccountingJournalentryOutput$Outbound>;
};

/** @internal */
export const ListAccountingJournalEntryResponseBody$outboundSchema: z.ZodType<
    ListAccountingJournalEntryResponseBody$Outbound,
    z.ZodTypeDef,
    ListAccountingJournalEntryResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedAccountingJournalentryOutput$outboundSchema),
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
export namespace ListAccountingJournalEntryResponseBody$ {
    /** @deprecated use `ListAccountingJournalEntryResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListAccountingJournalEntryResponseBody$inboundSchema;
    /** @deprecated use `ListAccountingJournalEntryResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListAccountingJournalEntryResponseBody$outboundSchema;
    /** @deprecated use `ListAccountingJournalEntryResponseBody$Outbound` instead. */
    export type Outbound = ListAccountingJournalEntryResponseBody$Outbound;
}

/** @internal */
export const ListAccountingJournalEntryResponse$inboundSchema: z.ZodType<
    ListAccountingJournalEntryResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        object: z.lazy(() => ListAccountingJournalEntryResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
        });
    });

/** @internal */
export type ListAccountingJournalEntryResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    object?: ListAccountingJournalEntryResponseBody$Outbound | undefined;
};

/** @internal */
export const ListAccountingJournalEntryResponse$outboundSchema: z.ZodType<
    ListAccountingJournalEntryResponse$Outbound,
    z.ZodTypeDef,
    ListAccountingJournalEntryResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        object: z.lazy(() => ListAccountingJournalEntryResponseBody$outboundSchema).optional(),
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
export namespace ListAccountingJournalEntryResponse$ {
    /** @deprecated use `ListAccountingJournalEntryResponse$inboundSchema` instead. */
    export const inboundSchema = ListAccountingJournalEntryResponse$inboundSchema;
    /** @deprecated use `ListAccountingJournalEntryResponse$outboundSchema` instead. */
    export const outboundSchema = ListAccountingJournalEntryResponse$outboundSchema;
    /** @deprecated use `ListAccountingJournalEntryResponse$Outbound` instead. */
    export type Outbound = ListAccountingJournalEntryResponse$Outbound;
}
