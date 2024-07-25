/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { HTTPClient } from "../lib/http.js";
import { ClientSDK } from "../lib/sdks.js";
import { Account } from "./account.js";
import { Address } from "./address.js";
import { Balancesheet } from "./balancesheet.js";
import { Cashflowstatement } from "./cashflowstatement.js";
import { Companyinfo } from "./companyinfo.js";
import { Creditnote } from "./creditnote.js";
import { Expense } from "./expense.js";
import { Incomestatement } from "./incomestatement.js";
import { Invoice } from "./invoice.js";
import { Item } from "./item.js";
import { Journalentry } from "./journalentry.js";
import { PanoraAttachment } from "./panoraattachment.js";
import { PanoraContact } from "./panoracontact.js";
import { Payment } from "./payment.js";
import { Phonenumber } from "./phonenumber.js";
import { Purchaseorder } from "./purchaseorder.js";
import { Taxrate } from "./taxrate.js";
import { Trackingcategory } from "./trackingcategory.js";
import { Transaction } from "./transaction.js";
import { Vendorcredit } from "./vendorcredit.js";

export class Accounting extends ClientSDK {
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

    private _account?: Account;
    get account(): Account {
        return (this._account ??= new Account(this.options$));
    }

    private _address?: Address;
    get address(): Address {
        return (this._address ??= new Address(this.options$));
    }

    private _attachment?: PanoraAttachment;
    get attachment(): PanoraAttachment {
        return (this._attachment ??= new PanoraAttachment(this.options$));
    }

    private _balancesheet?: Balancesheet;
    get balancesheet(): Balancesheet {
        return (this._balancesheet ??= new Balancesheet(this.options$));
    }

    private _cashflowstatement?: Cashflowstatement;
    get cashflowstatement(): Cashflowstatement {
        return (this._cashflowstatement ??= new Cashflowstatement(this.options$));
    }

    private _companyinfo?: Companyinfo;
    get companyinfo(): Companyinfo {
        return (this._companyinfo ??= new Companyinfo(this.options$));
    }

    private _contact?: PanoraContact;
    get contact(): PanoraContact {
        return (this._contact ??= new PanoraContact(this.options$));
    }

    private _creditnote?: Creditnote;
    get creditnote(): Creditnote {
        return (this._creditnote ??= new Creditnote(this.options$));
    }

    private _expense?: Expense;
    get expense(): Expense {
        return (this._expense ??= new Expense(this.options$));
    }

    private _incomestatement?: Incomestatement;
    get incomestatement(): Incomestatement {
        return (this._incomestatement ??= new Incomestatement(this.options$));
    }

    private _invoice?: Invoice;
    get invoice(): Invoice {
        return (this._invoice ??= new Invoice(this.options$));
    }

    private _item?: Item;
    get item(): Item {
        return (this._item ??= new Item(this.options$));
    }

    private _journalentry?: Journalentry;
    get journalentry(): Journalentry {
        return (this._journalentry ??= new Journalentry(this.options$));
    }

    private _payment?: Payment;
    get payment(): Payment {
        return (this._payment ??= new Payment(this.options$));
    }

    private _phonenumber?: Phonenumber;
    get phonenumber(): Phonenumber {
        return (this._phonenumber ??= new Phonenumber(this.options$));
    }

    private _purchaseorder?: Purchaseorder;
    get purchaseorder(): Purchaseorder {
        return (this._purchaseorder ??= new Purchaseorder(this.options$));
    }

    private _taxrate?: Taxrate;
    get taxrate(): Taxrate {
        return (this._taxrate ??= new Taxrate(this.options$));
    }

    private _trackingcategory?: Trackingcategory;
    get trackingcategory(): Trackingcategory {
        return (this._trackingcategory ??= new Trackingcategory(this.options$));
    }

    private _transaction?: Transaction;
    get transaction(): Transaction {
        return (this._transaction ??= new Transaction(this.options$));
    }

    private _vendorcredit?: Vendorcredit;
    get vendorcredit(): Vendorcredit {
        return (this._vendorcredit ??= new Vendorcredit(this.options$));
    }
}
