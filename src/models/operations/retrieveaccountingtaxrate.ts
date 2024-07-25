/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type RetrieveAccountingTaxRateRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the taxrate you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
};

export type RetrieveAccountingTaxRateResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedAccountingTaxrateOutput?: components.UnifiedAccountingTaxrateOutput | undefined;
};

/** @internal */
export namespace RetrieveAccountingTaxRateRequest$ {
    export const inboundSchema: z.ZodType<RetrieveAccountingTaxRateRequest, z.ZodTypeDef, unknown> =
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
        RetrieveAccountingTaxRateRequest
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
export namespace RetrieveAccountingTaxRateResponse$ {
    export const inboundSchema: z.ZodType<
        RetrieveAccountingTaxRateResponse,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            UnifiedAccountingTaxrateOutput:
                components.UnifiedAccountingTaxrateOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedAccountingTaxrateOutput: "unifiedAccountingTaxrateOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        UnifiedAccountingTaxrateOutput?:
            | components.UnifiedAccountingTaxrateOutput$.Outbound
            | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        RetrieveAccountingTaxRateResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            unifiedAccountingTaxrateOutput:
                components.UnifiedAccountingTaxrateOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedAccountingTaxrateOutput: "UnifiedAccountingTaxrateOutput",
            });
        });
}
