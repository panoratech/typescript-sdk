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

export class Employee extends ClientSDK {
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
     * List a batch of Employees
     */
    async list(
        request: operations.ListHrisEmployeeRequest,
        options?: RequestOptions
    ): Promise<operations.ListHrisEmployeeResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ListHrisEmployeeRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/hris/employee")();

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
            operationID: "listHrisEmployee",
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

        const [result$] = await this.matcher<operations.ListHrisEmployeeResponse>()
            .json(200, operations.ListHrisEmployeeResponse$, { key: "object" })
            .fail(["4XX", "5XX"])
            .match(response, request$, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Create an Employee
     *
     * @remarks
     * Create an employee in any supported Hris software
     */
    async create(
        request: operations.CreateHrisEmployeeRequest,
        options?: RequestOptions
    ): Promise<operations.CreateHrisEmployeeResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.CreateHrisEmployeeRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.UnifiedHrisEmployeeInput, { explode: true });

        const path$ = this.templateURLComponent("/hris/employee")();

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
            operationID: "createHrisEmployee",
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

        const [result$] = await this.matcher<operations.CreateHrisEmployeeResponse>()
            .json(201, operations.CreateHrisEmployeeResponse$, { key: "UnifiedHrisEmployeeOutput" })
            .fail(["4XX", "5XX"])
            .match(response, request$, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Retrieve an Employee
     *
     * @remarks
     * Retrieve an employee from any connected Hris software
     */
    async retrieve(
        request: operations.RetrieveHrisEmployeeRequest,
        options?: RequestOptions
    ): Promise<operations.RetrieveHrisEmployeeResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.RetrieveHrisEmployeeRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/hris/employee/{id}")(pathParams$);

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
            operationID: "retrieveHrisEmployee",
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

        const [result$] = await this.matcher<operations.RetrieveHrisEmployeeResponse>()
            .json(200, operations.RetrieveHrisEmployeeResponse$, {
                key: "UnifiedHrisEmployeeOutput",
            })
            .fail(["4XX", "5XX"])
            .match(response, request$, { extraFields: responseFields$ });

        return result$;
    }
}
