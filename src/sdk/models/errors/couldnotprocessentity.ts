/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type SchemasCOULDNOTPROCESSENTITYContext = {};

export type CouldNotProcessEntityData = {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  context?: SchemasCOULDNOTPROCESSENTITYContext | null | undefined;
  errorCode?: string;
  message?: string;
  path: string;
  statusCode?: number;
  timestamp: string;
};

export class CouldNotProcessEntity extends Error {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  context?: SchemasCOULDNOTPROCESSENTITYContext | null | undefined;
  errorCode?: string;
  path: string;
  statusCode?: number;
  timestamp: string;

  /** The original data that was passed to this error instance. */
  data$: CouldNotProcessEntityData;

  constructor(err: CouldNotProcessEntityData) {
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

    this.name = "CouldNotProcessEntity";
  }
}

/** @internal */
export const SchemasCOULDNOTPROCESSENTITYContext$inboundSchema: z.ZodType<
  SchemasCOULDNOTPROCESSENTITYContext,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type SchemasCOULDNOTPROCESSENTITYContext$Outbound = {};

/** @internal */
export const SchemasCOULDNOTPROCESSENTITYContext$outboundSchema: z.ZodType<
  SchemasCOULDNOTPROCESSENTITYContext$Outbound,
  z.ZodTypeDef,
  SchemasCOULDNOTPROCESSENTITYContext
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SchemasCOULDNOTPROCESSENTITYContext$ {
  /** @deprecated use `SchemasCOULDNOTPROCESSENTITYContext$inboundSchema` instead. */
  export const inboundSchema =
    SchemasCOULDNOTPROCESSENTITYContext$inboundSchema;
  /** @deprecated use `SchemasCOULDNOTPROCESSENTITYContext$outboundSchema` instead. */
  export const outboundSchema =
    SchemasCOULDNOTPROCESSENTITYContext$outboundSchema;
  /** @deprecated use `SchemasCOULDNOTPROCESSENTITYContext$Outbound` instead. */
  export type Outbound = SchemasCOULDNOTPROCESSENTITYContext$Outbound;
}

export function schemasCOULDNOTPROCESSENTITYContextToJSON(
  schemasCOULDNOTPROCESSENTITYContext: SchemasCOULDNOTPROCESSENTITYContext,
): string {
  return JSON.stringify(
    SchemasCOULDNOTPROCESSENTITYContext$outboundSchema.parse(
      schemasCOULDNOTPROCESSENTITYContext,
    ),
  );
}

export function schemasCOULDNOTPROCESSENTITYContextFromJSON(
  jsonString: string,
): SafeParseResult<SchemasCOULDNOTPROCESSENTITYContext, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      SchemasCOULDNOTPROCESSENTITYContext$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SchemasCOULDNOTPROCESSENTITYContext' from JSON`,
  );
}

/** @internal */
export const CouldNotProcessEntity$inboundSchema: z.ZodType<
  CouldNotProcessEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  RawResponse: z.instanceof(Response).optional(),
  context: z.nullable(
    z.lazy(() => SchemasCOULDNOTPROCESSENTITYContext$inboundSchema),
  ).optional(),
  errorCode: z.string().default("COULD_NOT_PROCESS_ENTITY"),
  message: z.string().default("Could not process entity."),
  path: z.string(),
  statusCode: z.number().default(422),
  timestamp: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new CouldNotProcessEntity(remapped);
  });

/** @internal */
export type CouldNotProcessEntity$Outbound = {
  RawResponse?: never | undefined;
  context?: SchemasCOULDNOTPROCESSENTITYContext$Outbound | null | undefined;
  errorCode?: string;
  message?: string;
  path: string;
  statusCode?: number;
  timestamp: string;
};

/** @internal */
export const CouldNotProcessEntity$outboundSchema: z.ZodType<
  CouldNotProcessEntity$Outbound,
  z.ZodTypeDef,
  CouldNotProcessEntity
> = z.instanceof(CouldNotProcessEntity)
  .transform(v => v.data$)
  .pipe(
    z.object({
      rawResponse: z.instanceof(Response).transform(() => {
        throw new Error("Response cannot be serialized");
      }).optional(),
      context: z.nullable(
        z.lazy(() => SchemasCOULDNOTPROCESSENTITYContext$outboundSchema),
      ).optional(),
      errorCode: z.string().default("COULD_NOT_PROCESS_ENTITY"),
      message: z.string().default("Could not process entity."),
      path: z.string(),
      statusCode: z.number().default(422),
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
export namespace CouldNotProcessEntity$ {
  /** @deprecated use `CouldNotProcessEntity$inboundSchema` instead. */
  export const inboundSchema = CouldNotProcessEntity$inboundSchema;
  /** @deprecated use `CouldNotProcessEntity$outboundSchema` instead. */
  export const outboundSchema = CouldNotProcessEntity$outboundSchema;
  /** @deprecated use `CouldNotProcessEntity$Outbound` instead. */
  export type Outbound = CouldNotProcessEntity$Outbound;
}
