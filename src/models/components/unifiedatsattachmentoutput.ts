/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type UnifiedAtsAttachmentOutputFieldMappings = {};

export type UnifiedAtsAttachmentOutputRemoteData = {};

export type UnifiedAtsAttachmentOutputCreatedAt = {};

export type UnifiedAtsAttachmentOutputModifiedAt = {};

export type UnifiedAtsAttachmentOutput = {
    /**
     * The URL of the file
     */
    fileUrl?: string | undefined;
    /**
     * The name of the file
     */
    fileName?: string | undefined;
    /**
     * The type of the file
     */
    attachmentType?: string | undefined;
    /**
     * The remote creation date of the attachment
     */
    remoteCreatedAt?: Date | undefined;
    /**
     * The remote modification date of the attachment
     */
    remoteModifiedAt?: Date | undefined;
    /**
     * The UUID of the candidate
     */
    candidateId?: string | undefined;
    fieldMappings: UnifiedAtsAttachmentOutputFieldMappings;
    /**
     * The UUID of the attachment
     */
    id?: string | undefined;
    /**
     * The remote ID of the attachment
     */
    remoteId?: string | undefined;
    remoteData: UnifiedAtsAttachmentOutputRemoteData;
    createdAt: UnifiedAtsAttachmentOutputCreatedAt;
    modifiedAt: UnifiedAtsAttachmentOutputModifiedAt;
};

/** @internal */
export namespace UnifiedAtsAttachmentOutputFieldMappings$ {
    export const inboundSchema: z.ZodType<
        UnifiedAtsAttachmentOutputFieldMappings,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedAtsAttachmentOutputFieldMappings
    > = z.object({});
}

/** @internal */
export namespace UnifiedAtsAttachmentOutputRemoteData$ {
    export const inboundSchema: z.ZodType<
        UnifiedAtsAttachmentOutputRemoteData,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedAtsAttachmentOutputRemoteData
    > = z.object({});
}

/** @internal */
export namespace UnifiedAtsAttachmentOutputCreatedAt$ {
    export const inboundSchema: z.ZodType<
        UnifiedAtsAttachmentOutputCreatedAt,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedAtsAttachmentOutputCreatedAt
    > = z.object({});
}

/** @internal */
export namespace UnifiedAtsAttachmentOutputModifiedAt$ {
    export const inboundSchema: z.ZodType<
        UnifiedAtsAttachmentOutputModifiedAt,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedAtsAttachmentOutputModifiedAt
    > = z.object({});
}

/** @internal */
export namespace UnifiedAtsAttachmentOutput$ {
    export const inboundSchema: z.ZodType<UnifiedAtsAttachmentOutput, z.ZodTypeDef, unknown> = z
        .object({
            file_url: z.string().optional(),
            file_name: z.string().optional(),
            attachment_type: z.string().optional(),
            remote_created_at: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            remote_modified_at: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            candidate_id: z.string().optional(),
            field_mappings: z.lazy(() => UnifiedAtsAttachmentOutputFieldMappings$.inboundSchema),
            id: z.string().optional(),
            remote_id: z.string().optional(),
            remote_data: z.lazy(() => UnifiedAtsAttachmentOutputRemoteData$.inboundSchema),
            created_at: z.lazy(() => UnifiedAtsAttachmentOutputCreatedAt$.inboundSchema),
            modified_at: z.lazy(() => UnifiedAtsAttachmentOutputModifiedAt$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                file_url: "fileUrl",
                file_name: "fileName",
                attachment_type: "attachmentType",
                remote_created_at: "remoteCreatedAt",
                remote_modified_at: "remoteModifiedAt",
                candidate_id: "candidateId",
                field_mappings: "fieldMappings",
                remote_id: "remoteId",
                remote_data: "remoteData",
                created_at: "createdAt",
                modified_at: "modifiedAt",
            });
        });

    export type Outbound = {
        file_url?: string | undefined;
        file_name?: string | undefined;
        attachment_type?: string | undefined;
        remote_created_at?: string | undefined;
        remote_modified_at?: string | undefined;
        candidate_id?: string | undefined;
        field_mappings: UnifiedAtsAttachmentOutputFieldMappings$.Outbound;
        id?: string | undefined;
        remote_id?: string | undefined;
        remote_data: UnifiedAtsAttachmentOutputRemoteData$.Outbound;
        created_at: UnifiedAtsAttachmentOutputCreatedAt$.Outbound;
        modified_at: UnifiedAtsAttachmentOutputModifiedAt$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedAtsAttachmentOutput> = z
        .object({
            fileUrl: z.string().optional(),
            fileName: z.string().optional(),
            attachmentType: z.string().optional(),
            remoteCreatedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            remoteModifiedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            candidateId: z.string().optional(),
            fieldMappings: z.lazy(() => UnifiedAtsAttachmentOutputFieldMappings$.outboundSchema),
            id: z.string().optional(),
            remoteId: z.string().optional(),
            remoteData: z.lazy(() => UnifiedAtsAttachmentOutputRemoteData$.outboundSchema),
            createdAt: z.lazy(() => UnifiedAtsAttachmentOutputCreatedAt$.outboundSchema),
            modifiedAt: z.lazy(() => UnifiedAtsAttachmentOutputModifiedAt$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                fileUrl: "file_url",
                fileName: "file_name",
                attachmentType: "attachment_type",
                remoteCreatedAt: "remote_created_at",
                remoteModifiedAt: "remote_modified_at",
                candidateId: "candidate_id",
                fieldMappings: "field_mappings",
                remoteId: "remote_id",
                remoteData: "remote_data",
                createdAt: "created_at",
                modifiedAt: "modified_at",
            });
        });
}
