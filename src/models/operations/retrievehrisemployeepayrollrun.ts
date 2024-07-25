/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type RetrieveHrisEmployeePayrollRunRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the employeepayrollrun you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Hris software.
     */
    remoteData?: boolean | undefined;
};

export type RetrieveHrisEmployeePayrollRunResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedHrisEmployeepayrollrunOutput?:
        | components.UnifiedHrisEmployeepayrollrunOutput
        | undefined;
};

/** @internal */
export namespace RetrieveHrisEmployeePayrollRunRequest$ {
    export const inboundSchema: z.ZodType<
        RetrieveHrisEmployeePayrollRunRequest,
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
        RetrieveHrisEmployeePayrollRunRequest
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
export namespace RetrieveHrisEmployeePayrollRunResponse$ {
    export const inboundSchema: z.ZodType<
        RetrieveHrisEmployeePayrollRunResponse,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            UnifiedHrisEmployeepayrollrunOutput:
                components.UnifiedHrisEmployeepayrollrunOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedHrisEmployeepayrollrunOutput: "unifiedHrisEmployeepayrollrunOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        UnifiedHrisEmployeepayrollrunOutput?:
            | components.UnifiedHrisEmployeepayrollrunOutput$.Outbound
            | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        RetrieveHrisEmployeePayrollRunResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            unifiedHrisEmployeepayrollrunOutput:
                components.UnifiedHrisEmployeepayrollrunOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedHrisEmployeepayrollrunOutput: "UnifiedHrisEmployeepayrollrunOutput",
            });
        });
}
