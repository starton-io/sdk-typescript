/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type SchemasMISSINGARGUMENTContext = {};

export type MissingArgumentData = {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  context?: SchemasMISSINGARGUMENTContext | null | undefined;
  errorCode?: string;
  message?: string;
  path: string;
  statusCode?: number;
  timestamp: string;
};

export class MissingArgument extends Error {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  context?: SchemasMISSINGARGUMENTContext | null | undefined;
  errorCode?: string;
  path: string;
  statusCode?: number;
  timestamp: string;

  /** The original data that was passed to this error instance. */
  data$: MissingArgumentData;

  constructor(err: MissingArgumentData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.rawResponse != null) this.rawResponse = err.rawResponse;
    if (err.context != null) this.context = err.context;
    if (err.errorCode != null) this.errorCode = err.errorCode;
    this.path = err.path;
    if (err.statusCode != null) this.statusCode = err.statusCode;
    this.timestamp = err.timestamp;

    this.name = "MissingArgument";
  }
}

/** @internal */
export const SchemasMISSINGARGUMENTContext$inboundSchema: z.ZodType<
  SchemasMISSINGARGUMENTContext,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type SchemasMISSINGARGUMENTContext$Outbound = {};

/** @internal */
export const SchemasMISSINGARGUMENTContext$outboundSchema: z.ZodType<
  SchemasMISSINGARGUMENTContext$Outbound,
  z.ZodTypeDef,
  SchemasMISSINGARGUMENTContext
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SchemasMISSINGARGUMENTContext$ {
  /** @deprecated use `SchemasMISSINGARGUMENTContext$inboundSchema` instead. */
  export const inboundSchema = SchemasMISSINGARGUMENTContext$inboundSchema;
  /** @deprecated use `SchemasMISSINGARGUMENTContext$outboundSchema` instead. */
  export const outboundSchema = SchemasMISSINGARGUMENTContext$outboundSchema;
  /** @deprecated use `SchemasMISSINGARGUMENTContext$Outbound` instead. */
  export type Outbound = SchemasMISSINGARGUMENTContext$Outbound;
}

export function schemasMISSINGARGUMENTContextToJSON(
  schemasMISSINGARGUMENTContext: SchemasMISSINGARGUMENTContext,
): string {
  return JSON.stringify(
    SchemasMISSINGARGUMENTContext$outboundSchema.parse(
      schemasMISSINGARGUMENTContext,
    ),
  );
}

export function schemasMISSINGARGUMENTContextFromJSON(
  jsonString: string,
): SafeParseResult<SchemasMISSINGARGUMENTContext, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SchemasMISSINGARGUMENTContext$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SchemasMISSINGARGUMENTContext' from JSON`,
  );
}

/** @internal */
export const MissingArgument$inboundSchema: z.ZodType<
  MissingArgument,
  z.ZodTypeDef,
  unknown
> = z.object({
  RawResponse: z.instanceof(Response).optional(),
  context: z.nullable(z.lazy(() => SchemasMISSINGARGUMENTContext$inboundSchema))
    .optional(),
  errorCode: z.string().default("MISSING_ARGUMENT"),
  message: z.string().default("Some params are missing."),
  path: z.string(),
  statusCode: z.number().default(400),
  timestamp: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new MissingArgument(remapped);
  });

/** @internal */
export type MissingArgument$Outbound = {
  RawResponse?: never | undefined;
  context?: SchemasMISSINGARGUMENTContext$Outbound | null | undefined;
  errorCode?: string;
  message?: string;
  path: string;
  statusCode?: number;
  timestamp: string;
};

/** @internal */
export const MissingArgument$outboundSchema: z.ZodType<
  MissingArgument$Outbound,
  z.ZodTypeDef,
  MissingArgument
> = z.instanceof(MissingArgument)
  .transform(v => v.data$)
  .pipe(
    z.object({
      rawResponse: z.instanceof(Response).transform(() => {
        throw new Error("Response cannot be serialized");
      }).optional(),
      context: z.nullable(
        z.lazy(() => SchemasMISSINGARGUMENTContext$outboundSchema),
      ).optional(),
      errorCode: z.string().default("MISSING_ARGUMENT"),
      message: z.string().default("Some params are missing."),
      path: z.string(),
      statusCode: z.number().default(400),
      timestamp: z.string(),
    }).transform((v) => {
      return remap$(v, {
        rawResponse: "RawResponse",
      });
    }),
  );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MissingArgument$ {
  /** @deprecated use `MissingArgument$inboundSchema` instead. */
  export const inboundSchema = MissingArgument$inboundSchema;
  /** @deprecated use `MissingArgument$outboundSchema` instead. */
  export const outboundSchema = MissingArgument$outboundSchema;
  /** @deprecated use `MissingArgument$Outbound` instead. */
  export type Outbound = MissingArgument$Outbound;
}
