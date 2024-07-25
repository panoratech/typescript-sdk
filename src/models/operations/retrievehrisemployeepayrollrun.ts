/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
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
export const RetrieveHrisEmployeePayrollRunRequest$inboundSchema: z.ZodType<
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

/** @internal */
export type RetrieveHrisEmployeePayrollRunRequest$Outbound = {
    "x-connection-token": string;
    id: string;
    remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveHrisEmployeePayrollRunRequest$outboundSchema: z.ZodType<
    RetrieveHrisEmployeePayrollRunRequest$Outbound,
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

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveHrisEmployeePayrollRunRequest$ {
    /** @deprecated use `RetrieveHrisEmployeePayrollRunRequest$inboundSchema` instead. */
    export const inboundSchema = RetrieveHrisEmployeePayrollRunRequest$inboundSchema;
    /** @deprecated use `RetrieveHrisEmployeePayrollRunRequest$outboundSchema` instead. */
    export const outboundSchema = RetrieveHrisEmployeePayrollRunRequest$outboundSchema;
    /** @deprecated use `RetrieveHrisEmployeePayrollRunRequest$Outbound` instead. */
    export type Outbound = RetrieveHrisEmployeePayrollRunRequest$Outbound;
}

/** @internal */
export const RetrieveHrisEmployeePayrollRunResponse$inboundSchema: z.ZodType<
    RetrieveHrisEmployeePayrollRunResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        UnifiedHrisEmployeepayrollrunOutput:
            components.UnifiedHrisEmployeepayrollrunOutput$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            UnifiedHrisEmployeepayrollrunOutput: "unifiedHrisEmployeepayrollrunOutput",
        });
    });

/** @internal */
export type RetrieveHrisEmployeePayrollRunResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    UnifiedHrisEmployeepayrollrunOutput?:
        | components.UnifiedHrisEmployeepayrollrunOutput$Outbound
        | undefined;
};

/** @internal */
export const RetrieveHrisEmployeePayrollRunResponse$outboundSchema: z.ZodType<
    RetrieveHrisEmployeePayrollRunResponse$Outbound,
    z.ZodTypeDef,
    RetrieveHrisEmployeePayrollRunResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        unifiedHrisEmployeepayrollrunOutput:
            components.UnifiedHrisEmployeepayrollrunOutput$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            unifiedHrisEmployeepayrollrunOutput: "UnifiedHrisEmployeepayrollrunOutput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveHrisEmployeePayrollRunResponse$ {
    /** @deprecated use `RetrieveHrisEmployeePayrollRunResponse$inboundSchema` instead. */
    export const inboundSchema = RetrieveHrisEmployeePayrollRunResponse$inboundSchema;
    /** @deprecated use `RetrieveHrisEmployeePayrollRunResponse$outboundSchema` instead. */
    export const outboundSchema = RetrieveHrisEmployeePayrollRunResponse$outboundSchema;
    /** @deprecated use `RetrieveHrisEmployeePayrollRunResponse$Outbound` instead. */
    export type Outbound = RetrieveHrisEmployeePayrollRunResponse$Outbound;
}
