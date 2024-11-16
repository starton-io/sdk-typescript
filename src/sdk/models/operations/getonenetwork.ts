/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type GetOneNetworkRequest = {
  /**
   * The unique name of the network to retrieve
   */
  name: string;
};

export type GetOneNetworkResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  network?: shared.Network | undefined;
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
};

/** @internal */
export const GetOneNetworkRequest$inboundSchema: z.ZodType<
  GetOneNetworkRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
});

/** @internal */
export type GetOneNetworkRequest$Outbound = {
  name: string;
};

/** @internal */
export const GetOneNetworkRequest$outboundSchema: z.ZodType<
  GetOneNetworkRequest$Outbound,
  z.ZodTypeDef,
  GetOneNetworkRequest
> = z.object({
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOneNetworkRequest$ {
  /** @deprecated use `GetOneNetworkRequest$inboundSchema` instead. */
  export const inboundSchema = GetOneNetworkRequest$inboundSchema;
  /** @deprecated use `GetOneNetworkRequest$outboundSchema` instead. */
  export const outboundSchema = GetOneNetworkRequest$outboundSchema;
  /** @deprecated use `GetOneNetworkRequest$Outbound` instead. */
  export type Outbound = GetOneNetworkRequest$Outbound;
}

export function getOneNetworkRequestToJSON(
  getOneNetworkRequest: GetOneNetworkRequest,
): string {
  return JSON.stringify(
    GetOneNetworkRequest$outboundSchema.parse(getOneNetworkRequest),
  );
}

export function getOneNetworkRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetOneNetworkRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetOneNetworkRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetOneNetworkRequest' from JSON`,
  );
}

/** @internal */
export const GetOneNetworkResponse$inboundSchema: z.ZodType<
  GetOneNetworkResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Network: shared.Network$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Network": "network",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetOneNetworkResponse$Outbound = {
  ContentType: string;
  Network?: shared.Network$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const GetOneNetworkResponse$outboundSchema: z.ZodType<
  GetOneNetworkResponse$Outbound,
  z.ZodTypeDef,
  GetOneNetworkResponse
> = z.object({
  contentType: z.string(),
  network: shared.Network$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    network: "Network",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOneNetworkResponse$ {
  /** @deprecated use `GetOneNetworkResponse$inboundSchema` instead. */
  export const inboundSchema = GetOneNetworkResponse$inboundSchema;
  /** @deprecated use `GetOneNetworkResponse$outboundSchema` instead. */
  export const outboundSchema = GetOneNetworkResponse$outboundSchema;
  /** @deprecated use `GetOneNetworkResponse$Outbound` instead. */
  export type Outbound = GetOneNetworkResponse$Outbound;
}

export function getOneNetworkResponseToJSON(
  getOneNetworkResponse: GetOneNetworkResponse,
): string {
  return JSON.stringify(
    GetOneNetworkResponse$outboundSchema.parse(getOneNetworkResponse),
  );
}

export function getOneNetworkResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetOneNetworkResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetOneNetworkResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetOneNetworkResponse' from JSON`,
  );
}
