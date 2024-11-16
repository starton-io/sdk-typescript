/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type SchemasMAXIMUMWALLETREACHEDContext = {};

export type MaximumWalletReachedData = {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  context?: SchemasMAXIMUMWALLETREACHEDContext | null | undefined;
  errorCode?: string;
  message?: string;
  path: string;
  statusCode?: number;
  timestamp: string;
};

export class MaximumWalletReached extends Error {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  context?: SchemasMAXIMUMWALLETREACHEDContext | null | undefined;
  errorCode?: string;
  path: string;
  statusCode?: number;
  timestamp: string;

  /** The original data that was passed to this error instance. */
  data$: MaximumWalletReachedData;

  constructor(err: MaximumWalletReachedData) {
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

    this.name = "MaximumWalletReached";
  }
}

/** @internal */
export const SchemasMAXIMUMWALLETREACHEDContext$inboundSchema: z.ZodType<
  SchemasMAXIMUMWALLETREACHEDContext,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type SchemasMAXIMUMWALLETREACHEDContext$Outbound = {};

/** @internal */
export const SchemasMAXIMUMWALLETREACHEDContext$outboundSchema: z.ZodType<
  SchemasMAXIMUMWALLETREACHEDContext$Outbound,
  z.ZodTypeDef,
  SchemasMAXIMUMWALLETREACHEDContext
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SchemasMAXIMUMWALLETREACHEDContext$ {
  /** @deprecated use `SchemasMAXIMUMWALLETREACHEDContext$inboundSchema` instead. */
  export const inboundSchema = SchemasMAXIMUMWALLETREACHEDContext$inboundSchema;
  /** @deprecated use `SchemasMAXIMUMWALLETREACHEDContext$outboundSchema` instead. */
  export const outboundSchema =
    SchemasMAXIMUMWALLETREACHEDContext$outboundSchema;
  /** @deprecated use `SchemasMAXIMUMWALLETREACHEDContext$Outbound` instead. */
  export type Outbound = SchemasMAXIMUMWALLETREACHEDContext$Outbound;
}

export function schemasMAXIMUMWALLETREACHEDContextToJSON(
  schemasMAXIMUMWALLETREACHEDContext: SchemasMAXIMUMWALLETREACHEDContext,
): string {
  return JSON.stringify(
    SchemasMAXIMUMWALLETREACHEDContext$outboundSchema.parse(
      schemasMAXIMUMWALLETREACHEDContext,
    ),
  );
}

export function schemasMAXIMUMWALLETREACHEDContextFromJSON(
  jsonString: string,
): SafeParseResult<SchemasMAXIMUMWALLETREACHEDContext, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      SchemasMAXIMUMWALLETREACHEDContext$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SchemasMAXIMUMWALLETREACHEDContext' from JSON`,
  );
}

/** @internal */
export const MaximumWalletReached$inboundSchema: z.ZodType<
  MaximumWalletReached,
  z.ZodTypeDef,
  unknown
> = z.object({
  RawResponse: z.instanceof(Response).optional(),
  context: z.nullable(
    z.lazy(() => SchemasMAXIMUMWALLETREACHEDContext$inboundSchema),
  ).optional(),
  errorCode: z.string().default("MAXIMUM_WALLET_REACHED"),
  message: z.string().default(
    "You can't create more than 1 address without your own KMS. You must specify AWS credentials to create more.",
  ),
  path: z.string(),
  statusCode: z.number().default(412),
  timestamp: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new MaximumWalletReached(remapped);
  });

/** @internal */
export type MaximumWalletReached$Outbound = {
  RawResponse?: never | undefined;
  context?: SchemasMAXIMUMWALLETREACHEDContext$Outbound | null | undefined;
  errorCode?: string;
  message?: string;
  path: string;
  statusCode?: number;
  timestamp: string;
};

/** @internal */
export const MaximumWalletReached$outboundSchema: z.ZodType<
  MaximumWalletReached$Outbound,
  z.ZodTypeDef,
  MaximumWalletReached
> = z.instanceof(MaximumWalletReached)
  .transform(v => v.data$)
  .pipe(
    z.object({
      rawResponse: z.instanceof(Response).transform(() => {
        throw new Error("Response cannot be serialized");
      }).optional(),
      context: z.nullable(
        z.lazy(() => SchemasMAXIMUMWALLETREACHEDContext$outboundSchema),
      ).optional(),
      errorCode: z.string().default("MAXIMUM_WALLET_REACHED"),
      message: z.string().default(
        "You can't create more than 1 address without your own KMS. You must specify AWS credentials to create more.",
      ),
      path: z.string(),
      statusCode: z.number().default(412),
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
export namespace MaximumWalletReached$ {
  /** @deprecated use `MaximumWalletReached$inboundSchema` instead. */
  export const inboundSchema = MaximumWalletReached$inboundSchema;
  /** @deprecated use `MaximumWalletReached$outboundSchema` instead. */
  export const outboundSchema = MaximumWalletReached$outboundSchema;
  /** @deprecated use `MaximumWalletReached$Outbound` instead. */
  export type Outbound = MaximumWalletReached$Outbound;
}
