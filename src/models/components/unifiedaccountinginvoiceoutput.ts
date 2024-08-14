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
 * The currency of the invoice
 */
export enum UnifiedAccountingInvoiceOutputCurrency {
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
export type UnifiedAccountingInvoiceOutputFieldMappings = {};

/**
 * The remote data of the invoice in the context of the 3rd Party
 */
export type UnifiedAccountingInvoiceOutputRemoteData = {};

export type UnifiedAccountingInvoiceOutput = {
    /**
     * The type of the invoice
     */
    type?: string | null | undefined;
    /**
     * The invoice number
     */
    number?: string | null | undefined;
    /**
     * The date the invoice was issued
     */
    issueDate?: Date | null | undefined;
    /**
     * The due date of the invoice
     */
    dueDate?: Date | null | undefined;
    /**
     * The date the invoice was paid
     */
    paidOnDate?: Date | null | undefined;
    /**
     * A memo or note on the invoice
     */
    memo?: string | null | undefined;
    /**
     * The currency of the invoice
     */
    currency?: UnifiedAccountingInvoiceOutputCurrency | null | undefined;
    /**
     * The exchange rate applied to the invoice
     */
    exchangeRate?: string | null | undefined;
    /**
     * The total discount applied to the invoice
     */
    totalDiscount?: number | null | undefined;
    /**
     * The subtotal of the invoice
     */
    subTotal?: number | null | undefined;
    /**
     * The status of the invoice
     */
    status?: string | null | undefined;
    /**
     * The total tax amount on the invoice
     */
    totalTaxAmount?: number | null | undefined;
    /**
     * The total amount of the invoice
     */
    totalAmount?: number | null | undefined;
    /**
     * The remaining balance on the invoice
     */
    balance?: number | null | undefined;
    /**
     * The UUID of the associated contact
     */
    contactId?: string | null | undefined;
    /**
     * The UUID of the associated accounting period
     */
    accountingPeriodId?: string | null | undefined;
    /**
     * The UUIDs of the tracking categories associated with the invoice
     */
    trackingCategories?: Array<string> | null | undefined;
    /**
     * The line items associated with this invoice
     */
    lineItems?: Array<LineItem> | undefined;
    /**
     * The custom field mappings of the object between the remote 3rd party & Panora
     */
    fieldMappings?: UnifiedAccountingInvoiceOutputFieldMappings | null | undefined;
    /**
     * The UUID of the invoice record
     */
    id?: string | null | undefined;
    /**
     * The remote ID of the invoice in the context of the 3rd Party
     */
    remoteId?: string | null | undefined;
    /**
     * The remote data of the invoice in the context of the 3rd Party
     */
    remoteData?: UnifiedAccountingInvoiceOutputRemoteData | null | undefined;
    /**
     * The date when the invoice was last updated in the remote system
     */
    remoteUpdatedAt?: Date | null | undefined;
    /**
     * The created date of the invoice record
     */
    createdAt?: Date | null | undefined;
    /**
     * The last modified date of the invoice record
     */
    modifiedAt?: Date | null | undefined;
};

/** @internal */
export const UnifiedAccountingInvoiceOutputCurrency$inboundSchema: z.ZodNativeEnum<
    typeof UnifiedAccountingInvoiceOutputCurrency
> = z.nativeEnum(UnifiedAccountingInvoiceOutputCurrency);

/** @internal */
export const UnifiedAccountingInvoiceOutputCurrency$outboundSchema: z.ZodNativeEnum<
    typeof UnifiedAccountingInvoiceOutputCurrency
> = UnifiedAccountingInvoiceOutputCurrency$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingInvoiceOutputCurrency$ {
    /** @deprecated use `UnifiedAccountingInvoiceOutputCurrency$inboundSchema` instead. */
    export const inboundSchema = UnifiedAccountingInvoiceOutputCurrency$inboundSchema;
    /** @deprecated use `UnifiedAccountingInvoiceOutputCurrency$outboundSchema` instead. */
    export const outboundSchema = UnifiedAccountingInvoiceOutputCurrency$outboundSchema;
}

/** @internal */
export const UnifiedAccountingInvoiceOutputFieldMappings$inboundSchema: z.ZodType<
    UnifiedAccountingInvoiceOutputFieldMappings,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedAccountingInvoiceOutputFieldMappings$Outbound = {};

/** @internal */
export const UnifiedAccountingInvoiceOutputFieldMappings$outboundSchema: z.ZodType<
    UnifiedAccountingInvoiceOutputFieldMappings$Outbound,
    z.ZodTypeDef,
    UnifiedAccountingInvoiceOutputFieldMappings
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingInvoiceOutputFieldMappings$ {
    /** @deprecated use `UnifiedAccountingInvoiceOutputFieldMappings$inboundSchema` instead. */
    export const inboundSchema = UnifiedAccountingInvoiceOutputFieldMappings$inboundSchema;
    /** @deprecated use `UnifiedAccountingInvoiceOutputFieldMappings$outboundSchema` instead. */
    export const outboundSchema = UnifiedAccountingInvoiceOutputFieldMappings$outboundSchema;
    /** @deprecated use `UnifiedAccountingInvoiceOutputFieldMappings$Outbound` instead. */
    export type Outbound = UnifiedAccountingInvoiceOutputFieldMappings$Outbound;
}

/** @internal */
export const UnifiedAccountingInvoiceOutputRemoteData$inboundSchema: z.ZodType<
    UnifiedAccountingInvoiceOutputRemoteData,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedAccountingInvoiceOutputRemoteData$Outbound = {};

/** @internal */
export const UnifiedAccountingInvoiceOutputRemoteData$outboundSchema: z.ZodType<
    UnifiedAccountingInvoiceOutputRemoteData$Outbound,
    z.ZodTypeDef,
    UnifiedAccountingInvoiceOutputRemoteData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingInvoiceOutputRemoteData$ {
    /** @deprecated use `UnifiedAccountingInvoiceOutputRemoteData$inboundSchema` instead. */
    export const inboundSchema = UnifiedAccountingInvoiceOutputRemoteData$inboundSchema;
    /** @deprecated use `UnifiedAccountingInvoiceOutputRemoteData$outboundSchema` instead. */
    export const outboundSchema = UnifiedAccountingInvoiceOutputRemoteData$outboundSchema;
    /** @deprecated use `UnifiedAccountingInvoiceOutputRemoteData$Outbound` instead. */
    export type Outbound = UnifiedAccountingInvoiceOutputRemoteData$Outbound;
}

/** @internal */
export const UnifiedAccountingInvoiceOutput$inboundSchema: z.ZodType<
    UnifiedAccountingInvoiceOutput,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        type: z.nullable(z.string()).optional(),
        number: z.nullable(z.string()).optional(),
        issue_date: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        due_date: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        paid_on_date: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        memo: z.nullable(z.string()).optional(),
        currency: z.nullable(UnifiedAccountingInvoiceOutputCurrency$inboundSchema).optional(),
        exchange_rate: z.nullable(z.string()).optional(),
        total_discount: z.nullable(z.number()).optional(),
        sub_total: z.nullable(z.number()).optional(),
        status: z.nullable(z.string()).optional(),
        total_tax_amount: z.nullable(z.number()).optional(),
        total_amount: z.nullable(z.number()).optional(),
        balance: z.nullable(z.number()).optional(),
        contact_id: z.nullable(z.string()).optional(),
        accounting_period_id: z.nullable(z.string()).optional(),
        tracking_categories: z.nullable(z.array(z.string())).optional(),
        line_items: z.array(LineItem$inboundSchema).optional(),
        field_mappings: z
            .nullable(z.lazy(() => UnifiedAccountingInvoiceOutputFieldMappings$inboundSchema))
            .optional(),
        id: z.nullable(z.string()).optional(),
        remote_id: z.nullable(z.string()).optional(),
        remote_data: z
            .nullable(z.lazy(() => UnifiedAccountingInvoiceOutputRemoteData$inboundSchema))
            .optional(),
        remote_updated_at: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
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
            issue_date: "issueDate",
            due_date: "dueDate",
            paid_on_date: "paidOnDate",
            exchange_rate: "exchangeRate",
            total_discount: "totalDiscount",
            sub_total: "subTotal",
            total_tax_amount: "totalTaxAmount",
            total_amount: "totalAmount",
            contact_id: "contactId",
            accounting_period_id: "accountingPeriodId",
            tracking_categories: "trackingCategories",
            line_items: "lineItems",
            field_mappings: "fieldMappings",
            remote_id: "remoteId",
            remote_data: "remoteData",
            remote_updated_at: "remoteUpdatedAt",
            created_at: "createdAt",
            modified_at: "modifiedAt",
        });
    });

/** @internal */
export type UnifiedAccountingInvoiceOutput$Outbound = {
    type?: string | null | undefined;
    number?: string | null | undefined;
    issue_date?: string | null | undefined;
    due_date?: string | null | undefined;
    paid_on_date?: string | null | undefined;
    memo?: string | null | undefined;
    currency?: string | null | undefined;
    exchange_rate?: string | null | undefined;
    total_discount?: number | null | undefined;
    sub_total?: number | null | undefined;
    status?: string | null | undefined;
    total_tax_amount?: number | null | undefined;
    total_amount?: number | null | undefined;
    balance?: number | null | undefined;
    contact_id?: string | null | undefined;
    accounting_period_id?: string | null | undefined;
    tracking_categories?: Array<string> | null | undefined;
    line_items?: Array<LineItem$Outbound> | undefined;
    field_mappings?: UnifiedAccountingInvoiceOutputFieldMappings$Outbound | null | undefined;
    id?: string | null | undefined;
    remote_id?: string | null | undefined;
    remote_data?: UnifiedAccountingInvoiceOutputRemoteData$Outbound | null | undefined;
    remote_updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    modified_at?: string | null | undefined;
};

/** @internal */
export const UnifiedAccountingInvoiceOutput$outboundSchema: z.ZodType<
    UnifiedAccountingInvoiceOutput$Outbound,
    z.ZodTypeDef,
    UnifiedAccountingInvoiceOutput
> = z
    .object({
        type: z.nullable(z.string()).optional(),
        number: z.nullable(z.string()).optional(),
        issueDate: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        dueDate: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        paidOnDate: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        memo: z.nullable(z.string()).optional(),
        currency: z.nullable(UnifiedAccountingInvoiceOutputCurrency$outboundSchema).optional(),
        exchangeRate: z.nullable(z.string()).optional(),
        totalDiscount: z.nullable(z.number()).optional(),
        subTotal: z.nullable(z.number()).optional(),
        status: z.nullable(z.string()).optional(),
        totalTaxAmount: z.nullable(z.number()).optional(),
        totalAmount: z.nullable(z.number()).optional(),
        balance: z.nullable(z.number()).optional(),
        contactId: z.nullable(z.string()).optional(),
        accountingPeriodId: z.nullable(z.string()).optional(),
        trackingCategories: z.nullable(z.array(z.string())).optional(),
        lineItems: z.array(LineItem$outboundSchema).optional(),
        fieldMappings: z
            .nullable(z.lazy(() => UnifiedAccountingInvoiceOutputFieldMappings$outboundSchema))
            .optional(),
        id: z.nullable(z.string()).optional(),
        remoteId: z.nullable(z.string()).optional(),
        remoteData: z
            .nullable(z.lazy(() => UnifiedAccountingInvoiceOutputRemoteData$outboundSchema))
            .optional(),
        remoteUpdatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        modifiedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            issueDate: "issue_date",
            dueDate: "due_date",
            paidOnDate: "paid_on_date",
            exchangeRate: "exchange_rate",
            totalDiscount: "total_discount",
            subTotal: "sub_total",
            totalTaxAmount: "total_tax_amount",
            totalAmount: "total_amount",
            contactId: "contact_id",
            accountingPeriodId: "accounting_period_id",
            trackingCategories: "tracking_categories",
            lineItems: "line_items",
            fieldMappings: "field_mappings",
            remoteId: "remote_id",
            remoteData: "remote_data",
            remoteUpdatedAt: "remote_updated_at",
            createdAt: "created_at",
            modifiedAt: "modified_at",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingInvoiceOutput$ {
    /** @deprecated use `UnifiedAccountingInvoiceOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedAccountingInvoiceOutput$inboundSchema;
    /** @deprecated use `UnifiedAccountingInvoiceOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedAccountingInvoiceOutput$outboundSchema;
    /** @deprecated use `UnifiedAccountingInvoiceOutput$Outbound` instead. */
    export type Outbound = UnifiedAccountingInvoiceOutput$Outbound;
}
