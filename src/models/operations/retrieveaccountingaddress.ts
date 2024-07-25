/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type RetrieveAccountingAddressRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the address you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
};

export type RetrieveAccountingAddressResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedAccountingAddressOutput?: components.UnifiedAccountingAddressOutput | undefined;
};

/** @internal */
export namespace RetrieveAccountingAddressRequest$ {
    export const inboundSchema: z.ZodType<RetrieveAccountingAddressRequest, z.ZodTypeDef, unknown> =
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
        RetrieveAccountingAddressRequest
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
export namespace RetrieveAccountingAddressResponse$ {
    export const inboundSchema: z.ZodType<
        RetrieveAccountingAddressResponse,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            UnifiedAccountingAddressOutput:
                components.UnifiedAccountingAddressOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedAccountingAddressOutput: "unifiedAccountingAddressOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        UnifiedAccountingAddressOutput?:
            | components.UnifiedAccountingAddressOutput$.Outbound
            | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        RetrieveAccountingAddressResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            unifiedAccountingAddressOutput:
                components.UnifiedAccountingAddressOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedAccountingAddressOutput: "UnifiedAccountingAddressOutput",
            });
        });
}
