/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type SchemasUNKNOWNContext = {};

export type UnknownData = {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  context?: SchemasUNKNOWNContext | null | undefined;
  errorCode?: string;
  message?: string;
  path: string;
  statusCode?: number;
  timestamp: string;
};

export class Unknown extends Error {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  context?: SchemasUNKNOWNContext | null | undefined;
  errorCode?: string;
  path: string;
  statusCode?: number;
  timestamp: string;

  /** The original data that was passed to this error instance. */
  data$: UnknownData;

  constructor(err: UnknownData) {
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

    this.name = "Unknown";
  }
}

/** @internal */
export const SchemasUNKNOWNContext$inboundSchema: z.ZodType<
  SchemasUNKNOWNContext,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type SchemasUNKNOWNContext$Outbound = {};

/** @internal */
export const SchemasUNKNOWNContext$outboundSchema: z.ZodType<
  SchemasUNKNOWNContext$Outbound,
  z.ZodTypeDef,
  SchemasUNKNOWNContext
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SchemasUNKNOWNContext$ {
  /** @deprecated use `SchemasUNKNOWNContext$inboundSchema` instead. */
  export const inboundSchema = SchemasUNKNOWNContext$inboundSchema;
  /** @deprecated use `SchemasUNKNOWNContext$outboundSchema` instead. */
  export const outboundSchema = SchemasUNKNOWNContext$outboundSchema;
  /** @deprecated use `SchemasUNKNOWNContext$Outbound` instead. */
  export type Outbound = SchemasUNKNOWNContext$Outbound;
}

/** @internal */
export const Unknown$inboundSchema: z.ZodType<Unknown, z.ZodTypeDef, unknown> =
  z.object({
    RawResponse: z.instanceof(Response).optional(),
    context: z.nullable(z.lazy(() => SchemasUNKNOWNContext$inboundSchema))
      .optional(),
    errorCode: z.string().default("UNKNOWN"),
    message: z.string().default("Unknown error."),
    path: z.string(),
    statusCode: z.number().default(500),
    timestamp: z.string(),
  })
    .transform((v) => {
      const remapped = remap$(v, {
        "RawResponse": "rawResponse",
      });

      return new Unknown(remapped);
    });

/** @internal */
export type Unknown$Outbound = {
  RawResponse?: never | undefined;
  context?: SchemasUNKNOWNContext$Outbound | null | undefined;
  errorCode?: string;
  message?: string;
  path: string;
  statusCode?: number;
  timestamp: string;
};

/** @internal */
export const Unknown$outboundSchema: z.ZodType<
  Unknown$Outbound,
  z.ZodTypeDef,
  Unknown
> = z.instanceof(Unknown)
  .transform(v => v.data$)
  .pipe(
    z.object({
      rawResponse: z.instanceof(Response).transform(() => {
        throw new Error("Response cannot be serialized");
      }).optional(),
      context: z.nullable(z.lazy(() => SchemasUNKNOWNContext$outboundSchema))
        .optional(),
      errorCode: z.string().default("UNKNOWN"),
      message: z.string().default("Unknown error."),
      path: z.string(),
      statusCode: z.number().default(500),
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
export namespace Unknown$ {
  /** @deprecated use `Unknown$inboundSchema` instead. */
  export const inboundSchema = Unknown$inboundSchema;
  /** @deprecated use `Unknown$outboundSchema` instead. */
  export const outboundSchema = Unknown$outboundSchema;
  /** @deprecated use `Unknown$Outbound` instead. */
  export type Outbound = Unknown$Outbound;
}
