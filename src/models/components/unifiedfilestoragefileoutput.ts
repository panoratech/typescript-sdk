/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UnifiedFilestorageFileOutput = {
  /**
   * The name of the file
   */
  name: string | null;
  /**
   * The url of the file
   */
  fileUrl: string | null;
  /**
   * The mime type of the file
   */
  mimeType: string | null;
  /**
   * The size of the file
   */
  size: string | null;
  /**
   * The UUID of the folder tied to the file
   */
  folderId: string | null;
  /**
   * The UUID of the permission tied to the file
   */
  permission: string | null;
  /**
   * The UUID of the shared link tied to the file
   */
  sharedLink: string | null;
  /**
   * The custom field mappings of the object between the remote 3rd party & Panora
   */
  fieldMappings?: { [k: string]: any } | null | undefined;
  /**
   * The UUID of the file
   */
  id?: string | null | undefined;
  /**
   * The id of the file in the context of the 3rd Party
   */
  remoteId?: string | null | undefined;
  /**
   * The remote data of the file in the context of the 3rd Party
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
export const UnifiedFilestorageFileOutput$inboundSchema: z.ZodType<
  UnifiedFilestorageFileOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.nullable(z.string()),
  file_url: z.nullable(z.string()),
  mime_type: z.nullable(z.string()),
  size: z.nullable(z.string()),
  folder_id: z.nullable(z.string()),
  permission: z.nullable(z.string()),
  shared_link: z.nullable(z.string()),
  field_mappings: z.nullable(z.record(z.any())).optional(),
  id: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
  remote_data: z.nullable(z.record(z.any())).optional(),
  created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "file_url": "fileUrl",
    "mime_type": "mimeType",
    "folder_id": "folderId",
    "shared_link": "sharedLink",
    "field_mappings": "fieldMappings",
    "remote_id": "remoteId",
    "remote_data": "remoteData",
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
  });
});

/** @internal */
export type UnifiedFilestorageFileOutput$Outbound = {
  name: string | null;
  file_url: string | null;
  mime_type: string | null;
  size: string | null;
  folder_id: string | null;
  permission: string | null;
  shared_link: string | null;
  field_mappings?: { [k: string]: any } | null | undefined;
  id?: string | null | undefined;
  remote_id?: string | null | undefined;
  remote_data?: { [k: string]: any } | null | undefined;
  created_at?: string | null | undefined;
  modified_at?: string | null | undefined;
};

/** @internal */
export const UnifiedFilestorageFileOutput$outboundSchema: z.ZodType<
  UnifiedFilestorageFileOutput$Outbound,
  z.ZodTypeDef,
  UnifiedFilestorageFileOutput
> = z.object({
  name: z.nullable(z.string()),
  fileUrl: z.nullable(z.string()),
  mimeType: z.nullable(z.string()),
  size: z.nullable(z.string()),
  folderId: z.nullable(z.string()),
  permission: z.nullable(z.string()),
  sharedLink: z.nullable(z.string()),
  fieldMappings: z.nullable(z.record(z.any())).optional(),
  id: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  remoteData: z.nullable(z.record(z.any())).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
    fileUrl: "file_url",
    mimeType: "mime_type",
    folderId: "folder_id",
    sharedLink: "shared_link",
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
export namespace UnifiedFilestorageFileOutput$ {
  /** @deprecated use `UnifiedFilestorageFileOutput$inboundSchema` instead. */
  export const inboundSchema = UnifiedFilestorageFileOutput$inboundSchema;
  /** @deprecated use `UnifiedFilestorageFileOutput$outboundSchema` instead. */
  export const outboundSchema = UnifiedFilestorageFileOutput$outboundSchema;
  /** @deprecated use `UnifiedFilestorageFileOutput$Outbound` instead. */
  export type Outbound = UnifiedFilestorageFileOutput$Outbound;
}

export function unifiedFilestorageFileOutputToJSON(
  unifiedFilestorageFileOutput: UnifiedFilestorageFileOutput,
): string {
  return JSON.stringify(
    UnifiedFilestorageFileOutput$outboundSchema.parse(
      unifiedFilestorageFileOutput,
    ),
  );
}

export function unifiedFilestorageFileOutputFromJSON(
  jsonString: string,
): SafeParseResult<UnifiedFilestorageFileOutput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UnifiedFilestorageFileOutput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UnifiedFilestorageFileOutput' from JSON`,
  );
}
