/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListHrisEmployeePayrollRunRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original software.
     */
    remoteData?: boolean | undefined;
    /**
     * Set to get the number of records.
     */
    limit?: number | undefined;
    /**
     * Set to get the number of records after this cursor.
     */
    cursor?: string | undefined;
};

export type ListHrisEmployeePayrollRunResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedHrisEmployeepayrollrunOutput>;
};

export type ListHrisEmployeePayrollRunResponse = {
    result: ListHrisEmployeePayrollRunResponseBody;
};

/** @internal */
export const ListHrisEmployeePayrollRunRequest$inboundSchema: z.ZodType<
    ListHrisEmployeePayrollRunRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        remote_data: z.boolean().optional(),
        limit: z.number().optional(),
        cursor: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
        });
    });

/** @internal */
export type ListHrisEmployeePayrollRunRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit?: number | undefined;
    cursor?: string | undefined;
};

/** @internal */
export const ListHrisEmployeePayrollRunRequest$outboundSchema: z.ZodType<
    ListHrisEmployeePayrollRunRequest$Outbound,
    z.ZodTypeDef,
    ListHrisEmployeePayrollRunRequest
> = z
    .object({
        xConnectionToken: z.string(),
        remoteData: z.boolean().optional(),
        limit: z.number().optional(),
        cursor: z.string().optional(),
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
export namespace ListHrisEmployeePayrollRunRequest$ {
    /** @deprecated use `ListHrisEmployeePayrollRunRequest$inboundSchema` instead. */
    export const inboundSchema = ListHrisEmployeePayrollRunRequest$inboundSchema;
    /** @deprecated use `ListHrisEmployeePayrollRunRequest$outboundSchema` instead. */
    export const outboundSchema = ListHrisEmployeePayrollRunRequest$outboundSchema;
    /** @deprecated use `ListHrisEmployeePayrollRunRequest$Outbound` instead. */
    export type Outbound = ListHrisEmployeePayrollRunRequest$Outbound;
}

/** @internal */
export const ListHrisEmployeePayrollRunResponseBody$inboundSchema: z.ZodType<
    ListHrisEmployeePayrollRunResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedHrisEmployeepayrollrunOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListHrisEmployeePayrollRunResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedHrisEmployeepayrollrunOutput$Outbound>;
};

/** @internal */
export const ListHrisEmployeePayrollRunResponseBody$outboundSchema: z.ZodType<
    ListHrisEmployeePayrollRunResponseBody$Outbound,
    z.ZodTypeDef,
    ListHrisEmployeePayrollRunResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedHrisEmployeepayrollrunOutput$outboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prevCursor: "prev_cursor",
            nextCursor: "next_cursor",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListHrisEmployeePayrollRunResponseBody$ {
    /** @deprecated use `ListHrisEmployeePayrollRunResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListHrisEmployeePayrollRunResponseBody$inboundSchema;
    /** @deprecated use `ListHrisEmployeePayrollRunResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListHrisEmployeePayrollRunResponseBody$outboundSchema;
    /** @deprecated use `ListHrisEmployeePayrollRunResponseBody$Outbound` instead. */
    export type Outbound = ListHrisEmployeePayrollRunResponseBody$Outbound;
}

/** @internal */
export const ListHrisEmployeePayrollRunResponse$inboundSchema: z.ZodType<
    ListHrisEmployeePayrollRunResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: z.lazy(() => ListHrisEmployeePayrollRunResponseBody$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type ListHrisEmployeePayrollRunResponse$Outbound = {
    Result: ListHrisEmployeePayrollRunResponseBody$Outbound;
};

/** @internal */
export const ListHrisEmployeePayrollRunResponse$outboundSchema: z.ZodType<
    ListHrisEmployeePayrollRunResponse$Outbound,
    z.ZodTypeDef,
    ListHrisEmployeePayrollRunResponse
> = z
    .object({
        result: z.lazy(() => ListHrisEmployeePayrollRunResponseBody$outboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            result: "Result",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListHrisEmployeePayrollRunResponse$ {
    /** @deprecated use `ListHrisEmployeePayrollRunResponse$inboundSchema` instead. */
    export const inboundSchema = ListHrisEmployeePayrollRunResponse$inboundSchema;
    /** @deprecated use `ListHrisEmployeePayrollRunResponse$outboundSchema` instead. */
    export const outboundSchema = ListHrisEmployeePayrollRunResponse$outboundSchema;
    /** @deprecated use `ListHrisEmployeePayrollRunResponse$Outbound` instead. */
    export type Outbound = ListHrisEmployeePayrollRunResponse$Outbound;
}
