/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

/**
 * The custom field mappings of the object between the remote 3rd party & Panora
 */
export type UnifiedAccountingCompanyinfoOutputFieldMappings = {};

/**
 * The remote data of the company info in the context of the 3rd Party
 */
export type UnifiedAccountingCompanyinfoOutputRemoteData = {};

export type UnifiedAccountingCompanyinfoOutput = {
  /**
   * The name of the company
   */
  name?: string | null | undefined;
  /**
   * The legal name of the company
   */
  legalName?: string | null | undefined;
  /**
   * The tax number of the company
   */
  taxNumber?: string | null | undefined;
  /**
   * The month of the fiscal year end (1-12)
   */
  fiscalYearEndMonth?: number | null | undefined;
  /**
   * The day of the fiscal year end (1-31)
   */
  fiscalYearEndDay?: number | null | undefined;
  /**
   * The currency used by the company
   */
  currency?: string | null | undefined;
  /**
   * The URLs associated with the company
   */
  urls?: Array<string> | null | undefined;
  /**
   * The UUIDs of the tracking categories used by the company
   */
  trackingCategories?: Array<string> | null | undefined;
  /**
   * The custom field mappings of the object between the remote 3rd party & Panora
   */
  fieldMappings?:
    | UnifiedAccountingCompanyinfoOutputFieldMappings
    | null
    | undefined;
  /**
   * The UUID of the company info record
   */
  id?: string | null | undefined;
  /**
   * The remote ID of the company info in the context of the 3rd Party
   */
  remoteId?: string | null | undefined;
  /**
   * The remote data of the company info in the context of the 3rd Party
   */
  remoteData?: UnifiedAccountingCompanyinfoOutputRemoteData | null | undefined;
  /**
   * The date when the company info was created in the remote system
   */
  remoteCreatedAt?: Date | null | undefined;
  /**
   * The created date of the company info record
   */
  createdAt?: Date | null | undefined;
  /**
   * The last modified date of the company info record
   */
  modifiedAt?: Date | null | undefined;
};

/** @internal */
export const UnifiedAccountingCompanyinfoOutputFieldMappings$inboundSchema:
  z.ZodType<
    UnifiedAccountingCompanyinfoOutputFieldMappings,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type UnifiedAccountingCompanyinfoOutputFieldMappings$Outbound = {};

/** @internal */
export const UnifiedAccountingCompanyinfoOutputFieldMappings$outboundSchema:
  z.ZodType<
    UnifiedAccountingCompanyinfoOutputFieldMappings$Outbound,
    z.ZodTypeDef,
    UnifiedAccountingCompanyinfoOutputFieldMappings
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingCompanyinfoOutputFieldMappings$ {
  /** @deprecated use `UnifiedAccountingCompanyinfoOutputFieldMappings$inboundSchema` instead. */
  export const inboundSchema =
    UnifiedAccountingCompanyinfoOutputFieldMappings$inboundSchema;
  /** @deprecated use `UnifiedAccountingCompanyinfoOutputFieldMappings$outboundSchema` instead. */
  export const outboundSchema =
    UnifiedAccountingCompanyinfoOutputFieldMappings$outboundSchema;
  /** @deprecated use `UnifiedAccountingCompanyinfoOutputFieldMappings$Outbound` instead. */
  export type Outbound =
    UnifiedAccountingCompanyinfoOutputFieldMappings$Outbound;
}

/** @internal */
export const UnifiedAccountingCompanyinfoOutputRemoteData$inboundSchema:
  z.ZodType<
    UnifiedAccountingCompanyinfoOutputRemoteData,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type UnifiedAccountingCompanyinfoOutputRemoteData$Outbound = {};

/** @internal */
export const UnifiedAccountingCompanyinfoOutputRemoteData$outboundSchema:
  z.ZodType<
    UnifiedAccountingCompanyinfoOutputRemoteData$Outbound,
    z.ZodTypeDef,
    UnifiedAccountingCompanyinfoOutputRemoteData
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingCompanyinfoOutputRemoteData$ {
  /** @deprecated use `UnifiedAccountingCompanyinfoOutputRemoteData$inboundSchema` instead. */
  export const inboundSchema =
    UnifiedAccountingCompanyinfoOutputRemoteData$inboundSchema;
  /** @deprecated use `UnifiedAccountingCompanyinfoOutputRemoteData$outboundSchema` instead. */
  export const outboundSchema =
    UnifiedAccountingCompanyinfoOutputRemoteData$outboundSchema;
  /** @deprecated use `UnifiedAccountingCompanyinfoOutputRemoteData$Outbound` instead. */
  export type Outbound = UnifiedAccountingCompanyinfoOutputRemoteData$Outbound;
}

/** @internal */
export const UnifiedAccountingCompanyinfoOutput$inboundSchema: z.ZodType<
  UnifiedAccountingCompanyinfoOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.nullable(z.string()).optional(),
  legal_name: z.nullable(z.string()).optional(),
  tax_number: z.nullable(z.string()).optional(),
  fiscal_year_end_month: z.nullable(z.number()).optional(),
  fiscal_year_end_day: z.nullable(z.number()).optional(),
  currency: z.nullable(z.string()).optional(),
  urls: z.nullable(z.array(z.string())).optional(),
  tracking_categories: z.nullable(z.array(z.string())).optional(),
  field_mappings: z.nullable(
    z.lazy(() => UnifiedAccountingCompanyinfoOutputFieldMappings$inboundSchema),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
  remote_data: z.nullable(
    z.lazy(() => UnifiedAccountingCompanyinfoOutputRemoteData$inboundSchema),
  ).optional(),
  remote_created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "legal_name": "legalName",
    "tax_number": "taxNumber",
    "fiscal_year_end_month": "fiscalYearEndMonth",
    "fiscal_year_end_day": "fiscalYearEndDay",
    "tracking_categories": "trackingCategories",
    "field_mappings": "fieldMappings",
    "remote_id": "remoteId",
    "remote_data": "remoteData",
    "remote_created_at": "remoteCreatedAt",
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
  });
});

/** @internal */
export type UnifiedAccountingCompanyinfoOutput$Outbound = {
  name?: string | null | undefined;
  legal_name?: string | null | undefined;
  tax_number?: string | null | undefined;
  fiscal_year_end_month?: number | null | undefined;
  fiscal_year_end_day?: number | null | undefined;
  currency?: string | null | undefined;
  urls?: Array<string> | null | undefined;
  tracking_categories?: Array<string> | null | undefined;
  field_mappings?:
    | UnifiedAccountingCompanyinfoOutputFieldMappings$Outbound
    | null
    | undefined;
  id?: string | null | undefined;
  remote_id?: string | null | undefined;
  remote_data?:
    | UnifiedAccountingCompanyinfoOutputRemoteData$Outbound
    | null
    | undefined;
  remote_created_at?: string | null | undefined;
  created_at?: string | null | undefined;
  modified_at?: string | null | undefined;
};

/** @internal */
export const UnifiedAccountingCompanyinfoOutput$outboundSchema: z.ZodType<
  UnifiedAccountingCompanyinfoOutput$Outbound,
  z.ZodTypeDef,
  UnifiedAccountingCompanyinfoOutput
> = z.object({
  name: z.nullable(z.string()).optional(),
  legalName: z.nullable(z.string()).optional(),
  taxNumber: z.nullable(z.string()).optional(),
  fiscalYearEndMonth: z.nullable(z.number()).optional(),
  fiscalYearEndDay: z.nullable(z.number()).optional(),
  currency: z.nullable(z.string()).optional(),
  urls: z.nullable(z.array(z.string())).optional(),
  trackingCategories: z.nullable(z.array(z.string())).optional(),
  fieldMappings: z.nullable(
    z.lazy(() =>
      UnifiedAccountingCompanyinfoOutputFieldMappings$outboundSchema
    ),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  remoteData: z.nullable(
    z.lazy(() => UnifiedAccountingCompanyinfoOutputRemoteData$outboundSchema),
  ).optional(),
  remoteCreatedAt: z.nullable(z.date().transform(v => v.toISOString()))
    .optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
    legalName: "legal_name",
    taxNumber: "tax_number",
    fiscalYearEndMonth: "fiscal_year_end_month",
    fiscalYearEndDay: "fiscal_year_end_day",
    trackingCategories: "tracking_categories",
    fieldMappings: "field_mappings",
    remoteId: "remote_id",
    remoteData: "remote_data",
    remoteCreatedAt: "remote_created_at",
    createdAt: "created_at",
    modifiedAt: "modified_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingCompanyinfoOutput$ {
  /** @deprecated use `UnifiedAccountingCompanyinfoOutput$inboundSchema` instead. */
  export const inboundSchema = UnifiedAccountingCompanyinfoOutput$inboundSchema;
  /** @deprecated use `UnifiedAccountingCompanyinfoOutput$outboundSchema` instead. */
  export const outboundSchema =
    UnifiedAccountingCompanyinfoOutput$outboundSchema;
  /** @deprecated use `UnifiedAccountingCompanyinfoOutput$Outbound` instead. */
  export type Outbound = UnifiedAccountingCompanyinfoOutput$Outbound;
}
