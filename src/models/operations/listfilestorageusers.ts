/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListFilestorageUsersRequest = {
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

export type ListFilestorageUsersResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedUserOutput>;
};

/** @internal */
export const ListFilestorageUsersRequest$inboundSchema: z.ZodType<
    ListFilestorageUsersRequest,
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
export type ListFilestorageUsersRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListFilestorageUsersRequest$outboundSchema: z.ZodType<
    ListFilestorageUsersRequest$Outbound,
    z.ZodTypeDef,
    ListFilestorageUsersRequest
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
export namespace ListFilestorageUsersRequest$ {
    /** @deprecated use `ListFilestorageUsersRequest$inboundSchema` instead. */
    export const inboundSchema = ListFilestorageUsersRequest$inboundSchema;
    /** @deprecated use `ListFilestorageUsersRequest$outboundSchema` instead. */
    export const outboundSchema = ListFilestorageUsersRequest$outboundSchema;
    /** @deprecated use `ListFilestorageUsersRequest$Outbound` instead. */
    export type Outbound = ListFilestorageUsersRequest$Outbound;
}

/** @internal */
export const ListFilestorageUsersResponseBody$inboundSchema: z.ZodType<
    ListFilestorageUsersResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedUserOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListFilestorageUsersResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedUserOutput$Outbound>;
};

/** @internal */
export const ListFilestorageUsersResponseBody$outboundSchema: z.ZodType<
    ListFilestorageUsersResponseBody$Outbound,
    z.ZodTypeDef,
    ListFilestorageUsersResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedUserOutput$outboundSchema),
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
export namespace ListFilestorageUsersResponseBody$ {
    /** @deprecated use `ListFilestorageUsersResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListFilestorageUsersResponseBody$inboundSchema;
    /** @deprecated use `ListFilestorageUsersResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListFilestorageUsersResponseBody$outboundSchema;
    /** @deprecated use `ListFilestorageUsersResponseBody$Outbound` instead. */
    export type Outbound = ListFilestorageUsersResponseBody$Outbound;
}
