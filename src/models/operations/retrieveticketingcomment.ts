/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type RetrieveTicketingCommentRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the `comment` you want to retrive.
     */
    id: string;
    /**
     * Set to true to include data from the original Ticketing software.
     */
    remoteData?: boolean | undefined;
};

export type RetrieveTicketingCommentResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedTicketingCommentOutput>;
};

/** @internal */
export const RetrieveTicketingCommentRequest$inboundSchema: z.ZodType<
    RetrieveTicketingCommentRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        id: z.string(),
        remote_data: z.boolean().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
        });
    });

/** @internal */
export type RetrieveTicketingCommentRequest$Outbound = {
    "x-connection-token": string;
    id: string;
    remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveTicketingCommentRequest$outboundSchema: z.ZodType<
    RetrieveTicketingCommentRequest$Outbound,
    z.ZodTypeDef,
    RetrieveTicketingCommentRequest
> = z
    .object({
        xConnectionToken: z.string(),
        id: z.string(),
        remoteData: z.boolean().optional(),
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
export namespace RetrieveTicketingCommentRequest$ {
    /** @deprecated use `RetrieveTicketingCommentRequest$inboundSchema` instead. */
    export const inboundSchema = RetrieveTicketingCommentRequest$inboundSchema;
    /** @deprecated use `RetrieveTicketingCommentRequest$outboundSchema` instead. */
    export const outboundSchema = RetrieveTicketingCommentRequest$outboundSchema;
    /** @deprecated use `RetrieveTicketingCommentRequest$Outbound` instead. */
    export type Outbound = RetrieveTicketingCommentRequest$Outbound;
}

/** @internal */
export const RetrieveTicketingCommentResponseBody$inboundSchema: z.ZodType<
    RetrieveTicketingCommentResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedTicketingCommentOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type RetrieveTicketingCommentResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedTicketingCommentOutput$Outbound>;
};

/** @internal */
export const RetrieveTicketingCommentResponseBody$outboundSchema: z.ZodType<
    RetrieveTicketingCommentResponseBody$Outbound,
    z.ZodTypeDef,
    RetrieveTicketingCommentResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedTicketingCommentOutput$outboundSchema),
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
export namespace RetrieveTicketingCommentResponseBody$ {
    /** @deprecated use `RetrieveTicketingCommentResponseBody$inboundSchema` instead. */
    export const inboundSchema = RetrieveTicketingCommentResponseBody$inboundSchema;
    /** @deprecated use `RetrieveTicketingCommentResponseBody$outboundSchema` instead. */
    export const outboundSchema = RetrieveTicketingCommentResponseBody$outboundSchema;
    /** @deprecated use `RetrieveTicketingCommentResponseBody$Outbound` instead. */
    export type Outbound = RetrieveTicketingCommentResponseBody$Outbound;
}
