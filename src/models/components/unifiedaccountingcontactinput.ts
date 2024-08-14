/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

/**
 * The currency associated with the contact
 */
export enum UnifiedAccountingContactInputCurrency {
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
export type UnifiedAccountingContactInputFieldMappings = {};

export type UnifiedAccountingContactInput = {
    /**
     * The name of the contact
     */
    name?: string | null | undefined;
    /**
     * Indicates if the contact is a supplier
     */
    isSupplier?: boolean | null | undefined;
    /**
     * Indicates if the contact is a customer
     */
    isCustomer?: boolean | null | undefined;
    /**
     * The email address of the contact
     */
    emailAddress?: string | null | undefined;
    /**
     * The tax number of the contact
     */
    taxNumber?: string | null | undefined;
    /**
     * The status of the contact
     */
    status?: string | null | undefined;
    /**
     * The currency associated with the contact
     */
    currency?: UnifiedAccountingContactInputCurrency | null | undefined;
    /**
     * The date when the contact was last updated in the remote system
     */
    remoteUpdatedAt?: string | null | undefined;
    /**
     * The UUID of the associated company info
     */
    companyInfoId?: string | null | undefined;
    /**
     * The custom field mappings of the object between the remote 3rd party & Panora
     */
    fieldMappings?: UnifiedAccountingContactInputFieldMappings | null | undefined;
};

/** @internal */
export const UnifiedAccountingContactInputCurrency$inboundSchema: z.ZodNativeEnum<
    typeof UnifiedAccountingContactInputCurrency
> = z.nativeEnum(UnifiedAccountingContactInputCurrency);

/** @internal */
export const UnifiedAccountingContactInputCurrency$outboundSchema: z.ZodNativeEnum<
    typeof UnifiedAccountingContactInputCurrency
> = UnifiedAccountingContactInputCurrency$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingContactInputCurrency$ {
    /** @deprecated use `UnifiedAccountingContactInputCurrency$inboundSchema` instead. */
    export const inboundSchema = UnifiedAccountingContactInputCurrency$inboundSchema;
    /** @deprecated use `UnifiedAccountingContactInputCurrency$outboundSchema` instead. */
    export const outboundSchema = UnifiedAccountingContactInputCurrency$outboundSchema;
}

/** @internal */
export const UnifiedAccountingContactInputFieldMappings$inboundSchema: z.ZodType<
    UnifiedAccountingContactInputFieldMappings,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedAccountingContactInputFieldMappings$Outbound = {};

/** @internal */
export const UnifiedAccountingContactInputFieldMappings$outboundSchema: z.ZodType<
    UnifiedAccountingContactInputFieldMappings$Outbound,
    z.ZodTypeDef,
    UnifiedAccountingContactInputFieldMappings
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingContactInputFieldMappings$ {
    /** @deprecated use `UnifiedAccountingContactInputFieldMappings$inboundSchema` instead. */
    export const inboundSchema = UnifiedAccountingContactInputFieldMappings$inboundSchema;
    /** @deprecated use `UnifiedAccountingContactInputFieldMappings$outboundSchema` instead. */
    export const outboundSchema = UnifiedAccountingContactInputFieldMappings$outboundSchema;
    /** @deprecated use `UnifiedAccountingContactInputFieldMappings$Outbound` instead. */
    export type Outbound = UnifiedAccountingContactInputFieldMappings$Outbound;
}

/** @internal */
export const UnifiedAccountingContactInput$inboundSchema: z.ZodType<
    UnifiedAccountingContactInput,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        name: z.nullable(z.string()).optional(),
        is_supplier: z.nullable(z.boolean()).optional(),
        is_customer: z.nullable(z.boolean()).optional(),
        email_address: z.nullable(z.string()).optional(),
        tax_number: z.nullable(z.string()).optional(),
        status: z.nullable(z.string()).optional(),
        currency: z.nullable(UnifiedAccountingContactInputCurrency$inboundSchema).optional(),
        remote_updated_at: z.nullable(z.string()).optional(),
        company_info_id: z.nullable(z.string()).optional(),
        field_mappings: z
            .nullable(z.lazy(() => UnifiedAccountingContactInputFieldMappings$inboundSchema))
            .optional(),
    })
    .transform((v) => {
        return remap$(v, {
            is_supplier: "isSupplier",
            is_customer: "isCustomer",
            email_address: "emailAddress",
            tax_number: "taxNumber",
            remote_updated_at: "remoteUpdatedAt",
            company_info_id: "companyInfoId",
            field_mappings: "fieldMappings",
        });
    });

/** @internal */
export type UnifiedAccountingContactInput$Outbound = {
    name?: string | null | undefined;
    is_supplier?: boolean | null | undefined;
    is_customer?: boolean | null | undefined;
    email_address?: string | null | undefined;
    tax_number?: string | null | undefined;
    status?: string | null | undefined;
    currency?: string | null | undefined;
    remote_updated_at?: string | null | undefined;
    company_info_id?: string | null | undefined;
    field_mappings?: UnifiedAccountingContactInputFieldMappings$Outbound | null | undefined;
};

/** @internal */
export const UnifiedAccountingContactInput$outboundSchema: z.ZodType<
    UnifiedAccountingContactInput$Outbound,
    z.ZodTypeDef,
    UnifiedAccountingContactInput
> = z
    .object({
        name: z.nullable(z.string()).optional(),
        isSupplier: z.nullable(z.boolean()).optional(),
        isCustomer: z.nullable(z.boolean()).optional(),
        emailAddress: z.nullable(z.string()).optional(),
        taxNumber: z.nullable(z.string()).optional(),
        status: z.nullable(z.string()).optional(),
        currency: z.nullable(UnifiedAccountingContactInputCurrency$outboundSchema).optional(),
        remoteUpdatedAt: z.nullable(z.string()).optional(),
        companyInfoId: z.nullable(z.string()).optional(),
        fieldMappings: z
            .nullable(z.lazy(() => UnifiedAccountingContactInputFieldMappings$outboundSchema))
            .optional(),
    })
    .transform((v) => {
        return remap$(v, {
            isSupplier: "is_supplier",
            isCustomer: "is_customer",
            emailAddress: "email_address",
            taxNumber: "tax_number",
            remoteUpdatedAt: "remote_updated_at",
            companyInfoId: "company_info_id",
            fieldMappings: "field_mappings",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingContactInput$ {
    /** @deprecated use `UnifiedAccountingContactInput$inboundSchema` instead. */
    export const inboundSchema = UnifiedAccountingContactInput$inboundSchema;
    /** @deprecated use `UnifiedAccountingContactInput$outboundSchema` instead. */
    export const outboundSchema = UnifiedAccountingContactInput$outboundSchema;
    /** @deprecated use `UnifiedAccountingContactInput$Outbound` instead. */
    export type Outbound = UnifiedAccountingContactInput$Outbound;
}
