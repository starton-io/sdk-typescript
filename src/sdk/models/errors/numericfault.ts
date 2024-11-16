/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type SchemasNUMERICFAULTContext = {};

export type NumericFaultData = {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  context?: SchemasNUMERICFAULTContext | null | undefined;
  errorCode?: string;
  message?: string;
  path: string;
  statusCode?: number;
  timestamp: string;
};

export class NumericFault extends Error {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  context?: SchemasNUMERICFAULTContext | null | undefined;
  errorCode?: string;
  path: string;
  statusCode?: number;
  timestamp: string;

  /** The original data that was passed to this error instance. */
  data$: NumericFaultData;

  constructor(err: NumericFaultData) {
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

    this.name = "NumericFault";
  }
}

/** @internal */
export const SchemasNUMERICFAULTContext$inboundSchema: z.ZodType<
  SchemasNUMERICFAULTContext,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type SchemasNUMERICFAULTContext$Outbound = {};

/** @internal */
export const SchemasNUMERICFAULTContext$outboundSchema: z.ZodType<
  SchemasNUMERICFAULTContext$Outbound,
  z.ZodTypeDef,
  SchemasNUMERICFAULTContext
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SchemasNUMERICFAULTContext$ {
  /** @deprecated use `SchemasNUMERICFAULTContext$inboundSchema` instead. */
  export const inboundSchema = SchemasNUMERICFAULTContext$inboundSchema;
  /** @deprecated use `SchemasNUMERICFAULTContext$outboundSchema` instead. */
  export const outboundSchema = SchemasNUMERICFAULTContext$outboundSchema;
  /** @deprecated use `SchemasNUMERICFAULTContext$Outbound` instead. */
  export type Outbound = SchemasNUMERICFAULTContext$Outbound;
}

export function schemasNUMERICFAULTContextToJSON(
  schemasNUMERICFAULTContext: SchemasNUMERICFAULTContext,
): string {
  return JSON.stringify(
    SchemasNUMERICFAULTContext$outboundSchema.parse(schemasNUMERICFAULTContext),
  );
}

export function schemasNUMERICFAULTContextFromJSON(
  jsonString: string,
): SafeParseResult<SchemasNUMERICFAULTContext, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SchemasNUMERICFAULTContext$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SchemasNUMERICFAULTContext' from JSON`,
  );
}

/** @internal */
export const NumericFault$inboundSchema: z.ZodType<
  NumericFault,
  z.ZodTypeDef,
  unknown
> = z.object({
  RawResponse: z.instanceof(Response).optional(),
  context: z.nullable(z.lazy(() => SchemasNUMERICFAULTContext$inboundSchema))
    .optional(),
  errorCode: z.string().default("NUMERIC_FAULT"),
  message: z.string().default("Illegal operations with numerical values."),
  path: z.string(),
  statusCode: z.number().default(400),
  timestamp: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new NumericFault(remapped);
  });

/** @internal */
export type NumericFault$Outbound = {
  RawResponse?: never | undefined;
  context?: SchemasNUMERICFAULTContext$Outbound | null | undefined;
  errorCode?: string;
  message?: string;
  path: string;
  statusCode?: number;
  timestamp: string;
};

/** @internal */
export const NumericFault$outboundSchema: z.ZodType<
  NumericFault$Outbound,
  z.ZodTypeDef,
  NumericFault
> = z.instanceof(NumericFault)
  .transform(v => v.data$)
  .pipe(
    z.object({
      rawResponse: z.instanceof(Response).transform(() => {
        throw new Error("Response cannot be serialized");
      }).optional(),
      context: z.nullable(
        z.lazy(() => SchemasNUMERICFAULTContext$outboundSchema),
      ).optional(),
      errorCode: z.string().default("NUMERIC_FAULT"),
      message: z.string().default("Illegal operations with numerical values."),
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
export namespace NumericFault$ {
  /** @deprecated use `NumericFault$inboundSchema` instead. */
  export const inboundSchema = NumericFault$inboundSchema;
  /** @deprecated use `NumericFault$outboundSchema` instead. */
  export const outboundSchema = NumericFault$outboundSchema;
  /** @deprecated use `NumericFault$Outbound` instead. */
  export type Outbound = NumericFault$Outbound;
}
