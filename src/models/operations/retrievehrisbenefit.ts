/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type RetrieveHrisBenefitRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the benefit you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Hris software.
     */
    remoteData?: boolean | undefined;
};

/** @internal */
export const RetrieveHrisBenefitRequest$inboundSchema: z.ZodType<
    RetrieveHrisBenefitRequest,
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
export type RetrieveHrisBenefitRequest$Outbound = {
    "x-connection-token": string;
    id: string;
    remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveHrisBenefitRequest$outboundSchema: z.ZodType<
    RetrieveHrisBenefitRequest$Outbound,
    z.ZodTypeDef,
    RetrieveHrisBenefitRequest
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
export namespace RetrieveHrisBenefitRequest$ {
    /** @deprecated use `RetrieveHrisBenefitRequest$inboundSchema` instead. */
    export const inboundSchema = RetrieveHrisBenefitRequest$inboundSchema;
    /** @deprecated use `RetrieveHrisBenefitRequest$outboundSchema` instead. */
    export const outboundSchema = RetrieveHrisBenefitRequest$outboundSchema;
    /** @deprecated use `RetrieveHrisBenefitRequest$Outbound` instead. */
    export type Outbound = RetrieveHrisBenefitRequest$Outbound;
}
