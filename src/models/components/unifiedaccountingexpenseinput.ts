/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  LineItem,
  LineItem$inboundSchema,
  LineItem$Outbound,
  LineItem$outboundSchema,
} from "./lineitem.js";

/**
 * The custom field mappings of the object between the remote 3rd party & Panora
 */
export type UnifiedAccountingExpenseInputFieldMappings = {};

export type UnifiedAccountingExpenseInput = {
  /**
   * The date of the expense transaction
   */
  transactionDate?: Date | null | undefined;
  /**
   * The total amount of the expense
   */
  totalAmount?: number | null | undefined;
  /**
   * The sub-total amount of the expense (before tax)
   */
  subTotal?: number | null | undefined;
  /**
   * The total tax amount of the expense
   */
  totalTaxAmount?: number | null | undefined;
  /**
   * The currency of the expense
   */
  currency?: string | null | undefined;
  /**
   * The exchange rate applied to the expense
   */
  exchangeRate?: string | null | undefined;
  /**
   * A memo or description for the expense
   */
  memo?: string | null | undefined;
  /**
   * The UUID of the associated account
   */
  accountId?: string | null | undefined;
  /**
   * The UUID of the associated contact
   */
  contactId?: string | null | undefined;
  /**
   * The UUID of the associated company info
   */
  companyInfoId?: string | null | undefined;
  /**
   * The UUIDs of the tracking categories associated with the expense
   */
  trackingCategories?: Array<string> | null | undefined;
  /**
   * The line items associated with this expense
   */
  lineItems?: Array<LineItem> | undefined;
  /**
   * The custom field mappings of the object between the remote 3rd party & Panora
   */
  fieldMappings?: UnifiedAccountingExpenseInputFieldMappings | null | undefined;
};

/** @internal */
export const UnifiedAccountingExpenseInputFieldMappings$inboundSchema:
  z.ZodType<UnifiedAccountingExpenseInputFieldMappings, z.ZodTypeDef, unknown> =
    z.object({});

/** @internal */
export type UnifiedAccountingExpenseInputFieldMappings$Outbound = {};

/** @internal */
export const UnifiedAccountingExpenseInputFieldMappings$outboundSchema:
  z.ZodType<
    UnifiedAccountingExpenseInputFieldMappings$Outbound,
    z.ZodTypeDef,
    UnifiedAccountingExpenseInputFieldMappings
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingExpenseInputFieldMappings$ {
  /** @deprecated use `UnifiedAccountingExpenseInputFieldMappings$inboundSchema` instead. */
  export const inboundSchema =
    UnifiedAccountingExpenseInputFieldMappings$inboundSchema;
  /** @deprecated use `UnifiedAccountingExpenseInputFieldMappings$outboundSchema` instead. */
  export const outboundSchema =
    UnifiedAccountingExpenseInputFieldMappings$outboundSchema;
  /** @deprecated use `UnifiedAccountingExpenseInputFieldMappings$Outbound` instead. */
  export type Outbound = UnifiedAccountingExpenseInputFieldMappings$Outbound;
}

/** @internal */
export const UnifiedAccountingExpenseInput$inboundSchema: z.ZodType<
  UnifiedAccountingExpenseInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  transaction_date: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  total_amount: z.nullable(z.number()).optional(),
  sub_total: z.nullable(z.number()).optional(),
  total_tax_amount: z.nullable(z.number()).optional(),
  currency: z.nullable(z.string()).optional(),
  exchange_rate: z.nullable(z.string()).optional(),
  memo: z.nullable(z.string()).optional(),
  account_id: z.nullable(z.string()).optional(),
  contact_id: z.nullable(z.string()).optional(),
  company_info_id: z.nullable(z.string()).optional(),
  tracking_categories: z.nullable(z.array(z.string())).optional(),
  line_items: z.array(LineItem$inboundSchema).optional(),
  field_mappings: z.nullable(
    z.lazy(() => UnifiedAccountingExpenseInputFieldMappings$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "transaction_date": "transactionDate",
    "total_amount": "totalAmount",
    "sub_total": "subTotal",
    "total_tax_amount": "totalTaxAmount",
    "exchange_rate": "exchangeRate",
    "account_id": "accountId",
    "contact_id": "contactId",
    "company_info_id": "companyInfoId",
    "tracking_categories": "trackingCategories",
    "line_items": "lineItems",
    "field_mappings": "fieldMappings",
  });
});

/** @internal */
export type UnifiedAccountingExpenseInput$Outbound = {
  transaction_date?: string | null | undefined;
  total_amount?: number | null | undefined;
  sub_total?: number | null | undefined;
  total_tax_amount?: number | null | undefined;
  currency?: string | null | undefined;
  exchange_rate?: string | null | undefined;
  memo?: string | null | undefined;
  account_id?: string | null | undefined;
  contact_id?: string | null | undefined;
  company_info_id?: string | null | undefined;
  tracking_categories?: Array<string> | null | undefined;
  line_items?: Array<LineItem$Outbound> | undefined;
  field_mappings?:
    | UnifiedAccountingExpenseInputFieldMappings$Outbound
    | null
    | undefined;
};

/** @internal */
export const UnifiedAccountingExpenseInput$outboundSchema: z.ZodType<
  UnifiedAccountingExpenseInput$Outbound,
  z.ZodTypeDef,
  UnifiedAccountingExpenseInput
> = z.object({
  transactionDate: z.nullable(z.date().transform(v => v.toISOString()))
    .optional(),
  totalAmount: z.nullable(z.number()).optional(),
  subTotal: z.nullable(z.number()).optional(),
  totalTaxAmount: z.nullable(z.number()).optional(),
  currency: z.nullable(z.string()).optional(),
  exchangeRate: z.nullable(z.string()).optional(),
  memo: z.nullable(z.string()).optional(),
  accountId: z.nullable(z.string()).optional(),
  contactId: z.nullable(z.string()).optional(),
  companyInfoId: z.nullable(z.string()).optional(),
  trackingCategories: z.nullable(z.array(z.string())).optional(),
  lineItems: z.array(LineItem$outboundSchema).optional(),
  fieldMappings: z.nullable(
    z.lazy(() => UnifiedAccountingExpenseInputFieldMappings$outboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    transactionDate: "transaction_date",
    totalAmount: "total_amount",
    subTotal: "sub_total",
    totalTaxAmount: "total_tax_amount",
    exchangeRate: "exchange_rate",
    accountId: "account_id",
    contactId: "contact_id",
    companyInfoId: "company_info_id",
    trackingCategories: "tracking_categories",
    lineItems: "line_items",
    fieldMappings: "field_mappings",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingExpenseInput$ {
  /** @deprecated use `UnifiedAccountingExpenseInput$inboundSchema` instead. */
  export const inboundSchema = UnifiedAccountingExpenseInput$inboundSchema;
  /** @deprecated use `UnifiedAccountingExpenseInput$outboundSchema` instead. */
  export const outboundSchema = UnifiedAccountingExpenseInput$outboundSchema;
  /** @deprecated use `UnifiedAccountingExpenseInput$Outbound` instead. */
  export type Outbound = UnifiedAccountingExpenseInput$Outbound;
}
