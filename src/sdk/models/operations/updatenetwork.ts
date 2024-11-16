/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type UpdateNetworkRequest = {
  /**
   * Network details to update
   */
  updateNetworkDto: shared.UpdateNetworkDto;
  /**
   * The unique name of the network to update
   */
  name: string;
};

export type UpdateNetworkResponse = {
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
export const UpdateNetworkRequest$inboundSchema: z.ZodType<
  UpdateNetworkRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  UpdateNetworkDto: shared.UpdateNetworkDto$inboundSchema,
  name: z.string(),
}).transform((v) => {
  return remap$(v, {
    "UpdateNetworkDto": "updateNetworkDto",
  });
});

/** @internal */
export type UpdateNetworkRequest$Outbound = {
  UpdateNetworkDto: shared.UpdateNetworkDto$Outbound;
  name: string;
};

/** @internal */
export const UpdateNetworkRequest$outboundSchema: z.ZodType<
  UpdateNetworkRequest$Outbound,
  z.ZodTypeDef,
  UpdateNetworkRequest
> = z.object({
  updateNetworkDto: shared.UpdateNetworkDto$outboundSchema,
  name: z.string(),
}).transform((v) => {
  return remap$(v, {
    updateNetworkDto: "UpdateNetworkDto",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateNetworkRequest$ {
  /** @deprecated use `UpdateNetworkRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateNetworkRequest$inboundSchema;
  /** @deprecated use `UpdateNetworkRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateNetworkRequest$outboundSchema;
  /** @deprecated use `UpdateNetworkRequest$Outbound` instead. */
  export type Outbound = UpdateNetworkRequest$Outbound;
}

export function updateNetworkRequestToJSON(
  updateNetworkRequest: UpdateNetworkRequest,
): string {
  return JSON.stringify(
    UpdateNetworkRequest$outboundSchema.parse(updateNetworkRequest),
  );
}

export function updateNetworkRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateNetworkRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateNetworkRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateNetworkRequest' from JSON`,
  );
}

/** @internal */
export const UpdateNetworkResponse$inboundSchema: z.ZodType<
  UpdateNetworkResponse,
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
export type UpdateNetworkResponse$Outbound = {
  ContentType: string;
  Network?: shared.Network$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const UpdateNetworkResponse$outboundSchema: z.ZodType<
  UpdateNetworkResponse$Outbound,
  z.ZodTypeDef,
  UpdateNetworkResponse
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
export namespace UpdateNetworkResponse$ {
  /** @deprecated use `UpdateNetworkResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateNetworkResponse$inboundSchema;
  /** @deprecated use `UpdateNetworkResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateNetworkResponse$outboundSchema;
  /** @deprecated use `UpdateNetworkResponse$Outbound` instead. */
  export type Outbound = UpdateNetworkResponse$Outbound;
}

export function updateNetworkResponseToJSON(
  updateNetworkResponse: UpdateNetworkResponse,
): string {
  return JSON.stringify(
    UpdateNetworkResponse$outboundSchema.parse(updateNetworkResponse),
  );
}

export function updateNetworkResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateNetworkResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateNetworkResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateNetworkResponse' from JSON`,
  );
}
