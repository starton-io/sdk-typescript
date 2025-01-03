/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type CreateWatcherResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
  watcher?: shared.Watcher | undefined;
};

/** @internal */
export const CreateWatcherResponse$inboundSchema: z.ZodType<
  CreateWatcherResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  Watcher: shared.Watcher$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "Watcher": "watcher",
  });
});

/** @internal */
export type CreateWatcherResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  Watcher?: shared.Watcher$Outbound | undefined;
};

/** @internal */
export const CreateWatcherResponse$outboundSchema: z.ZodType<
  CreateWatcherResponse$Outbound,
  z.ZodTypeDef,
  CreateWatcherResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  watcher: shared.Watcher$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    watcher: "Watcher",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWatcherResponse$ {
  /** @deprecated use `CreateWatcherResponse$inboundSchema` instead. */
  export const inboundSchema = CreateWatcherResponse$inboundSchema;
  /** @deprecated use `CreateWatcherResponse$outboundSchema` instead. */
  export const outboundSchema = CreateWatcherResponse$outboundSchema;
  /** @deprecated use `CreateWatcherResponse$Outbound` instead. */
  export type Outbound = CreateWatcherResponse$Outbound;
}

export function createWatcherResponseToJSON(
  createWatcherResponse: CreateWatcherResponse,
): string {
  return JSON.stringify(
    CreateWatcherResponse$outboundSchema.parse(createWatcherResponse),
  );
}

export function createWatcherResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateWatcherResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateWatcherResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateWatcherResponse' from JSON`,
  );
}
