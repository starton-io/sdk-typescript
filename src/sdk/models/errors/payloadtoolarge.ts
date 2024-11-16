/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type SchemasPAYLOADTOOLARGEContext = {};

export type PayloadTooLargeData = {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  context?: SchemasPAYLOADTOOLARGEContext | null | undefined;
  errorCode?: string;
  message?: string;
  path: string;
  statusCode?: number;
  timestamp: string;
};

export class PayloadTooLarge extends Error {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  context?: SchemasPAYLOADTOOLARGEContext | null | undefined;
  errorCode?: string;
  path: string;
  statusCode?: number;
  timestamp: string;

  /** The original data that was passed to this error instance. */
  data$: PayloadTooLargeData;

  constructor(err: PayloadTooLargeData) {
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

    this.name = "PayloadTooLarge";
  }
}

/** @internal */
export const SchemasPAYLOADTOOLARGEContext$inboundSchema: z.ZodType<
  SchemasPAYLOADTOOLARGEContext,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type SchemasPAYLOADTOOLARGEContext$Outbound = {};

/** @internal */
export const SchemasPAYLOADTOOLARGEContext$outboundSchema: z.ZodType<
  SchemasPAYLOADTOOLARGEContext$Outbound,
  z.ZodTypeDef,
  SchemasPAYLOADTOOLARGEContext
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SchemasPAYLOADTOOLARGEContext$ {
  /** @deprecated use `SchemasPAYLOADTOOLARGEContext$inboundSchema` instead. */
  export const inboundSchema = SchemasPAYLOADTOOLARGEContext$inboundSchema;
  /** @deprecated use `SchemasPAYLOADTOOLARGEContext$outboundSchema` instead. */
  export const outboundSchema = SchemasPAYLOADTOOLARGEContext$outboundSchema;
  /** @deprecated use `SchemasPAYLOADTOOLARGEContext$Outbound` instead. */
  export type Outbound = SchemasPAYLOADTOOLARGEContext$Outbound;
}

export function schemasPAYLOADTOOLARGEContextToJSON(
  schemasPAYLOADTOOLARGEContext: SchemasPAYLOADTOOLARGEContext,
): string {
  return JSON.stringify(
    SchemasPAYLOADTOOLARGEContext$outboundSchema.parse(
      schemasPAYLOADTOOLARGEContext,
    ),
  );
}

export function schemasPAYLOADTOOLARGEContextFromJSON(
  jsonString: string,
): SafeParseResult<SchemasPAYLOADTOOLARGEContext, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SchemasPAYLOADTOOLARGEContext$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SchemasPAYLOADTOOLARGEContext' from JSON`,
  );
}

/** @internal */
export const PayloadTooLarge$inboundSchema: z.ZodType<
  PayloadTooLarge,
  z.ZodTypeDef,
  unknown
> = z.object({
  RawResponse: z.instanceof(Response).optional(),
  context: z.nullable(z.lazy(() => SchemasPAYLOADTOOLARGEContext$inboundSchema))
    .optional(),
  errorCode: z.string().default("PAYLOAD_TOO_LARGE"),
  message: z.string().default("Payload too large."),
  path: z.string(),
  statusCode: z.number().default(413),
  timestamp: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new PayloadTooLarge(remapped);
  });

/** @internal */
export type PayloadTooLarge$Outbound = {
  RawResponse?: never | undefined;
  context?: SchemasPAYLOADTOOLARGEContext$Outbound | null | undefined;
  errorCode?: string;
  message?: string;
  path: string;
  statusCode?: number;
  timestamp: string;
};

/** @internal */
export const PayloadTooLarge$outboundSchema: z.ZodType<
  PayloadTooLarge$Outbound,
  z.ZodTypeDef,
  PayloadTooLarge
> = z.instanceof(PayloadTooLarge)
  .transform(v => v.data$)
  .pipe(
    z.object({
      rawResponse: z.instanceof(Response).transform(() => {
        throw new Error("Response cannot be serialized");
      }).optional(),
      context: z.nullable(
        z.lazy(() => SchemasPAYLOADTOOLARGEContext$outboundSchema),
      ).optional(),
      errorCode: z.string().default("PAYLOAD_TOO_LARGE"),
      message: z.string().default("Payload too large."),
      path: z.string(),
      statusCode: z.number().default(413),
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
export namespace PayloadTooLarge$ {
  /** @deprecated use `PayloadTooLarge$inboundSchema` instead. */
  export const inboundSchema = PayloadTooLarge$inboundSchema;
  /** @deprecated use `PayloadTooLarge$outboundSchema` instead. */
  export const outboundSchema = PayloadTooLarge$outboundSchema;
  /** @deprecated use `PayloadTooLarge$Outbound` instead. */
  export type Outbound = PayloadTooLarge$Outbound;
}
