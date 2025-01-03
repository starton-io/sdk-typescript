/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ReadSmartContractResponse3 = {};

export type ReadSmartContractResponseParams =
  | ReadSmartContractResponse3
  | string
  | number
  | boolean;

export type ReadSmartContractResponseSchemas3 = {};

export type Response =
  | ReadSmartContractResponseSchemas3
  | string
  | number
  | boolean
  | Array<any>;

export type ReadSmartContractResponse = {
  address: string;
  functionName: string;
  network: string;
  /**
   * Smart contract parameters.
   */
  params: Array<ReadSmartContractResponse3 | string | number | boolean>;
  response:
    | ReadSmartContractResponseSchemas3
    | string
    | number
    | boolean
    | Array<any>;
};

/** @internal */
export const ReadSmartContractResponse3$inboundSchema: z.ZodType<
  ReadSmartContractResponse3,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ReadSmartContractResponse3$Outbound = {};

/** @internal */
export const ReadSmartContractResponse3$outboundSchema: z.ZodType<
  ReadSmartContractResponse3$Outbound,
  z.ZodTypeDef,
  ReadSmartContractResponse3
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReadSmartContractResponse3$ {
  /** @deprecated use `ReadSmartContractResponse3$inboundSchema` instead. */
  export const inboundSchema = ReadSmartContractResponse3$inboundSchema;
  /** @deprecated use `ReadSmartContractResponse3$outboundSchema` instead. */
  export const outboundSchema = ReadSmartContractResponse3$outboundSchema;
  /** @deprecated use `ReadSmartContractResponse3$Outbound` instead. */
  export type Outbound = ReadSmartContractResponse3$Outbound;
}

export function readSmartContractResponse3ToJSON(
  readSmartContractResponse3: ReadSmartContractResponse3,
): string {
  return JSON.stringify(
    ReadSmartContractResponse3$outboundSchema.parse(readSmartContractResponse3),
  );
}

export function readSmartContractResponse3FromJSON(
  jsonString: string,
): SafeParseResult<ReadSmartContractResponse3, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReadSmartContractResponse3$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReadSmartContractResponse3' from JSON`,
  );
}

/** @internal */
export const ReadSmartContractResponseParams$inboundSchema: z.ZodType<
  ReadSmartContractResponseParams,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => ReadSmartContractResponse3$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
]);

/** @internal */
export type ReadSmartContractResponseParams$Outbound =
  | ReadSmartContractResponse3$Outbound
  | string
  | number
  | boolean;

/** @internal */
export const ReadSmartContractResponseParams$outboundSchema: z.ZodType<
  ReadSmartContractResponseParams$Outbound,
  z.ZodTypeDef,
  ReadSmartContractResponseParams
> = z.union([
  z.lazy(() => ReadSmartContractResponse3$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReadSmartContractResponseParams$ {
  /** @deprecated use `ReadSmartContractResponseParams$inboundSchema` instead. */
  export const inboundSchema = ReadSmartContractResponseParams$inboundSchema;
  /** @deprecated use `ReadSmartContractResponseParams$outboundSchema` instead. */
  export const outboundSchema = ReadSmartContractResponseParams$outboundSchema;
  /** @deprecated use `ReadSmartContractResponseParams$Outbound` instead. */
  export type Outbound = ReadSmartContractResponseParams$Outbound;
}

export function readSmartContractResponseParamsToJSON(
  readSmartContractResponseParams: ReadSmartContractResponseParams,
): string {
  return JSON.stringify(
    ReadSmartContractResponseParams$outboundSchema.parse(
      readSmartContractResponseParams,
    ),
  );
}

export function readSmartContractResponseParamsFromJSON(
  jsonString: string,
): SafeParseResult<ReadSmartContractResponseParams, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReadSmartContractResponseParams$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReadSmartContractResponseParams' from JSON`,
  );
}

/** @internal */
export const ReadSmartContractResponseSchemas3$inboundSchema: z.ZodType<
  ReadSmartContractResponseSchemas3,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ReadSmartContractResponseSchemas3$Outbound = {};

/** @internal */
export const ReadSmartContractResponseSchemas3$outboundSchema: z.ZodType<
  ReadSmartContractResponseSchemas3$Outbound,
  z.ZodTypeDef,
  ReadSmartContractResponseSchemas3
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReadSmartContractResponseSchemas3$ {
  /** @deprecated use `ReadSmartContractResponseSchemas3$inboundSchema` instead. */
  export const inboundSchema = ReadSmartContractResponseSchemas3$inboundSchema;
  /** @deprecated use `ReadSmartContractResponseSchemas3$outboundSchema` instead. */
  export const outboundSchema =
    ReadSmartContractResponseSchemas3$outboundSchema;
  /** @deprecated use `ReadSmartContractResponseSchemas3$Outbound` instead. */
  export type Outbound = ReadSmartContractResponseSchemas3$Outbound;
}

export function readSmartContractResponseSchemas3ToJSON(
  readSmartContractResponseSchemas3: ReadSmartContractResponseSchemas3,
): string {
  return JSON.stringify(
    ReadSmartContractResponseSchemas3$outboundSchema.parse(
      readSmartContractResponseSchemas3,
    ),
  );
}

export function readSmartContractResponseSchemas3FromJSON(
  jsonString: string,
): SafeParseResult<ReadSmartContractResponseSchemas3, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReadSmartContractResponseSchemas3$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReadSmartContractResponseSchemas3' from JSON`,
  );
}

/** @internal */
export const Response$inboundSchema: z.ZodType<
  Response,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => ReadSmartContractResponseSchemas3$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type Response$Outbound =
  | ReadSmartContractResponseSchemas3$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const Response$outboundSchema: z.ZodType<
  Response$Outbound,
  z.ZodTypeDef,
  Response
> = z.union([
  z.lazy(() => ReadSmartContractResponseSchemas3$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Response$ {
  /** @deprecated use `Response$inboundSchema` instead. */
  export const inboundSchema = Response$inboundSchema;
  /** @deprecated use `Response$outboundSchema` instead. */
  export const outboundSchema = Response$outboundSchema;
  /** @deprecated use `Response$Outbound` instead. */
  export type Outbound = Response$Outbound;
}

export function responseToJSON(response: Response): string {
  return JSON.stringify(Response$outboundSchema.parse(response));
}

export function responseFromJSON(
  jsonString: string,
): SafeParseResult<Response, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Response$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Response' from JSON`,
  );
}

/** @internal */
export const ReadSmartContractResponse$inboundSchema: z.ZodType<
  ReadSmartContractResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  address: z.string(),
  functionName: z.string(),
  network: z.string(),
  params: z.array(
    z.union([
      z.lazy(() => ReadSmartContractResponse3$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
    ]),
  ),
  response: z.union([
    z.lazy(() => ReadSmartContractResponseSchemas3$inboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
    z.array(z.any()),
  ]),
});

/** @internal */
export type ReadSmartContractResponse$Outbound = {
  address: string;
  functionName: string;
  network: string;
  params: Array<
    ReadSmartContractResponse3$Outbound | string | number | boolean
  >;
  response:
    | ReadSmartContractResponseSchemas3$Outbound
    | string
    | number
    | boolean
    | Array<any>;
};

/** @internal */
export const ReadSmartContractResponse$outboundSchema: z.ZodType<
  ReadSmartContractResponse$Outbound,
  z.ZodTypeDef,
  ReadSmartContractResponse
> = z.object({
  address: z.string(),
  functionName: z.string(),
  network: z.string(),
  params: z.array(
    z.union([
      z.lazy(() => ReadSmartContractResponse3$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
    ]),
  ),
  response: z.union([
    z.lazy(() => ReadSmartContractResponseSchemas3$outboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
    z.array(z.any()),
  ]),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReadSmartContractResponse$ {
  /** @deprecated use `ReadSmartContractResponse$inboundSchema` instead. */
  export const inboundSchema = ReadSmartContractResponse$inboundSchema;
  /** @deprecated use `ReadSmartContractResponse$outboundSchema` instead. */
  export const outboundSchema = ReadSmartContractResponse$outboundSchema;
  /** @deprecated use `ReadSmartContractResponse$Outbound` instead. */
  export type Outbound = ReadSmartContractResponse$Outbound;
}

export function readSmartContractResponseToJSON(
  readSmartContractResponse: ReadSmartContractResponse,
): string {
  return JSON.stringify(
    ReadSmartContractResponse$outboundSchema.parse(readSmartContractResponse),
  );
}

export function readSmartContractResponseFromJSON(
  jsonString: string,
): SafeParseResult<ReadSmartContractResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReadSmartContractResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReadSmartContractResponse' from JSON`,
  );
}
