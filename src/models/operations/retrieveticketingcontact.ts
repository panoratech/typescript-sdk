/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
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
export namespace RetrieveTicketingContactRequest$ {
    export const inboundSchema: z.ZodType<RetrieveTicketingContactRequest, z.ZodTypeDef, unknown> =
        z
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

    export type Outbound = {
        "x-connection-token": string;
        id: string;
        remote_data?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
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
}

/** @internal */
export namespace RetrieveTicketingContactResponseBody$ {
    export const inboundSchema: z.ZodType<
        RetrieveTicketingContactResponseBody,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            prev_cursor: z.string(),
            next_cursor: z.string(),
            data: z.array(components.UnifiedTicketingContactOutput$.inboundSchema),
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
        data: Array<components.UnifiedTicketingContactOutput$.Outbound>;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        RetrieveTicketingContactResponseBody
    > = z
        .object({
            prevCursor: z.string(),
            nextCursor: z.string(),
            data: z.array(components.UnifiedTicketingContactOutput$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                prevCursor: "prev_cursor",
                nextCursor: "next_cursor",
            });
        });
}

/** @internal */
export namespace RetrieveTicketingContactResponse$ {
    export const inboundSchema: z.ZodType<RetrieveTicketingContactResponse, z.ZodTypeDef, unknown> =
        z
            .object({
                HttpMeta: components.HTTPMetadata$.inboundSchema,
                object: z
                    .lazy(() => RetrieveTicketingContactResponseBody$.inboundSchema)
                    .optional(),
            })
            .transform((v) => {
                return remap$(v, {
                    HttpMeta: "httpMeta",
                });
            });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: RetrieveTicketingContactResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        RetrieveTicketingContactResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => RetrieveTicketingContactResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
            });
        });
}
