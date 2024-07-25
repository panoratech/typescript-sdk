/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type UnifiedAtsEeocsOutputFieldMappings = {};

export type UnifiedAtsEeocsOutputRemoteData = {};

export type UnifiedAtsEeocsOutputCreatedAt = {};

export type UnifiedAtsEeocsOutputModifiedAt = {};

export type UnifiedAtsEeocsOutput = {
    /**
     * The UUID of the candidate
     */
    candidateId?: string | undefined;
    /**
     * The submission date of the EEOC
     */
    submittedAt?: Date | undefined;
    /**
     * The race of the candidate
     */
    race?: string | undefined;
    /**
     * The gender of the candidate
     */
    gender?: string | undefined;
    /**
     * The veteran status of the candidate
     */
    veteranStatus?: string | undefined;
    /**
     * The disability status of the candidate
     */
    disabilityStatus?: string | undefined;
    fieldMappings: UnifiedAtsEeocsOutputFieldMappings;
    /**
     * The UUID of the EEOC
     */
    id?: string | undefined;
    /**
     * The remote ID of the EEOC in the context of the 3rd Party
     */
    remoteId?: string | undefined;
    remoteData: UnifiedAtsEeocsOutputRemoteData;
    createdAt: UnifiedAtsEeocsOutputCreatedAt;
    modifiedAt: UnifiedAtsEeocsOutputModifiedAt;
};

/** @internal */
export namespace UnifiedAtsEeocsOutputFieldMappings$ {
    export const inboundSchema: z.ZodType<
        UnifiedAtsEeocsOutputFieldMappings,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedAtsEeocsOutputFieldMappings
    > = z.object({});
}

/** @internal */
export namespace UnifiedAtsEeocsOutputRemoteData$ {
    export const inboundSchema: z.ZodType<UnifiedAtsEeocsOutputRemoteData, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedAtsEeocsOutputRemoteData
    > = z.object({});
}

/** @internal */
export namespace UnifiedAtsEeocsOutputCreatedAt$ {
    export const inboundSchema: z.ZodType<UnifiedAtsEeocsOutputCreatedAt, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedAtsEeocsOutputCreatedAt> =
        z.object({});
}

/** @internal */
export namespace UnifiedAtsEeocsOutputModifiedAt$ {
    export const inboundSchema: z.ZodType<UnifiedAtsEeocsOutputModifiedAt, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedAtsEeocsOutputModifiedAt
    > = z.object({});
}

/** @internal */
export namespace UnifiedAtsEeocsOutput$ {
    export const inboundSchema: z.ZodType<UnifiedAtsEeocsOutput, z.ZodTypeDef, unknown> = z
        .object({
            candidate_id: z.string().optional(),
            submitted_at: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            race: z.string().optional(),
            gender: z.string().optional(),
            veteran_status: z.string().optional(),
            disability_status: z.string().optional(),
            field_mappings: z.lazy(() => UnifiedAtsEeocsOutputFieldMappings$.inboundSchema),
            id: z.string().optional(),
            remote_id: z.string().optional(),
            remote_data: z.lazy(() => UnifiedAtsEeocsOutputRemoteData$.inboundSchema),
            created_at: z.lazy(() => UnifiedAtsEeocsOutputCreatedAt$.inboundSchema),
            modified_at: z.lazy(() => UnifiedAtsEeocsOutputModifiedAt$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                candidate_id: "candidateId",
                submitted_at: "submittedAt",
                veteran_status: "veteranStatus",
                disability_status: "disabilityStatus",
                field_mappings: "fieldMappings",
                remote_id: "remoteId",
                remote_data: "remoteData",
                created_at: "createdAt",
                modified_at: "modifiedAt",
            });
        });

    export type Outbound = {
        candidate_id?: string | undefined;
        submitted_at?: string | undefined;
        race?: string | undefined;
        gender?: string | undefined;
        veteran_status?: string | undefined;
        disability_status?: string | undefined;
        field_mappings: UnifiedAtsEeocsOutputFieldMappings$.Outbound;
        id?: string | undefined;
        remote_id?: string | undefined;
        remote_data: UnifiedAtsEeocsOutputRemoteData$.Outbound;
        created_at: UnifiedAtsEeocsOutputCreatedAt$.Outbound;
        modified_at: UnifiedAtsEeocsOutputModifiedAt$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedAtsEeocsOutput> = z
        .object({
            candidateId: z.string().optional(),
            submittedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            race: z.string().optional(),
            gender: z.string().optional(),
            veteranStatus: z.string().optional(),
            disabilityStatus: z.string().optional(),
            fieldMappings: z.lazy(() => UnifiedAtsEeocsOutputFieldMappings$.outboundSchema),
            id: z.string().optional(),
            remoteId: z.string().optional(),
            remoteData: z.lazy(() => UnifiedAtsEeocsOutputRemoteData$.outboundSchema),
            createdAt: z.lazy(() => UnifiedAtsEeocsOutputCreatedAt$.outboundSchema),
            modifiedAt: z.lazy(() => UnifiedAtsEeocsOutputModifiedAt$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                candidateId: "candidate_id",
                submittedAt: "submitted_at",
                veteranStatus: "veteran_status",
                disabilityStatus: "disability_status",
                fieldMappings: "field_mappings",
                remoteId: "remote_id",
                remoteData: "remote_data",
                createdAt: "created_at",
                modifiedAt: "modified_at",
            });
        });
}
