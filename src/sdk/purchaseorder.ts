/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeJSON as encodeJSON$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";

export class Purchaseorder extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * List a batch of PurchaseOrders
     */
    async list(
        request: operations.ListAccountingPurchaseOrderRequest,
        options?: RequestOptions
    ): Promise<operations.ListAccountingPurchaseOrderResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ListAccountingPurchaseOrderRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/accounting/purchaseorder")();

        const query$ = encodeFormQuery$({
            cursor: payload$.cursor,
            limit: payload$.limit,
            remote_data: payload$.remote_data,
        });

        headers$.set(
            "x-connection-token",
            encodeSimple$("x-connection-token", payload$["x-connection-token"], {
                explode: false,
                charEncoding: "none",
            })
        );

        let security$;
        if (typeof this.options$.bearer === "function") {
            security$ = { bearer: await this.options$.bearer() };
        } else if (this.options$.bearer) {
            security$ = { bearer: this.options$.bearer };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "listAccountingPurchaseOrder",
            oAuth2Scopes: [],
            securitySource: this.options$.bearer,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.ListAccountingPurchaseOrderResponse>()
            .json(200, operations.ListAccountingPurchaseOrderResponse$, { key: "object" })
            .fail(["4XX", "5XX"])
            .match(response, request$, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Create a PurchaseOrder
     *
     * @remarks
     * Create a purchaseorder in any supported Accounting software
     */
    async create(
        request: operations.CreateAccountingPurchaseOrderRequest,
        options?: RequestOptions
    ): Promise<operations.CreateAccountingPurchaseOrderResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.CreateAccountingPurchaseOrderRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.UnifiedAccountingPurchaseorderInput, {
            explode: true,
        });

        const path$ = this.templateURLComponent("/accounting/purchaseorder")();

        const query$ = encodeFormQuery$({
            remote_data: payload$.remote_data,
        });

        headers$.set(
            "x-connection-token",
            encodeSimple$("x-connection-token", payload$["x-connection-token"], {
                explode: false,
                charEncoding: "none",
            })
        );

        let security$;
        if (typeof this.options$.bearer === "function") {
            security$ = { bearer: await this.options$.bearer() };
        } else if (this.options$.bearer) {
            security$ = { bearer: this.options$.bearer };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "createAccountingPurchaseOrder",
            oAuth2Scopes: [],
            securitySource: this.options$.bearer,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.CreateAccountingPurchaseOrderResponse>()
            .json(201, operations.CreateAccountingPurchaseOrderResponse$, {
                key: "UnifiedAccountingPurchaseorderOutput",
            })
            .fail(["4XX", "5XX"])
            .match(response, request$, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Retrieve a PurchaseOrder
     *
     * @remarks
     * Retrieve a purchaseorder from any connected Accounting software
     */
    async retrieve(
        request: operations.RetrieveAccountingPurchaseOrderRequest,
        options?: RequestOptions
    ): Promise<operations.RetrieveAccountingPurchaseOrderResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.RetrieveAccountingPurchaseOrderRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/accounting/purchaseorder/{id}")(pathParams$);

        const query$ = encodeFormQuery$({
            remote_data: payload$.remote_data,
        });

        headers$.set(
            "x-connection-token",
            encodeSimple$("x-connection-token", payload$["x-connection-token"], {
                explode: false,
                charEncoding: "none",
            })
        );

        let security$;
        if (typeof this.options$.bearer === "function") {
            security$ = { bearer: await this.options$.bearer() };
        } else if (this.options$.bearer) {
            security$ = { bearer: this.options$.bearer };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "retrieveAccountingPurchaseOrder",
            oAuth2Scopes: [],
            securitySource: this.options$.bearer,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.RetrieveAccountingPurchaseOrderResponse>()
            .json(200, operations.RetrieveAccountingPurchaseOrderResponse$, {
                key: "UnifiedAccountingPurchaseorderOutput",
            })
            .fail(["4XX", "5XX"])
            .match(response, request$, { extraFields: responseFields$ });

        return result$;
    }
}
