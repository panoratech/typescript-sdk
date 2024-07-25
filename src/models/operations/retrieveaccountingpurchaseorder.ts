/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type RetrieveAccountingPurchaseOrderRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the purchaseorder you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
};

export type RetrieveAccountingPurchaseOrderResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedAccountingPurchaseorderOutput?:
        | components.UnifiedAccountingPurchaseorderOutput
        | undefined;
};

/** @internal */
export namespace RetrieveAccountingPurchaseOrderRequest$ {
    export const inboundSchema: z.ZodType<
        RetrieveAccountingPurchaseOrderRequest,
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
        RetrieveAccountingPurchaseOrderRequest
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
export namespace RetrieveAccountingPurchaseOrderResponse$ {
    export const inboundSchema: z.ZodType<
        RetrieveAccountingPurchaseOrderResponse,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            UnifiedAccountingPurchaseorderOutput:
                components.UnifiedAccountingPurchaseorderOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedAccountingPurchaseorderOutput: "unifiedAccountingPurchaseorderOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        UnifiedAccountingPurchaseorderOutput?:
            | components.UnifiedAccountingPurchaseorderOutput$.Outbound
            | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        RetrieveAccountingPurchaseOrderResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            unifiedAccountingPurchaseorderOutput:
                components.UnifiedAccountingPurchaseorderOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedAccountingPurchaseorderOutput: "UnifiedAccountingPurchaseorderOutput",
            });
        });
}
