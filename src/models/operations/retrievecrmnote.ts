/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type RetrieveCrmNoteRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the note you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Crm software.
     */
    remoteData?: boolean | undefined;
};

export type RetrieveCrmNoteResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedCrmNoteOutput?: components.UnifiedCrmNoteOutput | undefined;
};

/** @internal */
export namespace RetrieveCrmNoteRequest$ {
    export const inboundSchema: z.ZodType<RetrieveCrmNoteRequest, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RetrieveCrmNoteRequest> = z
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
export namespace RetrieveCrmNoteResponse$ {
    export const inboundSchema: z.ZodType<RetrieveCrmNoteResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            UnifiedCrmNoteOutput: components.UnifiedCrmNoteOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedCrmNoteOutput: "unifiedCrmNoteOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        UnifiedCrmNoteOutput?: components.UnifiedCrmNoteOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RetrieveCrmNoteResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            unifiedCrmNoteOutput: components.UnifiedCrmNoteOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedCrmNoteOutput: "UnifiedCrmNoteOutput",
            });
        });
}
