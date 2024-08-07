/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

/**
 * The direction of the engagement. Authorized values are INBOUND or OUTBOUND
 */
export enum UnifiedCrmEngagementInputDirection {
    Inbound = "INBOUND",
    Outbound = "OUTBOUND",
}

/**
 * The type of the engagement. Authorized values are EMAIL, CALL or MEETING
 */
export enum UnifiedCrmEngagementInputType {
    Email = "EMAIL",
    Call = "CALL",
    Meeting = "MEETING",
}

export type UnifiedCrmEngagementInput = {
    /**
     * The content of the engagement
     */
    content?: string | null | undefined;
    /**
     * The direction of the engagement. Authorized values are INBOUND or OUTBOUND
     */
    direction?: UnifiedCrmEngagementInputDirection | null | undefined;
    /**
     * The subject of the engagement
     */
    subject?: string | null | undefined;
    /**
     * The start time of the engagement
     */
    startAt?: Date | null | undefined;
    /**
     * The end time of the engagement
     */
    endTime?: Date | null | undefined;
    /**
     * The type of the engagement. Authorized values are EMAIL, CALL or MEETING
     */
    type: UnifiedCrmEngagementInputType | null;
    /**
     * The UUID of the user tied to the engagement
     */
    userId?: string | null | undefined;
    /**
     * The UUID of the company tied to the engagement
     */
    companyId?: string | null | undefined;
    /**
     * The UUIDs of contacts tied to the engagement object
     */
    contacts?: Array<string> | null | undefined;
    /**
     * The custom field mappings of the engagement between the remote 3rd party & Panora
     */
    fieldMappings?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const UnifiedCrmEngagementInputDirection$inboundSchema: z.ZodNativeEnum<
    typeof UnifiedCrmEngagementInputDirection
> = z.nativeEnum(UnifiedCrmEngagementInputDirection);

/** @internal */
export const UnifiedCrmEngagementInputDirection$outboundSchema: z.ZodNativeEnum<
    typeof UnifiedCrmEngagementInputDirection
> = UnifiedCrmEngagementInputDirection$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedCrmEngagementInputDirection$ {
    /** @deprecated use `UnifiedCrmEngagementInputDirection$inboundSchema` instead. */
    export const inboundSchema = UnifiedCrmEngagementInputDirection$inboundSchema;
    /** @deprecated use `UnifiedCrmEngagementInputDirection$outboundSchema` instead. */
    export const outboundSchema = UnifiedCrmEngagementInputDirection$outboundSchema;
}

/** @internal */
export const UnifiedCrmEngagementInputType$inboundSchema: z.ZodNativeEnum<
    typeof UnifiedCrmEngagementInputType
> = z.nativeEnum(UnifiedCrmEngagementInputType);

/** @internal */
export const UnifiedCrmEngagementInputType$outboundSchema: z.ZodNativeEnum<
    typeof UnifiedCrmEngagementInputType
> = UnifiedCrmEngagementInputType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedCrmEngagementInputType$ {
    /** @deprecated use `UnifiedCrmEngagementInputType$inboundSchema` instead. */
    export const inboundSchema = UnifiedCrmEngagementInputType$inboundSchema;
    /** @deprecated use `UnifiedCrmEngagementInputType$outboundSchema` instead. */
    export const outboundSchema = UnifiedCrmEngagementInputType$outboundSchema;
}

/** @internal */
export const UnifiedCrmEngagementInput$inboundSchema: z.ZodType<
    UnifiedCrmEngagementInput,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        content: z.nullable(z.string()).optional(),
        direction: z.nullable(UnifiedCrmEngagementInputDirection$inboundSchema).optional(),
        subject: z.nullable(z.string()).optional(),
        start_at: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        end_time: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        type: z.nullable(UnifiedCrmEngagementInputType$inboundSchema),
        user_id: z.nullable(z.string()).optional(),
        company_id: z.nullable(z.string()).optional(),
        contacts: z.nullable(z.array(z.string())).optional(),
        field_mappings: z.nullable(z.record(z.any())).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            start_at: "startAt",
            end_time: "endTime",
            user_id: "userId",
            company_id: "companyId",
            field_mappings: "fieldMappings",
        });
    });

/** @internal */
export type UnifiedCrmEngagementInput$Outbound = {
    content?: string | null | undefined;
    direction?: string | null | undefined;
    subject?: string | null | undefined;
    start_at?: string | null | undefined;
    end_time?: string | null | undefined;
    type: string | null;
    user_id?: string | null | undefined;
    company_id?: string | null | undefined;
    contacts?: Array<string> | null | undefined;
    field_mappings?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const UnifiedCrmEngagementInput$outboundSchema: z.ZodType<
    UnifiedCrmEngagementInput$Outbound,
    z.ZodTypeDef,
    UnifiedCrmEngagementInput
> = z
    .object({
        content: z.nullable(z.string()).optional(),
        direction: z.nullable(UnifiedCrmEngagementInputDirection$outboundSchema).optional(),
        subject: z.nullable(z.string()).optional(),
        startAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        endTime: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        type: z.nullable(UnifiedCrmEngagementInputType$outboundSchema),
        userId: z.nullable(z.string()).optional(),
        companyId: z.nullable(z.string()).optional(),
        contacts: z.nullable(z.array(z.string())).optional(),
        fieldMappings: z.nullable(z.record(z.any())).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            startAt: "start_at",
            endTime: "end_time",
            userId: "user_id",
            companyId: "company_id",
            fieldMappings: "field_mappings",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedCrmEngagementInput$ {
    /** @deprecated use `UnifiedCrmEngagementInput$inboundSchema` instead. */
    export const inboundSchema = UnifiedCrmEngagementInput$inboundSchema;
    /** @deprecated use `UnifiedCrmEngagementInput$outboundSchema` instead. */
    export const outboundSchema = UnifiedCrmEngagementInput$outboundSchema;
    /** @deprecated use `UnifiedCrmEngagementInput$Outbound` instead. */
    export type Outbound = UnifiedCrmEngagementInput$Outbound;
}
