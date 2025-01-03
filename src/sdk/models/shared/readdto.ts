/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ReadDto3 = {};

export type ReadDtoParams = ReadDto3 | string | number | boolean;

export type ReadDto = {
  functionName: string;
  /**
   * Smart contract parameters.
   */
  params?: Array<ReadDto3 | string | number | boolean> | undefined;
};

/** @internal */
export const ReadDto3$inboundSchema: z.ZodType<
  ReadDto3,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ReadDto3$Outbound = {};

/** @internal */
export const ReadDto3$outboundSchema: z.ZodType<
  ReadDto3$Outbound,
  z.ZodTypeDef,
  ReadDto3
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReadDto3$ {
  /** @deprecated use `ReadDto3$inboundSchema` instead. */
  export const inboundSchema = ReadDto3$inboundSchema;
  /** @deprecated use `ReadDto3$outboundSchema` instead. */
  export const outboundSchema = ReadDto3$outboundSchema;
  /** @deprecated use `ReadDto3$Outbound` instead. */
  export type Outbound = ReadDto3$Outbound;
}

export function readDto3ToJSON(readDto3: ReadDto3): string {
  return JSON.stringify(ReadDto3$outboundSchema.parse(readDto3));
}

export function readDto3FromJSON(
  jsonString: string,
): SafeParseResult<ReadDto3, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReadDto3$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReadDto3' from JSON`,
  );
}

/** @internal */
export const ReadDtoParams$inboundSchema: z.ZodType<
  ReadDtoParams,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => ReadDto3$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
]);

/** @internal */
export type ReadDtoParams$Outbound =
  | ReadDto3$Outbound
  | string
  | number
  | boolean;

/** @internal */
export const ReadDtoParams$outboundSchema: z.ZodType<
  ReadDtoParams$Outbound,
  z.ZodTypeDef,
  ReadDtoParams
> = z.union([
  z.lazy(() => ReadDto3$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReadDtoParams$ {
  /** @deprecated use `ReadDtoParams$inboundSchema` instead. */
  export const inboundSchema = ReadDtoParams$inboundSchema;
  /** @deprecated use `ReadDtoParams$outboundSchema` instead. */
  export const outboundSchema = ReadDtoParams$outboundSchema;
  /** @deprecated use `ReadDtoParams$Outbound` instead. */
  export type Outbound = ReadDtoParams$Outbound;
}

export function readDtoParamsToJSON(readDtoParams: ReadDtoParams): string {
  return JSON.stringify(ReadDtoParams$outboundSchema.parse(readDtoParams));
}

export function readDtoParamsFromJSON(
  jsonString: string,
): SafeParseResult<ReadDtoParams, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReadDtoParams$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReadDtoParams' from JSON`,
  );
}

/** @internal */
export const ReadDto$inboundSchema: z.ZodType<ReadDto, z.ZodTypeDef, unknown> =
  z.object({
    functionName: z.string(),
    params: z.array(
      z.union([
        z.lazy(() => ReadDto3$inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
      ]),
    ).optional(),
  });

/** @internal */
export type ReadDto$Outbound = {
  functionName: string;
  params?: Array<ReadDto3$Outbound | string | number | boolean> | undefined;
};

/** @internal */
export const ReadDto$outboundSchema: z.ZodType<
  ReadDto$Outbound,
  z.ZodTypeDef,
  ReadDto
> = z.object({
  functionName: z.string(),
  params: z.array(
    z.union([
      z.lazy(() => ReadDto3$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
    ]),
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReadDto$ {
  /** @deprecated use `ReadDto$inboundSchema` instead. */
  export const inboundSchema = ReadDto$inboundSchema;
  /** @deprecated use `ReadDto$outboundSchema` instead. */
  export const outboundSchema = ReadDto$outboundSchema;
  /** @deprecated use `ReadDto$Outbound` instead. */
  export type Outbound = ReadDto$Outbound;
}

export function readDtoToJSON(readDto: ReadDto): string {
  return JSON.stringify(ReadDto$outboundSchema.parse(readDto));
}

export function readDtoFromJSON(
  jsonString: string,
): SafeParseResult<ReadDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReadDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReadDto' from JSON`,
  );
}
