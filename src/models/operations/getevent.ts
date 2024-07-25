/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type GetEventRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the event you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Marketingautomation software.
     */
    remoteData?: boolean | undefined;
};

export type GetEventResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedMarketingautomationEventOutput?:
        | components.UnifiedMarketingautomationEventOutput
        | undefined;
};

/** @internal */
export namespace GetEventRequest$ {
    export const inboundSchema: z.ZodType<GetEventRequest, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetEventRequest> = z
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
export namespace GetEventResponse$ {
    export const inboundSchema: z.ZodType<GetEventResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            UnifiedMarketingautomationEventOutput:
                components.UnifiedMarketingautomationEventOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedMarketingautomationEventOutput: "unifiedMarketingautomationEventOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        UnifiedMarketingautomationEventOutput?:
            | components.UnifiedMarketingautomationEventOutput$.Outbound
            | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetEventResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            unifiedMarketingautomationEventOutput:
                components.UnifiedMarketingautomationEventOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedMarketingautomationEventOutput: "UnifiedMarketingautomationEventOutput",
            });
        });
}
