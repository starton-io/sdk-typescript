/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  BadRequestException,
  BadRequestException$inboundSchema,
  BadRequestException$Outbound,
  BadRequestException$outboundSchema,
} from "./badrequestexception.js";
import {
  InvalidAbi,
  InvalidAbi$inboundSchema,
  InvalidAbi$Outbound,
  InvalidAbi$outboundSchema,
} from "./invalidabi.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type ImportExistingSmartContractResponseBody =
  | InvalidAbi
  | BadRequestException;

/** @internal */
export const ImportExistingSmartContractResponseBody$inboundSchema: z.ZodType<
  ImportExistingSmartContractResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([InvalidAbi$inboundSchema, BadRequestException$inboundSchema]);

/** @internal */
export type ImportExistingSmartContractResponseBody$Outbound =
  | InvalidAbi$Outbound
  | BadRequestException$Outbound;

/** @internal */
export const ImportExistingSmartContractResponseBody$outboundSchema: z.ZodType<
  ImportExistingSmartContractResponseBody$Outbound,
  z.ZodTypeDef,
  ImportExistingSmartContractResponseBody
> = z.union([InvalidAbi$outboundSchema, BadRequestException$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ImportExistingSmartContractResponseBody$ {
  /** @deprecated use `ImportExistingSmartContractResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ImportExistingSmartContractResponseBody$inboundSchema;
  /** @deprecated use `ImportExistingSmartContractResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ImportExistingSmartContractResponseBody$outboundSchema;
  /** @deprecated use `ImportExistingSmartContractResponseBody$Outbound` instead. */
  export type Outbound = ImportExistingSmartContractResponseBody$Outbound;
}

export function importExistingSmartContractResponseBodyToJSON(
  importExistingSmartContractResponseBody:
    ImportExistingSmartContractResponseBody,
): string {
  return JSON.stringify(
    ImportExistingSmartContractResponseBody$outboundSchema.parse(
      importExistingSmartContractResponseBody,
    ),
  );
}

export function importExistingSmartContractResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  ImportExistingSmartContractResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ImportExistingSmartContractResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ImportExistingSmartContractResponseBody' from JSON`,
  );
}
