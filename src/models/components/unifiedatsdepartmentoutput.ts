/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type UnifiedAtsDepartmentOutputFieldMappings = {};

export type UnifiedAtsDepartmentOutputRemoteData = {};

export type UnifiedAtsDepartmentOutputCreatedAt = {};

export type UnifiedAtsDepartmentOutputModifiedAt = {};

export type UnifiedAtsDepartmentOutput = {
    /**
     * The name of the department
     */
    name?: string | undefined;
    fieldMappings: UnifiedAtsDepartmentOutputFieldMappings;
    /**
     * The UUID of the department
     */
    id?: string | undefined;
    /**
     * The remote ID of the department in the context of the 3rd Party
     */
    remoteId?: string | undefined;
    remoteData: UnifiedAtsDepartmentOutputRemoteData;
    createdAt: UnifiedAtsDepartmentOutputCreatedAt;
    modifiedAt: UnifiedAtsDepartmentOutputModifiedAt;
};

/** @internal */
export namespace UnifiedAtsDepartmentOutputFieldMappings$ {
    export const inboundSchema: z.ZodType<
        UnifiedAtsDepartmentOutputFieldMappings,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedAtsDepartmentOutputFieldMappings
    > = z.object({});
}

/** @internal */
export namespace UnifiedAtsDepartmentOutputRemoteData$ {
    export const inboundSchema: z.ZodType<
        UnifiedAtsDepartmentOutputRemoteData,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedAtsDepartmentOutputRemoteData
    > = z.object({});
}

/** @internal */
export namespace UnifiedAtsDepartmentOutputCreatedAt$ {
    export const inboundSchema: z.ZodType<
        UnifiedAtsDepartmentOutputCreatedAt,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedAtsDepartmentOutputCreatedAt
    > = z.object({});
}

/** @internal */
export namespace UnifiedAtsDepartmentOutputModifiedAt$ {
    export const inboundSchema: z.ZodType<
        UnifiedAtsDepartmentOutputModifiedAt,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedAtsDepartmentOutputModifiedAt
    > = z.object({});
}

/** @internal */
export namespace UnifiedAtsDepartmentOutput$ {
    export const inboundSchema: z.ZodType<UnifiedAtsDepartmentOutput, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string().optional(),
            field_mappings: z.lazy(() => UnifiedAtsDepartmentOutputFieldMappings$.inboundSchema),
            id: z.string().optional(),
            remote_id: z.string().optional(),
            remote_data: z.lazy(() => UnifiedAtsDepartmentOutputRemoteData$.inboundSchema),
            created_at: z.lazy(() => UnifiedAtsDepartmentOutputCreatedAt$.inboundSchema),
            modified_at: z.lazy(() => UnifiedAtsDepartmentOutputModifiedAt$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                field_mappings: "fieldMappings",
                remote_id: "remoteId",
                remote_data: "remoteData",
                created_at: "createdAt",
                modified_at: "modifiedAt",
            });
        });

    export type Outbound = {
        name?: string | undefined;
        field_mappings: UnifiedAtsDepartmentOutputFieldMappings$.Outbound;
        id?: string | undefined;
        remote_id?: string | undefined;
        remote_data: UnifiedAtsDepartmentOutputRemoteData$.Outbound;
        created_at: UnifiedAtsDepartmentOutputCreatedAt$.Outbound;
        modified_at: UnifiedAtsDepartmentOutputModifiedAt$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedAtsDepartmentOutput> = z
        .object({
            name: z.string().optional(),
            fieldMappings: z.lazy(() => UnifiedAtsDepartmentOutputFieldMappings$.outboundSchema),
            id: z.string().optional(),
            remoteId: z.string().optional(),
            remoteData: z.lazy(() => UnifiedAtsDepartmentOutputRemoteData$.outboundSchema),
            createdAt: z.lazy(() => UnifiedAtsDepartmentOutputCreatedAt$.outboundSchema),
            modifiedAt: z.lazy(() => UnifiedAtsDepartmentOutputModifiedAt$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                fieldMappings: "field_mappings",
                remoteId: "remote_id",
                remoteData: "remote_data",
                createdAt: "created_at",
                modifiedAt: "modified_at",
            });
        });
}
