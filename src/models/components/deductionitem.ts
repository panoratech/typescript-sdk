/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type DeductionItem = {
  /**
   * The name of the deduction
   */
  name?: string | null | undefined;
  /**
   * The amount of employee deduction
   */
  employeeDeduction?: number | null | undefined;
  /**
   * The amount of company deduction
   */
  companyDeduction?: number | null | undefined;
};

/** @internal */
export const DeductionItem$inboundSchema: z.ZodType<
  DeductionItem,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.nullable(z.string()).optional(),
  employee_deduction: z.nullable(z.number()).optional(),
  company_deduction: z.nullable(z.number()).optional(),
}).transform((v) => {
  return remap$(v, {
    "employee_deduction": "employeeDeduction",
    "company_deduction": "companyDeduction",
  });
});

/** @internal */
export type DeductionItem$Outbound = {
  name?: string | null | undefined;
  employee_deduction?: number | null | undefined;
  company_deduction?: number | null | undefined;
};

/** @internal */
export const DeductionItem$outboundSchema: z.ZodType<
  DeductionItem$Outbound,
  z.ZodTypeDef,
  DeductionItem
> = z.object({
  name: z.nullable(z.string()).optional(),
  employeeDeduction: z.nullable(z.number()).optional(),
  companyDeduction: z.nullable(z.number()).optional(),
}).transform((v) => {
  return remap$(v, {
    employeeDeduction: "employee_deduction",
    companyDeduction: "company_deduction",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeductionItem$ {
  /** @deprecated use `DeductionItem$inboundSchema` instead. */
  export const inboundSchema = DeductionItem$inboundSchema;
  /** @deprecated use `DeductionItem$outboundSchema` instead. */
  export const outboundSchema = DeductionItem$outboundSchema;
  /** @deprecated use `DeductionItem$Outbound` instead. */
  export type Outbound = DeductionItem$Outbound;
}
