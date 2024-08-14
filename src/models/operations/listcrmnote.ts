/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListCrmNoteRequest = {
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

export type ListCrmNoteResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedCrmNoteOutput>;
};

export type ListCrmNoteResponse = {
    result: ListCrmNoteResponseBody;
};

/** @internal */
export const ListCrmNoteRequest$inboundSchema: z.ZodType<
    ListCrmNoteRequest,
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
export type ListCrmNoteRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListCrmNoteRequest$outboundSchema: z.ZodType<
    ListCrmNoteRequest$Outbound,
    z.ZodTypeDef,
    ListCrmNoteRequest
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
export namespace ListCrmNoteRequest$ {
    /** @deprecated use `ListCrmNoteRequest$inboundSchema` instead. */
    export const inboundSchema = ListCrmNoteRequest$inboundSchema;
    /** @deprecated use `ListCrmNoteRequest$outboundSchema` instead. */
    export const outboundSchema = ListCrmNoteRequest$outboundSchema;
    /** @deprecated use `ListCrmNoteRequest$Outbound` instead. */
    export type Outbound = ListCrmNoteRequest$Outbound;
}

/** @internal */
export const ListCrmNoteResponseBody$inboundSchema: z.ZodType<
    ListCrmNoteResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedCrmNoteOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListCrmNoteResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedCrmNoteOutput$Outbound>;
};

/** @internal */
export const ListCrmNoteResponseBody$outboundSchema: z.ZodType<
    ListCrmNoteResponseBody$Outbound,
    z.ZodTypeDef,
    ListCrmNoteResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedCrmNoteOutput$outboundSchema),
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
export namespace ListCrmNoteResponseBody$ {
    /** @deprecated use `ListCrmNoteResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListCrmNoteResponseBody$inboundSchema;
    /** @deprecated use `ListCrmNoteResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListCrmNoteResponseBody$outboundSchema;
    /** @deprecated use `ListCrmNoteResponseBody$Outbound` instead. */
    export type Outbound = ListCrmNoteResponseBody$Outbound;
}

/** @internal */
export const ListCrmNoteResponse$inboundSchema: z.ZodType<
    ListCrmNoteResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: z.lazy(() => ListCrmNoteResponseBody$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type ListCrmNoteResponse$Outbound = {
    Result: ListCrmNoteResponseBody$Outbound;
};

/** @internal */
export const ListCrmNoteResponse$outboundSchema: z.ZodType<
    ListCrmNoteResponse$Outbound,
    z.ZodTypeDef,
    ListCrmNoteResponse
> = z
    .object({
        result: z.lazy(() => ListCrmNoteResponseBody$outboundSchema),
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
export namespace ListCrmNoteResponse$ {
    /** @deprecated use `ListCrmNoteResponse$inboundSchema` instead. */
    export const inboundSchema = ListCrmNoteResponse$inboundSchema;
    /** @deprecated use `ListCrmNoteResponse$outboundSchema` instead. */
    export const outboundSchema = ListCrmNoteResponse$outboundSchema;
    /** @deprecated use `ListCrmNoteResponse$Outbound` instead. */
    export type Outbound = ListCrmNoteResponse$Outbound;
}
