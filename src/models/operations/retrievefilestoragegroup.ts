/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type RetrieveFilestorageGroupRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the permission you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original File Storage software.
     */
    remoteData?: boolean | undefined;
};

export type RetrieveFilestorageGroupResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedFilestorageGroupOutput?: components.UnifiedFilestorageGroupOutput | undefined;
};

/** @internal */
export namespace RetrieveFilestorageGroupRequest$ {
    export const inboundSchema: z.ZodType<RetrieveFilestorageGroupRequest, z.ZodTypeDef, unknown> =
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
        RetrieveFilestorageGroupRequest
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
export namespace RetrieveFilestorageGroupResponse$ {
    export const inboundSchema: z.ZodType<RetrieveFilestorageGroupResponse, z.ZodTypeDef, unknown> =
        z
            .object({
                HttpMeta: components.HTTPMetadata$.inboundSchema,
                UnifiedFilestorageGroupOutput:
                    components.UnifiedFilestorageGroupOutput$.inboundSchema.optional(),
            })
            .transform((v) => {
                return remap$(v, {
                    HttpMeta: "httpMeta",
                    UnifiedFilestorageGroupOutput: "unifiedFilestorageGroupOutput",
                });
            });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        UnifiedFilestorageGroupOutput?:
            | components.UnifiedFilestorageGroupOutput$.Outbound
            | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        RetrieveFilestorageGroupResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            unifiedFilestorageGroupOutput:
                components.UnifiedFilestorageGroupOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedFilestorageGroupOutput: "UnifiedFilestorageGroupOutput",
            });
        });
}
