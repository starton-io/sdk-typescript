/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type SchemasCOULDNOTPERFORMREQUESTContext = {};

export type CouldNotPerformRequestData = {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  context?: SchemasCOULDNOTPERFORMREQUESTContext | null | undefined;
  errorCode?: string;
  message?: string;
  path: string;
  statusCode?: number;
  timestamp: string;
};

export class CouldNotPerformRequest extends Error {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  context?: SchemasCOULDNOTPERFORMREQUESTContext | null | undefined;
  errorCode?: string;
  path: string;
  statusCode?: number;
  timestamp: string;

  /** The original data that was passed to this error instance. */
  data$: CouldNotPerformRequestData;

  constructor(err: CouldNotPerformRequestData) {
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

    this.name = "CouldNotPerformRequest";
  }
}

/** @internal */
export const SchemasCOULDNOTPERFORMREQUESTContext$inboundSchema: z.ZodType<
  SchemasCOULDNOTPERFORMREQUESTContext,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type SchemasCOULDNOTPERFORMREQUESTContext$Outbound = {};

/** @internal */
export const SchemasCOULDNOTPERFORMREQUESTContext$outboundSchema: z.ZodType<
  SchemasCOULDNOTPERFORMREQUESTContext$Outbound,
  z.ZodTypeDef,
  SchemasCOULDNOTPERFORMREQUESTContext
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SchemasCOULDNOTPERFORMREQUESTContext$ {
  /** @deprecated use `SchemasCOULDNOTPERFORMREQUESTContext$inboundSchema` instead. */
  export const inboundSchema =
    SchemasCOULDNOTPERFORMREQUESTContext$inboundSchema;
  /** @deprecated use `SchemasCOULDNOTPERFORMREQUESTContext$outboundSchema` instead. */
  export const outboundSchema =
    SchemasCOULDNOTPERFORMREQUESTContext$outboundSchema;
  /** @deprecated use `SchemasCOULDNOTPERFORMREQUESTContext$Outbound` instead. */
  export type Outbound = SchemasCOULDNOTPERFORMREQUESTContext$Outbound;
}

export function schemasCOULDNOTPERFORMREQUESTContextToJSON(
  schemasCOULDNOTPERFORMREQUESTContext: SchemasCOULDNOTPERFORMREQUESTContext,
): string {
  return JSON.stringify(
    SchemasCOULDNOTPERFORMREQUESTContext$outboundSchema.parse(
      schemasCOULDNOTPERFORMREQUESTContext,
    ),
  );
}

export function schemasCOULDNOTPERFORMREQUESTContextFromJSON(
  jsonString: string,
): SafeParseResult<SchemasCOULDNOTPERFORMREQUESTContext, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      SchemasCOULDNOTPERFORMREQUESTContext$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SchemasCOULDNOTPERFORMREQUESTContext' from JSON`,
  );
}

/** @internal */
export const CouldNotPerformRequest$inboundSchema: z.ZodType<
  CouldNotPerformRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  RawResponse: z.instanceof(Response).optional(),
  context: z.nullable(
    z.lazy(() => SchemasCOULDNOTPERFORMREQUESTContext$inboundSchema),
  ).optional(),
  errorCode: z.string().default("COULD_NOT_PERFORM_REQUEST"),
  message: z.string().default(
    "Unexpected error occurred performing the request.",
  ),
  path: z.string(),
  statusCode: z.number().default(500),
  timestamp: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new CouldNotPerformRequest(remapped);
  });

/** @internal */
export type CouldNotPerformRequest$Outbound = {
  RawResponse?: never | undefined;
  context?: SchemasCOULDNOTPERFORMREQUESTContext$Outbound | null | undefined;
  errorCode?: string;
  message?: string;
  path: string;
  statusCode?: number;
  timestamp: string;
};

/** @internal */
export const CouldNotPerformRequest$outboundSchema: z.ZodType<
  CouldNotPerformRequest$Outbound,
  z.ZodTypeDef,
  CouldNotPerformRequest
> = z.instanceof(CouldNotPerformRequest)
  .transform(v => v.data$)
  .pipe(
    z.object({
      rawResponse: z.instanceof(Response).transform(() => {
        throw new Error("Response cannot be serialized");
      }).optional(),
      context: z.nullable(
        z.lazy(() => SchemasCOULDNOTPERFORMREQUESTContext$outboundSchema),
      ).optional(),
      errorCode: z.string().default("COULD_NOT_PERFORM_REQUEST"),
      message: z.string().default(
        "Unexpected error occurred performing the request.",
      ),
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
export namespace CouldNotPerformRequest$ {
  /** @deprecated use `CouldNotPerformRequest$inboundSchema` instead. */
  export const inboundSchema = CouldNotPerformRequest$inboundSchema;
  /** @deprecated use `CouldNotPerformRequest$outboundSchema` instead. */
  export const outboundSchema = CouldNotPerformRequest$outboundSchema;
  /** @deprecated use `CouldNotPerformRequest$Outbound` instead. */
  export type Outbound = CouldNotPerformRequest$Outbound;
}
