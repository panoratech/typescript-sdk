/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type RetrieveHrisTimeoffbalanceRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the timeoffbalance you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Hris software.
     */
    remoteData?: boolean | undefined;
};

export type RetrieveHrisTimeoffbalanceResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedHrisTimeoffbalanceOutput?: components.UnifiedHrisTimeoffbalanceOutput | undefined;
};

/** @internal */
export namespace RetrieveHrisTimeoffbalanceRequest$ {
    export const inboundSchema: z.ZodType<
        RetrieveHrisTimeoffbalanceRequest,
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
        RetrieveHrisTimeoffbalanceRequest
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
export namespace RetrieveHrisTimeoffbalanceResponse$ {
    export const inboundSchema: z.ZodType<
        RetrieveHrisTimeoffbalanceResponse,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            UnifiedHrisTimeoffbalanceOutput:
                components.UnifiedHrisTimeoffbalanceOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedHrisTimeoffbalanceOutput: "unifiedHrisTimeoffbalanceOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        UnifiedHrisTimeoffbalanceOutput?:
            | components.UnifiedHrisTimeoffbalanceOutput$.Outbound
            | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        RetrieveHrisTimeoffbalanceResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            unifiedHrisTimeoffbalanceOutput:
                components.UnifiedHrisTimeoffbalanceOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedHrisTimeoffbalanceOutput: "UnifiedHrisTimeoffbalanceOutput",
            });
        });
}
