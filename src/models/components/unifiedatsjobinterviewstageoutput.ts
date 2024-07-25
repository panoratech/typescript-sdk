/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type UnifiedAtsJobinterviewstageOutputFieldMappings = {};

export type UnifiedAtsJobinterviewstageOutputRemoteData = {};

export type UnifiedAtsJobinterviewstageOutputCreatedAt = {};

export type UnifiedAtsJobinterviewstageOutputModifiedAt = {};

export type UnifiedAtsJobinterviewstageOutput = {
    /**
     * The name of the job interview stage
     */
    name?: string | undefined;
    /**
     * The order of the stage
     */
    stageOrder?: number | undefined;
    /**
     * The UUID of the job
     */
    jobId?: string | undefined;
    fieldMappings: UnifiedAtsJobinterviewstageOutputFieldMappings;
    /**
     * The UUID of the job interview stage
     */
    id?: string | undefined;
    /**
     * The remote ID of the job interview stage in the context of the 3rd Party
     */
    remoteId?: string | undefined;
    remoteData: UnifiedAtsJobinterviewstageOutputRemoteData;
    createdAt: UnifiedAtsJobinterviewstageOutputCreatedAt;
    modifiedAt: UnifiedAtsJobinterviewstageOutputModifiedAt;
};

/** @internal */
export namespace UnifiedAtsJobinterviewstageOutputFieldMappings$ {
    export const inboundSchema: z.ZodType<
        UnifiedAtsJobinterviewstageOutputFieldMappings,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedAtsJobinterviewstageOutputFieldMappings
    > = z.object({});
}

/** @internal */
export namespace UnifiedAtsJobinterviewstageOutputRemoteData$ {
    export const inboundSchema: z.ZodType<
        UnifiedAtsJobinterviewstageOutputRemoteData,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedAtsJobinterviewstageOutputRemoteData
    > = z.object({});
}

/** @internal */
export namespace UnifiedAtsJobinterviewstageOutputCreatedAt$ {
    export const inboundSchema: z.ZodType<
        UnifiedAtsJobinterviewstageOutputCreatedAt,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedAtsJobinterviewstageOutputCreatedAt
    > = z.object({});
}

/** @internal */
export namespace UnifiedAtsJobinterviewstageOutputModifiedAt$ {
    export const inboundSchema: z.ZodType<
        UnifiedAtsJobinterviewstageOutputModifiedAt,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedAtsJobinterviewstageOutputModifiedAt
    > = z.object({});
}

/** @internal */
export namespace UnifiedAtsJobinterviewstageOutput$ {
    export const inboundSchema: z.ZodType<
        UnifiedAtsJobinterviewstageOutput,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            name: z.string().optional(),
            stage_order: z.number().optional(),
            job_id: z.string().optional(),
            field_mappings: z.lazy(
                () => UnifiedAtsJobinterviewstageOutputFieldMappings$.inboundSchema
            ),
            id: z.string().optional(),
            remote_id: z.string().optional(),
            remote_data: z.lazy(() => UnifiedAtsJobinterviewstageOutputRemoteData$.inboundSchema),
            created_at: z.lazy(() => UnifiedAtsJobinterviewstageOutputCreatedAt$.inboundSchema),
            modified_at: z.lazy(() => UnifiedAtsJobinterviewstageOutputModifiedAt$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                stage_order: "stageOrder",
                job_id: "jobId",
                field_mappings: "fieldMappings",
                remote_id: "remoteId",
                remote_data: "remoteData",
                created_at: "createdAt",
                modified_at: "modifiedAt",
            });
        });

    export type Outbound = {
        name?: string | undefined;
        stage_order?: number | undefined;
        job_id?: string | undefined;
        field_mappings: UnifiedAtsJobinterviewstageOutputFieldMappings$.Outbound;
        id?: string | undefined;
        remote_id?: string | undefined;
        remote_data: UnifiedAtsJobinterviewstageOutputRemoteData$.Outbound;
        created_at: UnifiedAtsJobinterviewstageOutputCreatedAt$.Outbound;
        modified_at: UnifiedAtsJobinterviewstageOutputModifiedAt$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedAtsJobinterviewstageOutput
    > = z
        .object({
            name: z.string().optional(),
            stageOrder: z.number().optional(),
            jobId: z.string().optional(),
            fieldMappings: z.lazy(
                () => UnifiedAtsJobinterviewstageOutputFieldMappings$.outboundSchema
            ),
            id: z.string().optional(),
            remoteId: z.string().optional(),
            remoteData: z.lazy(() => UnifiedAtsJobinterviewstageOutputRemoteData$.outboundSchema),
            createdAt: z.lazy(() => UnifiedAtsJobinterviewstageOutputCreatedAt$.outboundSchema),
            modifiedAt: z.lazy(() => UnifiedAtsJobinterviewstageOutputModifiedAt$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                stageOrder: "stage_order",
                jobId: "job_id",
                fieldMappings: "field_mappings",
                remoteId: "remote_id",
                remoteData: "remote_data",
                createdAt: "created_at",
                modifiedAt: "modified_at",
            });
        });
}
