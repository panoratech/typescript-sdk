/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Activities } from "./activities.js";
import { Applications } from "./applications.js";
import { Attachments } from "./attachments.js";
import { Candidates } from "./candidates.js";
import { Departments } from "./departments.js";
import { Eeocs } from "./eeocs.js";
import { Interviews } from "./interviews.js";
import { Jobinterviewstages } from "./jobinterviewstages.js";
import { Jobs } from "./jobs.js";
import { Offers } from "./offers.js";
import { Offices } from "./offices.js";
import { PanoraAtsUsers } from "./panoraatsusers.js";
import { PanoraTags } from "./panoratags.js";
import { Rejectreasons } from "./rejectreasons.js";
import { Scorecards } from "./scorecards.js";

export class Ats extends ClientSDK {
  private _activities?: Activities;
  get activities(): Activities {
    return (this._activities ??= new Activities(this.options$));
  }

  private _applications?: Applications;
  get applications(): Applications {
    return (this._applications ??= new Applications(this.options$));
  }

  private _attachments?: Attachments;
  get attachments(): Attachments {
    return (this._attachments ??= new Attachments(this.options$));
  }

  private _candidates?: Candidates;
  get candidates(): Candidates {
    return (this._candidates ??= new Candidates(this.options$));
  }

  private _departments?: Departments;
  get departments(): Departments {
    return (this._departments ??= new Departments(this.options$));
  }

  private _interviews?: Interviews;
  get interviews(): Interviews {
    return (this._interviews ??= new Interviews(this.options$));
  }

  private _jobinterviewstages?: Jobinterviewstages;
  get jobinterviewstages(): Jobinterviewstages {
    return (this._jobinterviewstages ??= new Jobinterviewstages(this.options$));
  }

  private _jobs?: Jobs;
  get jobs(): Jobs {
    return (this._jobs ??= new Jobs(this.options$));
  }

  private _offers?: Offers;
  get offers(): Offers {
    return (this._offers ??= new Offers(this.options$));
  }

  private _offices?: Offices;
  get offices(): Offices {
    return (this._offices ??= new Offices(this.options$));
  }

  private _rejectreasons?: Rejectreasons;
  get rejectreasons(): Rejectreasons {
    return (this._rejectreasons ??= new Rejectreasons(this.options$));
  }

  private _scorecards?: Scorecards;
  get scorecards(): Scorecards {
    return (this._scorecards ??= new Scorecards(this.options$));
  }

  private _tags?: PanoraTags;
  get tags(): PanoraTags {
    return (this._tags ??= new PanoraTags(this.options$));
  }

  private _users?: PanoraAtsUsers;
  get users(): PanoraAtsUsers {
    return (this._users ??= new PanoraAtsUsers(this.options$));
  }

  private _eeocs?: Eeocs;
  get eeocs(): Eeocs {
    return (this._eeocs ??= new Eeocs(this.options$));
  }
}
