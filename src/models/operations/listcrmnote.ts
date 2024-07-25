/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
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
    prevCursor: string;
    nextCursor: string;
    data: Array<components.UnifiedCrmNoteOutput>;
};

export type ListCrmNoteResponse = {
    httpMeta: components.HTTPMetadata;
    object?: ListCrmNoteResponseBody | undefined;
};

/** @internal */
export namespace ListCrmNoteRequest$ {
    export const inboundSchema: z.ZodType<ListCrmNoteRequest, z.ZodTypeDef, unknown> = z
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

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
        limit: number;
        cursor?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListCrmNoteRequest> = z
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
}

/** @internal */
export namespace ListCrmNoteResponseBody$ {
    export const inboundSchema: z.ZodType<ListCrmNoteResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            prev_cursor: z.string(),
            next_cursor: z.string(),
            data: z.array(components.UnifiedCrmNoteOutput$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                prev_cursor: "prevCursor",
                next_cursor: "nextCursor",
            });
        });

    export type Outbound = {
        prev_cursor: string;
        next_cursor: string;
        data: Array<components.UnifiedCrmNoteOutput$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListCrmNoteResponseBody> = z
        .object({
            prevCursor: z.string(),
            nextCursor: z.string(),
            data: z.array(components.UnifiedCrmNoteOutput$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                prevCursor: "prev_cursor",
                nextCursor: "next_cursor",
            });
        });
}

/** @internal */
export namespace ListCrmNoteResponse$ {
    export const inboundSchema: z.ZodType<ListCrmNoteResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => ListCrmNoteResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: ListCrmNoteResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListCrmNoteResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => ListCrmNoteResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
            });
        });
}
