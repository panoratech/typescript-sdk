/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { fieldMappingsDefineCustomField } from "../funcs/fieldMappingsDefineCustomField.js";
import { fieldMappingsDefinitions } from "../funcs/fieldMappingsDefinitions.js";
import { fieldMappingsGetFieldMappings } from "../funcs/fieldMappingsGetFieldMappings.js";
import { fieldMappingsGetFieldMappingsEntities } from "../funcs/fieldMappingsGetFieldMappingsEntities.js";
import { fieldMappingsGetFieldMappingValues } from "../funcs/fieldMappingsGetFieldMappingValues.js";
import { fieldMappingsMap } from "../funcs/fieldMappingsMap.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class FieldMappings extends ClientSDK {
  /**
   * Retrieve field mappings values
   */
  async getFieldMappingValues(
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(fieldMappingsGetFieldMappingValues(
      this,
      options,
    ));
  }

  /**
   * Retrieve field mapping entities
   */
  async getFieldMappingsEntities(
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(fieldMappingsGetFieldMappingsEntities(
      this,
      options,
    ));
  }

  /**
   * Retrieve field mappings
   */
  async getFieldMappings(
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(fieldMappingsGetFieldMappings(
      this,
      options,
    ));
  }

  /**
   * Define target Field
   */
  async definitions(
    request: components.DefineTargetFieldDto,
    options?: RequestOptions,
  ): Promise<components.CustomFieldResponse> {
    return unwrapAsync(fieldMappingsDefinitions(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Custom Field
   */
  async defineCustomField(
    request: components.CustomFieldCreateDto,
    options?: RequestOptions,
  ): Promise<components.CustomFieldResponse> {
    return unwrapAsync(fieldMappingsDefineCustomField(
      this,
      request,
      options,
    ));
  }

  /**
   * Map Custom Field
   */
  async map(
    request: components.MapFieldToProviderDto,
    options?: RequestOptions,
  ): Promise<components.CustomFieldResponse> {
    return unwrapAsync(fieldMappingsMap(
      this,
      request,
      options,
    ));
  }
}
