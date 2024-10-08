/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  DeductionItem,
  DeductionItem$inboundSchema,
  DeductionItem$Outbound,
  DeductionItem$outboundSchema,
} from "./deductionitem.js";
import {
  EarningItem,
  EarningItem$inboundSchema,
  EarningItem$Outbound,
  EarningItem$outboundSchema,
} from "./earningitem.js";
import {
  TaxItem,
  TaxItem$inboundSchema,
  TaxItem$Outbound,
  TaxItem$outboundSchema,
} from "./taxitem.js";

/**
 * The custom field mappings of the object between the remote 3rd party & Panora
 */
export type UnifiedHrisEmployeepayrollrunOutputFieldMappings = {};

/**
 * The remote data of the employee payroll run in the context of the 3rd Party
 */
export type UnifiedHrisEmployeepayrollrunOutputRemoteData = {};

export type UnifiedHrisEmployeepayrollrunOutput = {
  /**
   * The UUID of the associated employee
   */
  employeeId?: string | null | undefined;
  /**
   * The UUID of the associated payroll run
   */
  payrollRunId?: string | null | undefined;
  /**
   * The gross pay amount
   */
  grossPay?: number | null | undefined;
  /**
   * The net pay amount
   */
  netPay?: number | null | undefined;
  /**
   * The start date of the pay period
   */
  startDate?: Date | null | undefined;
  /**
   * The end date of the pay period
   */
  endDate?: Date | null | undefined;
  /**
   * The date the check was issued
   */
  checkDate?: Date | null | undefined;
  /**
   * The list of deductions for this payroll run
   */
  deductions?: Array<DeductionItem> | null | undefined;
  /**
   * The list of earnings for this payroll run
   */
  earnings?: Array<EarningItem> | null | undefined;
  /**
   * The list of taxes for this payroll run
   */
  taxes?: Array<TaxItem> | null | undefined;
  /**
   * The custom field mappings of the object between the remote 3rd party & Panora
   */
  fieldMappings?:
    | UnifiedHrisEmployeepayrollrunOutputFieldMappings
    | null
    | undefined;
  /**
   * The UUID of the employee payroll run record
   */
  id?: string | null | undefined;
  /**
   * The remote ID of the employee payroll run in the context of the 3rd Party
   */
  remoteId?: string | null | undefined;
  /**
   * The remote data of the employee payroll run in the context of the 3rd Party
   */
  remoteData?: UnifiedHrisEmployeepayrollrunOutputRemoteData | null | undefined;
  /**
   * The date when the employee payroll run was created in the 3rd party system
   */
  remoteCreatedAt?: Date | null | undefined;
  /**
   * The created date of the employee payroll run record
   */
  createdAt?: Date | null | undefined;
  /**
   * The last modified date of the employee payroll run record
   */
  modifiedAt?: Date | null | undefined;
  /**
   * Indicates if the employee payroll run was deleted in the remote system
   */
  remoteWasDeleted?: boolean | null | undefined;
};

/** @internal */
export const UnifiedHrisEmployeepayrollrunOutputFieldMappings$inboundSchema:
  z.ZodType<
    UnifiedHrisEmployeepayrollrunOutputFieldMappings,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type UnifiedHrisEmployeepayrollrunOutputFieldMappings$Outbound = {};

/** @internal */
export const UnifiedHrisEmployeepayrollrunOutputFieldMappings$outboundSchema:
  z.ZodType<
    UnifiedHrisEmployeepayrollrunOutputFieldMappings$Outbound,
    z.ZodTypeDef,
    UnifiedHrisEmployeepayrollrunOutputFieldMappings
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedHrisEmployeepayrollrunOutputFieldMappings$ {
  /** @deprecated use `UnifiedHrisEmployeepayrollrunOutputFieldMappings$inboundSchema` instead. */
  export const inboundSchema =
    UnifiedHrisEmployeepayrollrunOutputFieldMappings$inboundSchema;
  /** @deprecated use `UnifiedHrisEmployeepayrollrunOutputFieldMappings$outboundSchema` instead. */
  export const outboundSchema =
    UnifiedHrisEmployeepayrollrunOutputFieldMappings$outboundSchema;
  /** @deprecated use `UnifiedHrisEmployeepayrollrunOutputFieldMappings$Outbound` instead. */
  export type Outbound =
    UnifiedHrisEmployeepayrollrunOutputFieldMappings$Outbound;
}

/** @internal */
export const UnifiedHrisEmployeepayrollrunOutputRemoteData$inboundSchema:
  z.ZodType<
    UnifiedHrisEmployeepayrollrunOutputRemoteData,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type UnifiedHrisEmployeepayrollrunOutputRemoteData$Outbound = {};

/** @internal */
export const UnifiedHrisEmployeepayrollrunOutputRemoteData$outboundSchema:
  z.ZodType<
    UnifiedHrisEmployeepayrollrunOutputRemoteData$Outbound,
    z.ZodTypeDef,
    UnifiedHrisEmployeepayrollrunOutputRemoteData
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedHrisEmployeepayrollrunOutputRemoteData$ {
  /** @deprecated use `UnifiedHrisEmployeepayrollrunOutputRemoteData$inboundSchema` instead. */
  export const inboundSchema =
    UnifiedHrisEmployeepayrollrunOutputRemoteData$inboundSchema;
  /** @deprecated use `UnifiedHrisEmployeepayrollrunOutputRemoteData$outboundSchema` instead. */
  export const outboundSchema =
    UnifiedHrisEmployeepayrollrunOutputRemoteData$outboundSchema;
  /** @deprecated use `UnifiedHrisEmployeepayrollrunOutputRemoteData$Outbound` instead. */
  export type Outbound = UnifiedHrisEmployeepayrollrunOutputRemoteData$Outbound;
}

/** @internal */
export const UnifiedHrisEmployeepayrollrunOutput$inboundSchema: z.ZodType<
  UnifiedHrisEmployeepayrollrunOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  employee_id: z.nullable(z.string()).optional(),
  payroll_run_id: z.nullable(z.string()).optional(),
  gross_pay: z.nullable(z.number()).optional(),
  net_pay: z.nullable(z.number()).optional(),
  start_date: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  end_date: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  check_date: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  deductions: z.nullable(z.array(DeductionItem$inboundSchema)).optional(),
  earnings: z.nullable(z.array(EarningItem$inboundSchema)).optional(),
  taxes: z.nullable(z.array(TaxItem$inboundSchema)).optional(),
  field_mappings: z.nullable(
    z.lazy(() =>
      UnifiedHrisEmployeepayrollrunOutputFieldMappings$inboundSchema
    ),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
  remote_data: z.nullable(
    z.lazy(() => UnifiedHrisEmployeepayrollrunOutputRemoteData$inboundSchema),
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
  remote_was_deleted: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    "employee_id": "employeeId",
    "payroll_run_id": "payrollRunId",
    "gross_pay": "grossPay",
    "net_pay": "netPay",
    "start_date": "startDate",
    "end_date": "endDate",
    "check_date": "checkDate",
    "field_mappings": "fieldMappings",
    "remote_id": "remoteId",
    "remote_data": "remoteData",
    "remote_created_at": "remoteCreatedAt",
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "remote_was_deleted": "remoteWasDeleted",
  });
});

/** @internal */
export type UnifiedHrisEmployeepayrollrunOutput$Outbound = {
  employee_id?: string | null | undefined;
  payroll_run_id?: string | null | undefined;
  gross_pay?: number | null | undefined;
  net_pay?: number | null | undefined;
  start_date?: string | null | undefined;
  end_date?: string | null | undefined;
  check_date?: string | null | undefined;
  deductions?: Array<DeductionItem$Outbound> | null | undefined;
  earnings?: Array<EarningItem$Outbound> | null | undefined;
  taxes?: Array<TaxItem$Outbound> | null | undefined;
  field_mappings?:
    | UnifiedHrisEmployeepayrollrunOutputFieldMappings$Outbound
    | null
    | undefined;
  id?: string | null | undefined;
  remote_id?: string | null | undefined;
  remote_data?:
    | UnifiedHrisEmployeepayrollrunOutputRemoteData$Outbound
    | null
    | undefined;
  remote_created_at?: string | null | undefined;
  created_at?: string | null | undefined;
  modified_at?: string | null | undefined;
  remote_was_deleted?: boolean | null | undefined;
};

/** @internal */
export const UnifiedHrisEmployeepayrollrunOutput$outboundSchema: z.ZodType<
  UnifiedHrisEmployeepayrollrunOutput$Outbound,
  z.ZodTypeDef,
  UnifiedHrisEmployeepayrollrunOutput
> = z.object({
  employeeId: z.nullable(z.string()).optional(),
  payrollRunId: z.nullable(z.string()).optional(),
  grossPay: z.nullable(z.number()).optional(),
  netPay: z.nullable(z.number()).optional(),
  startDate: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  endDate: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  checkDate: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  deductions: z.nullable(z.array(DeductionItem$outboundSchema)).optional(),
  earnings: z.nullable(z.array(EarningItem$outboundSchema)).optional(),
  taxes: z.nullable(z.array(TaxItem$outboundSchema)).optional(),
  fieldMappings: z.nullable(
    z.lazy(() =>
      UnifiedHrisEmployeepayrollrunOutputFieldMappings$outboundSchema
    ),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  remoteData: z.nullable(
    z.lazy(() => UnifiedHrisEmployeepayrollrunOutputRemoteData$outboundSchema),
  ).optional(),
  remoteCreatedAt: z.nullable(z.date().transform(v => v.toISOString()))
    .optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  remoteWasDeleted: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    employeeId: "employee_id",
    payrollRunId: "payroll_run_id",
    grossPay: "gross_pay",
    netPay: "net_pay",
    startDate: "start_date",
    endDate: "end_date",
    checkDate: "check_date",
    fieldMappings: "field_mappings",
    remoteId: "remote_id",
    remoteData: "remote_data",
    remoteCreatedAt: "remote_created_at",
    createdAt: "created_at",
    modifiedAt: "modified_at",
    remoteWasDeleted: "remote_was_deleted",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedHrisEmployeepayrollrunOutput$ {
  /** @deprecated use `UnifiedHrisEmployeepayrollrunOutput$inboundSchema` instead. */
  export const inboundSchema =
    UnifiedHrisEmployeepayrollrunOutput$inboundSchema;
  /** @deprecated use `UnifiedHrisEmployeepayrollrunOutput$outboundSchema` instead. */
  export const outboundSchema =
    UnifiedHrisEmployeepayrollrunOutput$outboundSchema;
  /** @deprecated use `UnifiedHrisEmployeepayrollrunOutput$Outbound` instead. */
  export type Outbound = UnifiedHrisEmployeepayrollrunOutput$Outbound;
}
