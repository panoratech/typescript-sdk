/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type RetrieveMarketingautomationAutomationRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the automation you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Marketingautomation software.
     */
    remoteData?: boolean | undefined;
};

export type RetrieveMarketingautomationAutomationResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedMarketingautomationAutomationOutput?:
        | components.UnifiedMarketingautomationAutomationOutput
        | undefined;
};

/** @internal */
export namespace RetrieveMarketingautomationAutomationRequest$ {
    export const inboundSchema: z.ZodType<
        RetrieveMarketingautomationAutomationRequest,
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
        RetrieveMarketingautomationAutomationRequest
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
export namespace RetrieveMarketingautomationAutomationResponse$ {
    export const inboundSchema: z.ZodType<
        RetrieveMarketingautomationAutomationResponse,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            UnifiedMarketingautomationAutomationOutput:
                components.UnifiedMarketingautomationAutomationOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedMarketingautomationAutomationOutput:
                    "unifiedMarketingautomationAutomationOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        UnifiedMarketingautomationAutomationOutput?:
            | components.UnifiedMarketingautomationAutomationOutput$.Outbound
            | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        RetrieveMarketingautomationAutomationResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            unifiedMarketingautomationAutomationOutput:
                components.UnifiedMarketingautomationAutomationOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedMarketingautomationAutomationOutput:
                    "UnifiedMarketingautomationAutomationOutput",
            });
        });
}
