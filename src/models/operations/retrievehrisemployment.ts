/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type RetrieveHrisEmploymentRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the employment you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Hris software.
     */
    remoteData?: boolean | undefined;
};

export type RetrieveHrisEmploymentResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedHrisEmploymentOutput?: components.UnifiedHrisEmploymentOutput | undefined;
};

/** @internal */
export namespace RetrieveHrisEmploymentRequest$ {
    export const inboundSchema: z.ZodType<RetrieveHrisEmploymentRequest, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RetrieveHrisEmploymentRequest> =
        z
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
export namespace RetrieveHrisEmploymentResponse$ {
    export const inboundSchema: z.ZodType<RetrieveHrisEmploymentResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            UnifiedHrisEmploymentOutput:
                components.UnifiedHrisEmploymentOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedHrisEmploymentOutput: "unifiedHrisEmploymentOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        UnifiedHrisEmploymentOutput?: components.UnifiedHrisEmploymentOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RetrieveHrisEmploymentResponse> =
        z
            .object({
                httpMeta: components.HTTPMetadata$.outboundSchema,
                unifiedHrisEmploymentOutput:
                    components.UnifiedHrisEmploymentOutput$.outboundSchema.optional(),
            })
            .transform((v) => {
                return remap$(v, {
                    httpMeta: "HttpMeta",
                    unifiedHrisEmploymentOutput: "UnifiedHrisEmploymentOutput",
                });
            });
}
