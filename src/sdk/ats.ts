/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { HTTPClient } from "../lib/http.js";
import { ClientSDK } from "../lib/sdks.js";
import { Activity } from "./activity.js";
import { Application } from "./application.js";
import { Attachment } from "./attachment.js";
import { Candidate } from "./candidate.js";
import { Department } from "./department.js";
import { Eeocs } from "./eeocs.js";
import { Interview } from "./interview.js";
import { Job } from "./job.js";
import { Jobinterviewstage } from "./jobinterviewstage.js";
import { Offer } from "./offer.js";
import { Office } from "./office.js";
import { PanoraUser } from "./panorauser.js";
import { Rejectreason } from "./rejectreason.js";
import { Scorecard } from "./scorecard.js";
import { Tag } from "./tag.js";

export class Ats extends ClientSDK {
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

    private _activity?: Activity;
    get activity(): Activity {
        return (this._activity ??= new Activity(this.options$));
    }

    private _application?: Application;
    get application(): Application {
        return (this._application ??= new Application(this.options$));
    }

    private _attachment?: Attachment;
    get attachment(): Attachment {
        return (this._attachment ??= new Attachment(this.options$));
    }

    private _candidate?: Candidate;
    get candidate(): Candidate {
        return (this._candidate ??= new Candidate(this.options$));
    }

    private _department?: Department;
    get department(): Department {
        return (this._department ??= new Department(this.options$));
    }

    private _interview?: Interview;
    get interview(): Interview {
        return (this._interview ??= new Interview(this.options$));
    }

    private _jobinterviewstage?: Jobinterviewstage;
    get jobinterviewstage(): Jobinterviewstage {
        return (this._jobinterviewstage ??= new Jobinterviewstage(this.options$));
    }

    private _job?: Job;
    get job(): Job {
        return (this._job ??= new Job(this.options$));
    }

    private _offer?: Offer;
    get offer(): Offer {
        return (this._offer ??= new Offer(this.options$));
    }

    private _office?: Office;
    get office(): Office {
        return (this._office ??= new Office(this.options$));
    }

    private _rejectreason?: Rejectreason;
    get rejectreason(): Rejectreason {
        return (this._rejectreason ??= new Rejectreason(this.options$));
    }

    private _scorecard?: Scorecard;
    get scorecard(): Scorecard {
        return (this._scorecard ??= new Scorecard(this.options$));
    }

    private _tag?: Tag;
    get tag(): Tag {
        return (this._tag ??= new Tag(this.options$));
    }

    private _user?: PanoraUser;
    get user(): PanoraUser {
        return (this._user ??= new PanoraUser(this.options$));
    }

    private _eeocs?: Eeocs;
    get eeocs(): Eeocs {
        return (this._eeocs ??= new Eeocs(this.options$));
    }
}
