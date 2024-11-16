/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type SchemasCOULDNOTFINDRESOURCEContext = {};

export type CouldNotFindResourceData = {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  context?: SchemasCOULDNOTFINDRESOURCEContext | null | undefined;
  errorCode?: string;
  message?: string;
  path: string;
  statusCode?: number;
  timestamp: string;
};

export class CouldNotFindResource extends Error {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  context?: SchemasCOULDNOTFINDRESOURCEContext | null | undefined;
  errorCode?: string;
  path: string;
  statusCode?: number;
  timestamp: string;

  /** The original data that was passed to this error instance. */
  data$: CouldNotFindResourceData;

  constructor(err: CouldNotFindResourceData) {
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

    this.name = "CouldNotFindResource";
  }
}

/** @internal */
export const SchemasCOULDNOTFINDRESOURCEContext$inboundSchema: z.ZodType<
  SchemasCOULDNOTFINDRESOURCEContext,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type SchemasCOULDNOTFINDRESOURCEContext$Outbound = {};

/** @internal */
export const SchemasCOULDNOTFINDRESOURCEContext$outboundSchema: z.ZodType<
  SchemasCOULDNOTFINDRESOURCEContext$Outbound,
  z.ZodTypeDef,
  SchemasCOULDNOTFINDRESOURCEContext
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SchemasCOULDNOTFINDRESOURCEContext$ {
  /** @deprecated use `SchemasCOULDNOTFINDRESOURCEContext$inboundSchema` instead. */
  export const inboundSchema = SchemasCOULDNOTFINDRESOURCEContext$inboundSchema;
  /** @deprecated use `SchemasCOULDNOTFINDRESOURCEContext$outboundSchema` instead. */
  export const outboundSchema =
    SchemasCOULDNOTFINDRESOURCEContext$outboundSchema;
  /** @deprecated use `SchemasCOULDNOTFINDRESOURCEContext$Outbound` instead. */
  export type Outbound = SchemasCOULDNOTFINDRESOURCEContext$Outbound;
}

export function schemasCOULDNOTFINDRESOURCEContextToJSON(
  schemasCOULDNOTFINDRESOURCEContext: SchemasCOULDNOTFINDRESOURCEContext,
): string {
  return JSON.stringify(
    SchemasCOULDNOTFINDRESOURCEContext$outboundSchema.parse(
      schemasCOULDNOTFINDRESOURCEContext,
    ),
  );
}

export function schemasCOULDNOTFINDRESOURCEContextFromJSON(
  jsonString: string,
): SafeParseResult<SchemasCOULDNOTFINDRESOURCEContext, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      SchemasCOULDNOTFINDRESOURCEContext$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SchemasCOULDNOTFINDRESOURCEContext' from JSON`,
  );
}

/** @internal */
export const CouldNotFindResource$inboundSchema: z.ZodType<
  CouldNotFindResource,
  z.ZodTypeDef,
  unknown
> = z.object({
  RawResponse: z.instanceof(Response).optional(),
  context: z.nullable(
    z.lazy(() => SchemasCOULDNOTFINDRESOURCEContext$inboundSchema),
  ).optional(),
  errorCode: z.string().default("COULD_NOT_FIND_RESOURCE"),
  message: z.string().default("Could not found resource."),
  path: z.string(),
  statusCode: z.number().default(404),
  timestamp: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new CouldNotFindResource(remapped);
  });

/** @internal */
export type CouldNotFindResource$Outbound = {
  RawResponse?: never | undefined;
  context?: SchemasCOULDNOTFINDRESOURCEContext$Outbound | null | undefined;
  errorCode?: string;
  message?: string;
  path: string;
  statusCode?: number;
  timestamp: string;
};

/** @internal */
export const CouldNotFindResource$outboundSchema: z.ZodType<
  CouldNotFindResource$Outbound,
  z.ZodTypeDef,
  CouldNotFindResource
> = z.instanceof(CouldNotFindResource)
  .transform(v => v.data$)
  .pipe(
    z.object({
      rawResponse: z.instanceof(Response).transform(() => {
        throw new Error("Response cannot be serialized");
      }).optional(),
      context: z.nullable(
        z.lazy(() => SchemasCOULDNOTFINDRESOURCEContext$outboundSchema),
      ).optional(),
      errorCode: z.string().default("COULD_NOT_FIND_RESOURCE"),
      message: z.string().default("Could not found resource."),
      path: z.string(),
      statusCode: z.number().default(404),
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
export namespace CouldNotFindResource$ {
  /** @deprecated use `CouldNotFindResource$inboundSchema` instead. */
  export const inboundSchema = CouldNotFindResource$inboundSchema;
  /** @deprecated use `CouldNotFindResource$outboundSchema` instead. */
  export const outboundSchema = CouldNotFindResource$outboundSchema;
  /** @deprecated use `CouldNotFindResource$Outbound` instead. */
  export type Outbound = CouldNotFindResource$Outbound;
}
