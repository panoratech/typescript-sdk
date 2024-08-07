/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type VerifyEventResponseBody = {
    /**
     * Dynamic event payload
     */
    data?: { [k: string]: any } | undefined;
};

/** @internal */
export const VerifyEventResponseBody$inboundSchema: z.ZodType<
    VerifyEventResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: z.record(z.any()).optional(),
});

/** @internal */
export type VerifyEventResponseBody$Outbound = {
    data?: { [k: string]: any } | undefined;
};

/** @internal */
export const VerifyEventResponseBody$outboundSchema: z.ZodType<
    VerifyEventResponseBody$Outbound,
    z.ZodTypeDef,
    VerifyEventResponseBody
> = z.object({
    data: z.record(z.any()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VerifyEventResponseBody$ {
    /** @deprecated use `VerifyEventResponseBody$inboundSchema` instead. */
    export const inboundSchema = VerifyEventResponseBody$inboundSchema;
    /** @deprecated use `VerifyEventResponseBody$outboundSchema` instead. */
    export const outboundSchema = VerifyEventResponseBody$outboundSchema;
    /** @deprecated use `VerifyEventResponseBody$Outbound` instead. */
    export type Outbound = VerifyEventResponseBody$Outbound;
}
