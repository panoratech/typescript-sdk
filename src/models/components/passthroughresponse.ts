/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type PassThroughResponseData = {};

export type PassThroughResponse = {
    url: string;
    status: number;
    data: PassThroughResponseData;
};

/** @internal */
export namespace PassThroughResponseData$ {
    export const inboundSchema: z.ZodType<PassThroughResponseData, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PassThroughResponseData> =
        z.object({});
}

/** @internal */
export namespace PassThroughResponse$ {
    export const inboundSchema: z.ZodType<PassThroughResponse, z.ZodTypeDef, unknown> = z.object({
        url: z.string(),
        status: z.number(),
        data: z.lazy(() => PassThroughResponseData$.inboundSchema),
    });

    export type Outbound = {
        url: string;
        status: number;
        data: PassThroughResponseData$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PassThroughResponse> = z.object({
        url: z.string(),
        status: z.number(),
        data: z.lazy(() => PassThroughResponseData$.outboundSchema),
    });
}
