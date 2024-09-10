/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type SchemasFORBIDDENContext = {};

export type ForbiddenData = {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  context?: SchemasFORBIDDENContext | null | undefined;
  errorCode?: string;
  message?: string;
  path: string;
  statusCode?: number;
  timestamp: string;
};

export class Forbidden extends Error {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  context?: SchemasFORBIDDENContext | null | undefined;
  errorCode?: string;
  path: string;
  statusCode?: number;
  timestamp: string;

  /** The original data that was passed to this error instance. */
  data$: ForbiddenData;

  constructor(err: ForbiddenData) {
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

    this.name = "Forbidden";
  }
}

/** @internal */
export const SchemasFORBIDDENContext$inboundSchema: z.ZodType<
  SchemasFORBIDDENContext,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type SchemasFORBIDDENContext$Outbound = {};

/** @internal */
export const SchemasFORBIDDENContext$outboundSchema: z.ZodType<
  SchemasFORBIDDENContext$Outbound,
  z.ZodTypeDef,
  SchemasFORBIDDENContext
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SchemasFORBIDDENContext$ {
  /** @deprecated use `SchemasFORBIDDENContext$inboundSchema` instead. */
  export const inboundSchema = SchemasFORBIDDENContext$inboundSchema;
  /** @deprecated use `SchemasFORBIDDENContext$outboundSchema` instead. */
  export const outboundSchema = SchemasFORBIDDENContext$outboundSchema;
  /** @deprecated use `SchemasFORBIDDENContext$Outbound` instead. */
  export type Outbound = SchemasFORBIDDENContext$Outbound;
}

/** @internal */
export const Forbidden$inboundSchema: z.ZodType<
  Forbidden,
  z.ZodTypeDef,
  unknown
> = z.object({
  RawResponse: z.instanceof(Response).optional(),
  context: z.nullable(z.lazy(() => SchemasFORBIDDENContext$inboundSchema))
    .optional(),
  errorCode: z.string().default("FORBIDDEN"),
  message: z.string().default("Unauthorized."),
  path: z.string(),
  statusCode: z.number().default(403),
  timestamp: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new Forbidden(remapped);
  });

/** @internal */
export type Forbidden$Outbound = {
  RawResponse?: never | undefined;
  context?: SchemasFORBIDDENContext$Outbound | null | undefined;
  errorCode?: string;
  message?: string;
  path: string;
  statusCode?: number;
  timestamp: string;
};

/** @internal */
export const Forbidden$outboundSchema: z.ZodType<
  Forbidden$Outbound,
  z.ZodTypeDef,
  Forbidden
> = z.instanceof(Forbidden)
  .transform(v => v.data$)
  .pipe(
    z.object({
      rawResponse: z.instanceof(Response).transform(() => {
        throw new Error("Response cannot be serialized");
      }).optional(),
      context: z.nullable(z.lazy(() => SchemasFORBIDDENContext$outboundSchema))
        .optional(),
      errorCode: z.string().default("FORBIDDEN"),
      message: z.string().default("Unauthorized."),
      path: z.string(),
      statusCode: z.number().default(403),
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
export namespace Forbidden$ {
  /** @deprecated use `Forbidden$inboundSchema` instead. */
  export const inboundSchema = Forbidden$inboundSchema;
  /** @deprecated use `Forbidden$outboundSchema` instead. */
  export const outboundSchema = Forbidden$outboundSchema;
  /** @deprecated use `Forbidden$Outbound` instead. */
  export type Outbound = Forbidden$Outbound;
}
