/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ecommerceProductsCreate } from "../funcs/ecommerceProductsCreate.js";
import { ecommerceProductsList } from "../funcs/ecommerceProductsList.js";
import { ecommerceProductsRetrieve } from "../funcs/ecommerceProductsRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Products extends ClientSDK {
  /**
   * List Products
   */
  async list(
    request: operations.ListEcommerceProductsRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.ListEcommerceProductsResponse>> {
    return unwrapResultIterator(ecommerceProductsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Products
   *
   * @remarks
   * Create Products in any supported Ecommerce software
   */
  async create(
    request: operations.CreateEcommerceProductRequest,
    options?: RequestOptions,
  ): Promise<components.UnifiedEcommerceProductOutput> {
    return unwrapAsync(ecommerceProductsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve Products
   *
   * @remarks
   * Retrieve products from any connected Ats software
   */
  async retrieve(
    request: operations.RetrieveEcommerceProductRequest,
    options?: RequestOptions,
  ): Promise<components.UnifiedEcommerceProductOutput> {
    return unwrapAsync(ecommerceProductsRetrieve(
      this,
      request,
      options,
    ));
  }
}
