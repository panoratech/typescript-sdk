/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type UnifiedAtsAttachmentOutput = {
    /**
     * The URL of the file
     */
    fileUrl?: string | null | undefined;
    /**
     * The name of the file
     */
    fileName?: string | null | undefined;
    /**
     * The type of the file
     */
    attachmentType?: string | null | undefined;
    /**
     * The remote creation date of the attachment
     */
    remoteCreatedAt?: Date | null | undefined;
    /**
     * The remote modification date of the attachment
     */
    remoteModifiedAt?: Date | null | undefined;
    /**
     * The UUID of the candidate
     */
    candidateId?: string | null | undefined;
    /**
     * The custom field mappings of the object between the remote 3rd party & Panora
     */
    fieldMappings?: { [k: string]: any } | null | undefined;
    /**
     * The UUID of the attachment
     */
    id?: string | null | undefined;
    /**
     * The remote ID of the attachment
     */
    remoteId?: string | null | undefined;
    /**
     * The remote data of the attachment in the context of the 3rd Party
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
export const UnifiedAtsAttachmentOutput$inboundSchema: z.ZodType<
    UnifiedAtsAttachmentOutput,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        file_url: z.nullable(z.string()).optional(),
        file_name: z.nullable(z.string()).optional(),
        attachment_type: z.nullable(z.string()).optional(),
        remote_created_at: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        remote_modified_at: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        candidate_id: z.nullable(z.string()).optional(),
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

/** @internal */
export type UnifiedAtsAttachmentOutput$Outbound = {
    file_url?: string | null | undefined;
    file_name?: string | null | undefined;
    attachment_type?: string | null | undefined;
    remote_created_at?: string | null | undefined;
    remote_modified_at?: string | null | undefined;
    candidate_id?: string | null | undefined;
    field_mappings?: { [k: string]: any } | null | undefined;
    id?: string | null | undefined;
    remote_id?: string | null | undefined;
    remote_data?: { [k: string]: any } | null | undefined;
    created_at?: string | null | undefined;
    modified_at?: string | null | undefined;
};

/** @internal */
export const UnifiedAtsAttachmentOutput$outboundSchema: z.ZodType<
    UnifiedAtsAttachmentOutput$Outbound,
    z.ZodTypeDef,
    UnifiedAtsAttachmentOutput
> = z
    .object({
        fileUrl: z.nullable(z.string()).optional(),
        fileName: z.nullable(z.string()).optional(),
        attachmentType: z.nullable(z.string()).optional(),
        remoteCreatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        remoteModifiedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        candidateId: z.nullable(z.string()).optional(),
        fieldMappings: z.nullable(z.record(z.any())).optional(),
        id: z.nullable(z.string()).optional(),
        remoteId: z.nullable(z.string()).optional(),
        remoteData: z.nullable(z.record(z.any())).optional(),
        createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        modifiedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
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

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAtsAttachmentOutput$ {
    /** @deprecated use `UnifiedAtsAttachmentOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedAtsAttachmentOutput$inboundSchema;
    /** @deprecated use `UnifiedAtsAttachmentOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedAtsAttachmentOutput$outboundSchema;
    /** @deprecated use `UnifiedAtsAttachmentOutput$Outbound` instead. */
    export type Outbound = UnifiedAtsAttachmentOutput$Outbound;
}
