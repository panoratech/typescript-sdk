/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

/**
 * The type of activity
 */
export enum ActivityType {
    Note = "NOTE",
    Email = "EMAIL",
    Other = "OTHER",
}

/**
 * The visibility of the activity
 */
export enum Visibility {
    AdminOnly = "ADMIN_ONLY",
    Public = "PUBLIC",
    Private = "PRIVATE",
}

export type UnifiedAtsActivityOutput = {
    /**
     * The type of activity
     */
    activityType?: ActivityType | null | undefined;
    /**
     * The subject of the activity
     */
    subject?: string | null | undefined;
    /**
     * The body of the activity
     */
    body?: string | null | undefined;
    /**
     * The visibility of the activity
     */
    visibility?: Visibility | null | undefined;
    /**
     * The UUID of the candidate
     */
    candidateId?: string | null | undefined;
    /**
     * The remote creation date of the activity
     */
    remoteCreatedAt?: Date | null | undefined;
    /**
     * The custom field mappings of the object between the remote 3rd party & Panora
     */
    fieldMappings?: { [k: string]: any } | null | undefined;
    /**
     * The UUID of the activity
     */
    id?: string | null | undefined;
    /**
     * The remote ID of the activity in the context of the 3rd Party
     */
    remoteId?: string | null | undefined;
    /**
     * The remote data of the activity in the context of the 3rd Party
     */
    remoteData?: { [k: string]: any } | null | undefined;
    /**
     * The created date of the object
     */
    createdAt?: Date | null | undefined;
    /**
     * The modified date of the object
     */
    modifiedAt?: Date | null | undefined;
};

/** @internal */
export const ActivityType$inboundSchema: z.ZodNativeEnum<typeof ActivityType> =
    z.nativeEnum(ActivityType);

/** @internal */
export const ActivityType$outboundSchema: z.ZodNativeEnum<typeof ActivityType> =
    ActivityType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ActivityType$ {
    /** @deprecated use `ActivityType$inboundSchema` instead. */
    export const inboundSchema = ActivityType$inboundSchema;
    /** @deprecated use `ActivityType$outboundSchema` instead. */
    export const outboundSchema = ActivityType$outboundSchema;
}

/** @internal */
export const Visibility$inboundSchema: z.ZodNativeEnum<typeof Visibility> =
    z.nativeEnum(Visibility);

/** @internal */
export const Visibility$outboundSchema: z.ZodNativeEnum<typeof Visibility> =
    Visibility$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Visibility$ {
    /** @deprecated use `Visibility$inboundSchema` instead. */
    export const inboundSchema = Visibility$inboundSchema;
    /** @deprecated use `Visibility$outboundSchema` instead. */
    export const outboundSchema = Visibility$outboundSchema;
}

/** @internal */
export const UnifiedAtsActivityOutput$inboundSchema: z.ZodType<
    UnifiedAtsActivityOutput,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        activity_type: z.nullable(ActivityType$inboundSchema).optional(),
        subject: z.nullable(z.string()).optional(),
        body: z.nullable(z.string()).optional(),
        visibility: z.nullable(Visibility$inboundSchema).optional(),
        candidate_id: z.nullable(z.string()).optional(),
        remote_created_at: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        field_mappings: z.nullable(z.record(z.any())).optional(),
        id: z.nullable(z.string()).optional(),
        remote_id: z.nullable(z.string()).optional(),
        remote_data: z.nullable(z.record(z.any())).optional(),
        created_at: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        modified_at: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
    })
    .transform((v) => {
        return remap$(v, {
            activity_type: "activityType",
            candidate_id: "candidateId",
            remote_created_at: "remoteCreatedAt",
            field_mappings: "fieldMappings",
            remote_id: "remoteId",
            remote_data: "remoteData",
            created_at: "createdAt",
            modified_at: "modifiedAt",
        });
    });

/** @internal */
export type UnifiedAtsActivityOutput$Outbound = {
    activity_type?: string | null | undefined;
    subject?: string | null | undefined;
    body?: string | null | undefined;
    visibility?: string | null | undefined;
    candidate_id?: string | null | undefined;
    remote_created_at?: string | null | undefined;
    field_mappings?: { [k: string]: any } | null | undefined;
    id?: string | null | undefined;
    remote_id?: string | null | undefined;
    remote_data?: { [k: string]: any } | null | undefined;
    created_at?: string | null | undefined;
    modified_at?: string | null | undefined;
};

/** @internal */
export const UnifiedAtsActivityOutput$outboundSchema: z.ZodType<
    UnifiedAtsActivityOutput$Outbound,
    z.ZodTypeDef,
    UnifiedAtsActivityOutput
> = z
    .object({
        activityType: z.nullable(ActivityType$outboundSchema).optional(),
        subject: z.nullable(z.string()).optional(),
        body: z.nullable(z.string()).optional(),
        visibility: z.nullable(Visibility$outboundSchema).optional(),
        candidateId: z.nullable(z.string()).optional(),
        remoteCreatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        fieldMappings: z.nullable(z.record(z.any())).optional(),
        id: z.nullable(z.string()).optional(),
        remoteId: z.nullable(z.string()).optional(),
        remoteData: z.nullable(z.record(z.any())).optional(),
        createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        modifiedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            activityType: "activity_type",
            candidateId: "candidate_id",
            remoteCreatedAt: "remote_created_at",
            fieldMappings: "field_mappings",
            remoteId: "remote_id",
            remoteData: "remote_data",
            createdAt: "created_at",
            modifiedAt: "modified_at",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAtsActivityOutput$ {
    /** @deprecated use `UnifiedAtsActivityOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedAtsActivityOutput$inboundSchema;
    /** @deprecated use `UnifiedAtsActivityOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedAtsActivityOutput$outboundSchema;
    /** @deprecated use `UnifiedAtsActivityOutput$Outbound` instead. */
    export type Outbound = UnifiedAtsActivityOutput$Outbound;
}
