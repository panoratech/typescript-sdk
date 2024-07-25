/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type RetrieveTicketingAttachmentRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the attachment you want to retrive.
     */
    id: string;
    /**
     * Set to true to include data from the original Ticketing software.
     */
    remoteData?: boolean | undefined;
};

export type RetrieveTicketingAttachmentResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedTicketingAttachmentOutput?: components.UnifiedTicketingAttachmentOutput | undefined;
};

/** @internal */
export namespace RetrieveTicketingAttachmentRequest$ {
    export const inboundSchema: z.ZodType<
        RetrieveTicketingAttachmentRequest,
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

    export type Outbound = {
        "x-connection-token": string;
        id: string;
        remote_data?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        RetrieveTicketingAttachmentRequest
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
export namespace RetrieveTicketingAttachmentResponse$ {
    export const inboundSchema: z.ZodType<
        RetrieveTicketingAttachmentResponse,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            UnifiedTicketingAttachmentOutput:
                components.UnifiedTicketingAttachmentOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedTicketingAttachmentOutput: "unifiedTicketingAttachmentOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        UnifiedTicketingAttachmentOutput?:
            | components.UnifiedTicketingAttachmentOutput$.Outbound
            | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        RetrieveTicketingAttachmentResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            unifiedTicketingAttachmentOutput:
                components.UnifiedTicketingAttachmentOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedTicketingAttachmentOutput: "UnifiedTicketingAttachmentOutput",
            });
        });
}
