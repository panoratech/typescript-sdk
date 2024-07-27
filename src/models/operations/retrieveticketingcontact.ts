/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type RetrieveTicketingContactRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the contact you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Ticketing software.
     */
    remoteData?: boolean | undefined;
};

export type RetrieveTicketingContactResponseBody = {
    prevCursor: string;
    nextCursor: string;
    data: Array<components.UnifiedTicketingContactOutput>;
};

export type RetrieveTicketingContactResponse = {
    httpMeta: components.HTTPMetadata;
    object?: RetrieveTicketingContactResponseBody | undefined;
};

/** @internal */
export const RetrieveTicketingContactRequest$inboundSchema: z.ZodType<
    RetrieveTicketingContactRequest,
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
export type RetrieveTicketingContactRequest$Outbound = {
    "x-connection-token": string;
    id: string;
    remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveTicketingContactRequest$outboundSchema: z.ZodType<
    RetrieveTicketingContactRequest$Outbound,
    z.ZodTypeDef,
    RetrieveTicketingContactRequest
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
export namespace RetrieveTicketingContactRequest$ {
    /** @deprecated use `RetrieveTicketingContactRequest$inboundSchema` instead. */
    export const inboundSchema = RetrieveTicketingContactRequest$inboundSchema;
    /** @deprecated use `RetrieveTicketingContactRequest$outboundSchema` instead. */
    export const outboundSchema = RetrieveTicketingContactRequest$outboundSchema;
    /** @deprecated use `RetrieveTicketingContactRequest$Outbound` instead. */
    export type Outbound = RetrieveTicketingContactRequest$Outbound;
}

/** @internal */
export const RetrieveTicketingContactResponseBody$inboundSchema: z.ZodType<
    RetrieveTicketingContactResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.string(),
        next_cursor: z.string(),
        data: z.array(components.UnifiedTicketingContactOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type RetrieveTicketingContactResponseBody$Outbound = {
    prev_cursor: string;
    next_cursor: string;
    data: Array<components.UnifiedTicketingContactOutput$Outbound>;
};

/** @internal */
export const RetrieveTicketingContactResponseBody$outboundSchema: z.ZodType<
    RetrieveTicketingContactResponseBody$Outbound,
    z.ZodTypeDef,
    RetrieveTicketingContactResponseBody
> = z
    .object({
        prevCursor: z.string(),
        nextCursor: z.string(),
        data: z.array(components.UnifiedTicketingContactOutput$outboundSchema),
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
export namespace RetrieveTicketingContactResponseBody$ {
    /** @deprecated use `RetrieveTicketingContactResponseBody$inboundSchema` instead. */
    export const inboundSchema = RetrieveTicketingContactResponseBody$inboundSchema;
    /** @deprecated use `RetrieveTicketingContactResponseBody$outboundSchema` instead. */
    export const outboundSchema = RetrieveTicketingContactResponseBody$outboundSchema;
    /** @deprecated use `RetrieveTicketingContactResponseBody$Outbound` instead. */
    export type Outbound = RetrieveTicketingContactResponseBody$Outbound;
}

/** @internal */
export const RetrieveTicketingContactResponse$inboundSchema: z.ZodType<
    RetrieveTicketingContactResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        object: z.lazy(() => RetrieveTicketingContactResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
        });
    });

/** @internal */
export type RetrieveTicketingContactResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    object?: RetrieveTicketingContactResponseBody$Outbound | undefined;
};

/** @internal */
export const RetrieveTicketingContactResponse$outboundSchema: z.ZodType<
    RetrieveTicketingContactResponse$Outbound,
    z.ZodTypeDef,
    RetrieveTicketingContactResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        object: z.lazy(() => RetrieveTicketingContactResponseBody$outboundSchema).optional(),
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
export namespace RetrieveTicketingContactResponse$ {
    /** @deprecated use `RetrieveTicketingContactResponse$inboundSchema` instead. */
    export const inboundSchema = RetrieveTicketingContactResponse$inboundSchema;
    /** @deprecated use `RetrieveTicketingContactResponse$outboundSchema` instead. */
    export const outboundSchema = RetrieveTicketingContactResponse$outboundSchema;
    /** @deprecated use `RetrieveTicketingContactResponse$Outbound` instead. */
    export type Outbound = RetrieveTicketingContactResponse$Outbound;
}
