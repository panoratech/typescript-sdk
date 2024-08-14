/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import {
    LineItem,
    LineItem$inboundSchema,
    LineItem$Outbound,
    LineItem$outboundSchema,
} from "./lineitem.js";
import * as z from "zod";

/**
 * The currency used in the cash flow statement
 */
export enum UnifiedAccountingCashflowstatementOutputCurrency {
    Aed = "AED",
    Afn = "AFN",
    All = "ALL",
    Amd = "AMD",
    Ang = "ANG",
    Aoa = "AOA",
    Ars = "ARS",
    Aud = "AUD",
    Awg = "AWG",
    Azn = "AZN",
    Bam = "BAM",
    Bbd = "BBD",
    Bdt = "BDT",
    Bgn = "BGN",
    Bhd = "BHD",
    Bif = "BIF",
    Bmd = "BMD",
    Bnd = "BND",
    Bob = "BOB",
    Brl = "BRL",
    Bsd = "BSD",
    Btn = "BTN",
    Bwp = "BWP",
    Byn = "BYN",
    Bzd = "BZD",
    Cad = "CAD",
    Cdf = "CDF",
    Chf = "CHF",
    Clp = "CLP",
    Cny = "CNY",
    Cop = "COP",
    Crc = "CRC",
    Cup = "CUP",
    Cve = "CVE",
    Czk = "CZK",
    Djf = "DJF",
    Dkk = "DKK",
    Dop = "DOP",
    Dzd = "DZD",
    Egp = "EGP",
    Ern = "ERN",
    Etb = "ETB",
    Eur = "EUR",
    Fjd = "FJD",
    Fkp = "FKP",
    Fok = "FOK",
    Gbp = "GBP",
    Gel = "GEL",
    Ggp = "GGP",
    Ghs = "GHS",
    Gip = "GIP",
    Gmd = "GMD",
    Gnf = "GNF",
    Gtq = "GTQ",
    Gyd = "GYD",
    Hkd = "HKD",
    Hnl = "HNL",
    Hrk = "HRK",
    Htg = "HTG",
    Huf = "HUF",
    Idr = "IDR",
    Ils = "ILS",
    Imp = "IMP",
    Inr = "INR",
    Iqd = "IQD",
    Irr = "IRR",
    Isk = "ISK",
    Jep = "JEP",
    Jmd = "JMD",
    Jod = "JOD",
    Jpy = "JPY",
    Kes = "KES",
    Kgs = "KGS",
    Khr = "KHR",
    Kid = "KID",
    Kmf = "KMF",
    Krw = "KRW",
    Kwd = "KWD",
    Kyd = "KYD",
    Kzt = "KZT",
    Lak = "LAK",
    Lbp = "LBP",
    Lkr = "LKR",
    Lrd = "LRD",
    Lsl = "LSL",
    Lyd = "LYD",
    Mad = "MAD",
    Mdl = "MDL",
    Mga = "MGA",
    Mkd = "MKD",
    Mmk = "MMK",
    Mnt = "MNT",
    Mop = "MOP",
    Mru = "MRU",
    Mur = "MUR",
    Mvr = "MVR",
    Mwk = "MWK",
    Mxn = "MXN",
    Myr = "MYR",
    Mzn = "MZN",
    Nad = "NAD",
    Ngn = "NGN",
    Nio = "NIO",
    Nok = "NOK",
    Npr = "NPR",
    Nzd = "NZD",
    Omr = "OMR",
    Pab = "PAB",
    Pen = "PEN",
    Pgk = "PGK",
    Php = "PHP",
    Pkr = "PKR",
    Pln = "PLN",
    Pyg = "PYG",
    Qar = "QAR",
    Ron = "RON",
    Rsd = "RSD",
    Rub = "RUB",
    Rwf = "RWF",
    Sar = "SAR",
    Sbd = "SBD",
    Scr = "SCR",
    Sdg = "SDG",
    Sek = "SEK",
    Sgd = "SGD",
    Shp = "SHP",
    Sle = "SLE",
    Sll = "SLL",
    Sos = "SOS",
    Srd = "SRD",
    Ssp = "SSP",
    Stn = "STN",
    Syp = "SYP",
    Szl = "SZL",
    Thb = "THB",
    Tjs = "TJS",
    Tmt = "TMT",
    Tnd = "TND",
    Top = "TOP",
    Try = "TRY",
    Ttd = "TTD",
    Tvd = "TVD",
    Twd = "TWD",
    Tzs = "TZS",
    Uah = "UAH",
    Ugx = "UGX",
    Usd = "USD",
    Uyu = "UYU",
    Uzs = "UZS",
    Ves = "VES",
    Vnd = "VND",
    Vuv = "VUV",
    Wst = "WST",
    Xaf = "XAF",
    Xcd = "XCD",
    Xdr = "XDR",
    Xof = "XOF",
    Xpf = "XPF",
    Yer = "YER",
    Zar = "ZAR",
    Zmw = "ZMW",
    Zwl = "ZWL",
}

/**
 * The custom field mappings of the object between the remote 3rd party & Panora
 */
export type UnifiedAccountingCashflowstatementOutputFieldMappings = {};

/**
 * The remote data of the cash flow statement in the context of the 3rd Party
 */
export type UnifiedAccountingCashflowstatementOutputRemoteData = {};

export type UnifiedAccountingCashflowstatementOutput = {
    /**
     * The name of the cash flow statement
     */
    name?: string | null | undefined;
    /**
     * The currency used in the cash flow statement
     */
    currency?: UnifiedAccountingCashflowstatementOutputCurrency | null | undefined;
    /**
     * The UUID of the associated company
     */
    companyId?: string | null | undefined;
    /**
     * The start date of the period covered by the cash flow statement
     */
    startPeriod?: Date | null | undefined;
    /**
     * The end date of the period covered by the cash flow statement
     */
    endPeriod?: Date | null | undefined;
    /**
     * The cash balance at the beginning of the period
     */
    cashAtBeginningOfPeriod?: number | null | undefined;
    /**
     * The cash balance at the end of the period
     */
    cashAtEndOfPeriod?: number | null | undefined;
    /**
     * The date when the cash flow statement was generated in the remote system
     */
    remoteGeneratedAt?: Date | null | undefined;
    /**
     * The report items associated with this cash flow statement
     */
    lineItems?: Array<LineItem> | undefined;
    /**
     * The custom field mappings of the object between the remote 3rd party & Panora
     */
    fieldMappings?: UnifiedAccountingCashflowstatementOutputFieldMappings | null | undefined;
    /**
     * The UUID of the cash flow statement record
     */
    id?: string | null | undefined;
    /**
     * The remote ID of the cash flow statement in the context of the 3rd Party
     */
    remoteId?: string | null | undefined;
    /**
     * The remote data of the cash flow statement in the context of the 3rd Party
     */
    remoteData?: UnifiedAccountingCashflowstatementOutputRemoteData | null | undefined;
    /**
     * The created date of the cash flow statement record
     */
    createdAt?: Date | null | undefined;
    /**
     * The last modified date of the cash flow statement record
     */
    modifiedAt?: Date | null | undefined;
};

/** @internal */
export const UnifiedAccountingCashflowstatementOutputCurrency$inboundSchema: z.ZodNativeEnum<
    typeof UnifiedAccountingCashflowstatementOutputCurrency
> = z.nativeEnum(UnifiedAccountingCashflowstatementOutputCurrency);

/** @internal */
export const UnifiedAccountingCashflowstatementOutputCurrency$outboundSchema: z.ZodNativeEnum<
    typeof UnifiedAccountingCashflowstatementOutputCurrency
> = UnifiedAccountingCashflowstatementOutputCurrency$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingCashflowstatementOutputCurrency$ {
    /** @deprecated use `UnifiedAccountingCashflowstatementOutputCurrency$inboundSchema` instead. */
    export const inboundSchema = UnifiedAccountingCashflowstatementOutputCurrency$inboundSchema;
    /** @deprecated use `UnifiedAccountingCashflowstatementOutputCurrency$outboundSchema` instead. */
    export const outboundSchema = UnifiedAccountingCashflowstatementOutputCurrency$outboundSchema;
}

/** @internal */
export const UnifiedAccountingCashflowstatementOutputFieldMappings$inboundSchema: z.ZodType<
    UnifiedAccountingCashflowstatementOutputFieldMappings,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedAccountingCashflowstatementOutputFieldMappings$Outbound = {};

/** @internal */
export const UnifiedAccountingCashflowstatementOutputFieldMappings$outboundSchema: z.ZodType<
    UnifiedAccountingCashflowstatementOutputFieldMappings$Outbound,
    z.ZodTypeDef,
    UnifiedAccountingCashflowstatementOutputFieldMappings
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingCashflowstatementOutputFieldMappings$ {
    /** @deprecated use `UnifiedAccountingCashflowstatementOutputFieldMappings$inboundSchema` instead. */
    export const inboundSchema =
        UnifiedAccountingCashflowstatementOutputFieldMappings$inboundSchema;
    /** @deprecated use `UnifiedAccountingCashflowstatementOutputFieldMappings$outboundSchema` instead. */
    export const outboundSchema =
        UnifiedAccountingCashflowstatementOutputFieldMappings$outboundSchema;
    /** @deprecated use `UnifiedAccountingCashflowstatementOutputFieldMappings$Outbound` instead. */
    export type Outbound = UnifiedAccountingCashflowstatementOutputFieldMappings$Outbound;
}

/** @internal */
export const UnifiedAccountingCashflowstatementOutputRemoteData$inboundSchema: z.ZodType<
    UnifiedAccountingCashflowstatementOutputRemoteData,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedAccountingCashflowstatementOutputRemoteData$Outbound = {};

/** @internal */
export const UnifiedAccountingCashflowstatementOutputRemoteData$outboundSchema: z.ZodType<
    UnifiedAccountingCashflowstatementOutputRemoteData$Outbound,
    z.ZodTypeDef,
    UnifiedAccountingCashflowstatementOutputRemoteData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingCashflowstatementOutputRemoteData$ {
    /** @deprecated use `UnifiedAccountingCashflowstatementOutputRemoteData$inboundSchema` instead. */
    export const inboundSchema = UnifiedAccountingCashflowstatementOutputRemoteData$inboundSchema;
    /** @deprecated use `UnifiedAccountingCashflowstatementOutputRemoteData$outboundSchema` instead. */
    export const outboundSchema = UnifiedAccountingCashflowstatementOutputRemoteData$outboundSchema;
    /** @deprecated use `UnifiedAccountingCashflowstatementOutputRemoteData$Outbound` instead. */
    export type Outbound = UnifiedAccountingCashflowstatementOutputRemoteData$Outbound;
}

/** @internal */
export const UnifiedAccountingCashflowstatementOutput$inboundSchema: z.ZodType<
    UnifiedAccountingCashflowstatementOutput,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        name: z.nullable(z.string()).optional(),
        currency: z
            .nullable(UnifiedAccountingCashflowstatementOutputCurrency$inboundSchema)
            .optional(),
        company_id: z.nullable(z.string()).optional(),
        start_period: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        end_period: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        cash_at_beginning_of_period: z.nullable(z.number()).optional(),
        cash_at_end_of_period: z.nullable(z.number()).optional(),
        remote_generated_at: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        line_items: z.array(LineItem$inboundSchema).optional(),
        field_mappings: z
            .nullable(
                z.lazy(() => UnifiedAccountingCashflowstatementOutputFieldMappings$inboundSchema)
            )
            .optional(),
        id: z.nullable(z.string()).optional(),
        remote_id: z.nullable(z.string()).optional(),
        remote_data: z
            .nullable(
                z.lazy(() => UnifiedAccountingCashflowstatementOutputRemoteData$inboundSchema)
            )
            .optional(),
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
            company_id: "companyId",
            start_period: "startPeriod",
            end_period: "endPeriod",
            cash_at_beginning_of_period: "cashAtBeginningOfPeriod",
            cash_at_end_of_period: "cashAtEndOfPeriod",
            remote_generated_at: "remoteGeneratedAt",
            line_items: "lineItems",
            field_mappings: "fieldMappings",
            remote_id: "remoteId",
            remote_data: "remoteData",
            created_at: "createdAt",
            modified_at: "modifiedAt",
        });
    });

/** @internal */
export type UnifiedAccountingCashflowstatementOutput$Outbound = {
    name?: string | null | undefined;
    currency?: string | null | undefined;
    company_id?: string | null | undefined;
    start_period?: string | null | undefined;
    end_period?: string | null | undefined;
    cash_at_beginning_of_period?: number | null | undefined;
    cash_at_end_of_period?: number | null | undefined;
    remote_generated_at?: string | null | undefined;
    line_items?: Array<LineItem$Outbound> | undefined;
    field_mappings?:
        | UnifiedAccountingCashflowstatementOutputFieldMappings$Outbound
        | null
        | undefined;
    id?: string | null | undefined;
    remote_id?: string | null | undefined;
    remote_data?: UnifiedAccountingCashflowstatementOutputRemoteData$Outbound | null | undefined;
    created_at?: string | null | undefined;
    modified_at?: string | null | undefined;
};

/** @internal */
export const UnifiedAccountingCashflowstatementOutput$outboundSchema: z.ZodType<
    UnifiedAccountingCashflowstatementOutput$Outbound,
    z.ZodTypeDef,
    UnifiedAccountingCashflowstatementOutput
> = z
    .object({
        name: z.nullable(z.string()).optional(),
        currency: z
            .nullable(UnifiedAccountingCashflowstatementOutputCurrency$outboundSchema)
            .optional(),
        companyId: z.nullable(z.string()).optional(),
        startPeriod: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        endPeriod: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        cashAtBeginningOfPeriod: z.nullable(z.number()).optional(),
        cashAtEndOfPeriod: z.nullable(z.number()).optional(),
        remoteGeneratedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        lineItems: z.array(LineItem$outboundSchema).optional(),
        fieldMappings: z
            .nullable(
                z.lazy(() => UnifiedAccountingCashflowstatementOutputFieldMappings$outboundSchema)
            )
            .optional(),
        id: z.nullable(z.string()).optional(),
        remoteId: z.nullable(z.string()).optional(),
        remoteData: z
            .nullable(
                z.lazy(() => UnifiedAccountingCashflowstatementOutputRemoteData$outboundSchema)
            )
            .optional(),
        createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        modifiedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            companyId: "company_id",
            startPeriod: "start_period",
            endPeriod: "end_period",
            cashAtBeginningOfPeriod: "cash_at_beginning_of_period",
            cashAtEndOfPeriod: "cash_at_end_of_period",
            remoteGeneratedAt: "remote_generated_at",
            lineItems: "line_items",
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
export namespace UnifiedAccountingCashflowstatementOutput$ {
    /** @deprecated use `UnifiedAccountingCashflowstatementOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedAccountingCashflowstatementOutput$inboundSchema;
    /** @deprecated use `UnifiedAccountingCashflowstatementOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedAccountingCashflowstatementOutput$outboundSchema;
    /** @deprecated use `UnifiedAccountingCashflowstatementOutput$Outbound` instead. */
    export type Outbound = UnifiedAccountingCashflowstatementOutput$Outbound;
}
