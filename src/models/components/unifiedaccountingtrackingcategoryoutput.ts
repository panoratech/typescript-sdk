/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

/**
 * The custom field mappings of the object between the remote 3rd party & Panora
 */
export type UnifiedAccountingTrackingcategoryOutputFieldMappings = {};

/**
 * The remote data of the tracking category in the context of the 3rd Party
 */
export type UnifiedAccountingTrackingcategoryOutputRemoteData = {};

export type UnifiedAccountingTrackingcategoryOutput = {
  /**
   * The name of the tracking category
   */
  name?: string | null | undefined;
  /**
   * The status of the tracking category
   */
  status?: string | null | undefined;
  /**
   * The type of the tracking category
   */
  categoryType?: string | null | undefined;
  /**
   * The UUID of the parent category, if applicable
   */
  parentCategory?: string | null | undefined;
  /**
   * The custom field mappings of the object between the remote 3rd party & Panora
   */
  fieldMappings?:
    | UnifiedAccountingTrackingcategoryOutputFieldMappings
    | null
    | undefined;
  /**
   * The UUID of the tracking category record
   */
  id?: string | null | undefined;
  /**
   * The remote ID of the tracking category in the context of the 3rd Party
   */
  remoteId?: string | null | undefined;
  /**
   * The remote data of the tracking category in the context of the 3rd Party
   */
  remoteData?:
    | UnifiedAccountingTrackingcategoryOutputRemoteData
    | null
    | undefined;
  /**
   * The created date of the tracking category record
   */
  createdAt?: Date | null | undefined;
  /**
   * The last modified date of the tracking category record
   */
  modifiedAt?: Date | null | undefined;
};

/** @internal */
export const UnifiedAccountingTrackingcategoryOutputFieldMappings$inboundSchema:
  z.ZodType<
    UnifiedAccountingTrackingcategoryOutputFieldMappings,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type UnifiedAccountingTrackingcategoryOutputFieldMappings$Outbound = {};

/** @internal */
export const UnifiedAccountingTrackingcategoryOutputFieldMappings$outboundSchema:
  z.ZodType<
    UnifiedAccountingTrackingcategoryOutputFieldMappings$Outbound,
    z.ZodTypeDef,
    UnifiedAccountingTrackingcategoryOutputFieldMappings
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingTrackingcategoryOutputFieldMappings$ {
  /** @deprecated use `UnifiedAccountingTrackingcategoryOutputFieldMappings$inboundSchema` instead. */
  export const inboundSchema =
    UnifiedAccountingTrackingcategoryOutputFieldMappings$inboundSchema;
  /** @deprecated use `UnifiedAccountingTrackingcategoryOutputFieldMappings$outboundSchema` instead. */
  export const outboundSchema =
    UnifiedAccountingTrackingcategoryOutputFieldMappings$outboundSchema;
  /** @deprecated use `UnifiedAccountingTrackingcategoryOutputFieldMappings$Outbound` instead. */
  export type Outbound =
    UnifiedAccountingTrackingcategoryOutputFieldMappings$Outbound;
}

/** @internal */
export const UnifiedAccountingTrackingcategoryOutputRemoteData$inboundSchema:
  z.ZodType<
    UnifiedAccountingTrackingcategoryOutputRemoteData,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type UnifiedAccountingTrackingcategoryOutputRemoteData$Outbound = {};

/** @internal */
export const UnifiedAccountingTrackingcategoryOutputRemoteData$outboundSchema:
  z.ZodType<
    UnifiedAccountingTrackingcategoryOutputRemoteData$Outbound,
    z.ZodTypeDef,
    UnifiedAccountingTrackingcategoryOutputRemoteData
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingTrackingcategoryOutputRemoteData$ {
  /** @deprecated use `UnifiedAccountingTrackingcategoryOutputRemoteData$inboundSchema` instead. */
  export const inboundSchema =
    UnifiedAccountingTrackingcategoryOutputRemoteData$inboundSchema;
  /** @deprecated use `UnifiedAccountingTrackingcategoryOutputRemoteData$outboundSchema` instead. */
  export const outboundSchema =
    UnifiedAccountingTrackingcategoryOutputRemoteData$outboundSchema;
  /** @deprecated use `UnifiedAccountingTrackingcategoryOutputRemoteData$Outbound` instead. */
  export type Outbound =
    UnifiedAccountingTrackingcategoryOutputRemoteData$Outbound;
}

/** @internal */
export const UnifiedAccountingTrackingcategoryOutput$inboundSchema: z.ZodType<
  UnifiedAccountingTrackingcategoryOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.nullable(z.string()).optional(),
  status: z.nullable(z.string()).optional(),
  category_type: z.nullable(z.string()).optional(),
  parent_category: z.nullable(z.string()).optional(),
  field_mappings: z.nullable(
    z.lazy(() =>
      UnifiedAccountingTrackingcategoryOutputFieldMappings$inboundSchema
    ),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
  remote_data: z.nullable(
    z.lazy(() =>
      UnifiedAccountingTrackingcategoryOutputRemoteData$inboundSchema
    ),
  ).optional(),
  created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "category_type": "categoryType",
    "parent_category": "parentCategory",
    "field_mappings": "fieldMappings",
    "remote_id": "remoteId",
    "remote_data": "remoteData",
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
  });
});

/** @internal */
export type UnifiedAccountingTrackingcategoryOutput$Outbound = {
  name?: string | null | undefined;
  status?: string | null | undefined;
  category_type?: string | null | undefined;
  parent_category?: string | null | undefined;
  field_mappings?:
    | UnifiedAccountingTrackingcategoryOutputFieldMappings$Outbound
    | null
    | undefined;
  id?: string | null | undefined;
  remote_id?: string | null | undefined;
  remote_data?:
    | UnifiedAccountingTrackingcategoryOutputRemoteData$Outbound
    | null
    | undefined;
  created_at?: string | null | undefined;
  modified_at?: string | null | undefined;
};

/** @internal */
export const UnifiedAccountingTrackingcategoryOutput$outboundSchema: z.ZodType<
  UnifiedAccountingTrackingcategoryOutput$Outbound,
  z.ZodTypeDef,
  UnifiedAccountingTrackingcategoryOutput
> = z.object({
  name: z.nullable(z.string()).optional(),
  status: z.nullable(z.string()).optional(),
  categoryType: z.nullable(z.string()).optional(),
  parentCategory: z.nullable(z.string()).optional(),
  fieldMappings: z.nullable(
    z.lazy(() =>
      UnifiedAccountingTrackingcategoryOutputFieldMappings$outboundSchema
    ),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  remoteData: z.nullable(
    z.lazy(() =>
      UnifiedAccountingTrackingcategoryOutputRemoteData$outboundSchema
    ),
  ).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
    categoryType: "category_type",
    parentCategory: "parent_category",
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
export namespace UnifiedAccountingTrackingcategoryOutput$ {
  /** @deprecated use `UnifiedAccountingTrackingcategoryOutput$inboundSchema` instead. */
  export const inboundSchema =
    UnifiedAccountingTrackingcategoryOutput$inboundSchema;
  /** @deprecated use `UnifiedAccountingTrackingcategoryOutput$outboundSchema` instead. */
  export const outboundSchema =
    UnifiedAccountingTrackingcategoryOutput$outboundSchema;
  /** @deprecated use `UnifiedAccountingTrackingcategoryOutput$Outbound` instead. */
  export type Outbound = UnifiedAccountingTrackingcategoryOutput$Outbound;
}
