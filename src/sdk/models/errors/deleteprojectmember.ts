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
  CouldNotFindResource,
  CouldNotFindResource$inboundSchema,
  CouldNotFindResource$Outbound,
  CouldNotFindResource$outboundSchema,
} from "./couldnotfindresource.js";
import {
  MicroserviceNotResponding,
  MicroserviceNotResponding$inboundSchema,
  MicroserviceNotResponding$Outbound,
  MicroserviceNotResponding$outboundSchema,
} from "./microservicenotresponding.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type DeleteProjectMemberProjectMemberResponseResponseBody =
  MicroserviceNotResponding;

export type DeleteProjectMemberProjectMemberResponseBody = CouldNotFindResource;

export type DeleteProjectMemberResponseBody = BadRequestException;

/** @internal */
export const DeleteProjectMemberProjectMemberResponseResponseBody$inboundSchema:
  z.ZodType<
    DeleteProjectMemberProjectMemberResponseResponseBody,
    z.ZodTypeDef,
    unknown
  > = MicroserviceNotResponding$inboundSchema;

/** @internal */
export type DeleteProjectMemberProjectMemberResponseResponseBody$Outbound =
  MicroserviceNotResponding$Outbound;

/** @internal */
export const DeleteProjectMemberProjectMemberResponseResponseBody$outboundSchema:
  z.ZodType<
    DeleteProjectMemberProjectMemberResponseResponseBody$Outbound,
    z.ZodTypeDef,
    DeleteProjectMemberProjectMemberResponseResponseBody
  > = MicroserviceNotResponding$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteProjectMemberProjectMemberResponseResponseBody$ {
  /** @deprecated use `DeleteProjectMemberProjectMemberResponseResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    DeleteProjectMemberProjectMemberResponseResponseBody$inboundSchema;
  /** @deprecated use `DeleteProjectMemberProjectMemberResponseResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    DeleteProjectMemberProjectMemberResponseResponseBody$outboundSchema;
  /** @deprecated use `DeleteProjectMemberProjectMemberResponseResponseBody$Outbound` instead. */
  export type Outbound =
    DeleteProjectMemberProjectMemberResponseResponseBody$Outbound;
}

export function deleteProjectMemberProjectMemberResponseResponseBodyToJSON(
  deleteProjectMemberProjectMemberResponseResponseBody:
    DeleteProjectMemberProjectMemberResponseResponseBody,
): string {
  return JSON.stringify(
    DeleteProjectMemberProjectMemberResponseResponseBody$outboundSchema.parse(
      deleteProjectMemberProjectMemberResponseResponseBody,
    ),
  );
}

export function deleteProjectMemberProjectMemberResponseResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  DeleteProjectMemberProjectMemberResponseResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteProjectMemberProjectMemberResponseResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'DeleteProjectMemberProjectMemberResponseResponseBody' from JSON`,
  );
}

/** @internal */
export const DeleteProjectMemberProjectMemberResponseBody$inboundSchema:
  z.ZodType<
    DeleteProjectMemberProjectMemberResponseBody,
    z.ZodTypeDef,
    unknown
  > = CouldNotFindResource$inboundSchema;

/** @internal */
export type DeleteProjectMemberProjectMemberResponseBody$Outbound =
  CouldNotFindResource$Outbound;

/** @internal */
export const DeleteProjectMemberProjectMemberResponseBody$outboundSchema:
  z.ZodType<
    DeleteProjectMemberProjectMemberResponseBody$Outbound,
    z.ZodTypeDef,
    DeleteProjectMemberProjectMemberResponseBody
  > = CouldNotFindResource$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteProjectMemberProjectMemberResponseBody$ {
  /** @deprecated use `DeleteProjectMemberProjectMemberResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    DeleteProjectMemberProjectMemberResponseBody$inboundSchema;
  /** @deprecated use `DeleteProjectMemberProjectMemberResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    DeleteProjectMemberProjectMemberResponseBody$outboundSchema;
  /** @deprecated use `DeleteProjectMemberProjectMemberResponseBody$Outbound` instead. */
  export type Outbound = DeleteProjectMemberProjectMemberResponseBody$Outbound;
}

export function deleteProjectMemberProjectMemberResponseBodyToJSON(
  deleteProjectMemberProjectMemberResponseBody:
    DeleteProjectMemberProjectMemberResponseBody,
): string {
  return JSON.stringify(
    DeleteProjectMemberProjectMemberResponseBody$outboundSchema.parse(
      deleteProjectMemberProjectMemberResponseBody,
    ),
  );
}

export function deleteProjectMemberProjectMemberResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  DeleteProjectMemberProjectMemberResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteProjectMemberProjectMemberResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'DeleteProjectMemberProjectMemberResponseBody' from JSON`,
  );
}

/** @internal */
export const DeleteProjectMemberResponseBody$inboundSchema: z.ZodType<
  DeleteProjectMemberResponseBody,
  z.ZodTypeDef,
  unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type DeleteProjectMemberResponseBody$Outbound =
  BadRequestException$Outbound;

/** @internal */
export const DeleteProjectMemberResponseBody$outboundSchema: z.ZodType<
  DeleteProjectMemberResponseBody$Outbound,
  z.ZodTypeDef,
  DeleteProjectMemberResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteProjectMemberResponseBody$ {
  /** @deprecated use `DeleteProjectMemberResponseBody$inboundSchema` instead. */
  export const inboundSchema = DeleteProjectMemberResponseBody$inboundSchema;
  /** @deprecated use `DeleteProjectMemberResponseBody$outboundSchema` instead. */
  export const outboundSchema = DeleteProjectMemberResponseBody$outboundSchema;
  /** @deprecated use `DeleteProjectMemberResponseBody$Outbound` instead. */
  export type Outbound = DeleteProjectMemberResponseBody$Outbound;
}

export function deleteProjectMemberResponseBodyToJSON(
  deleteProjectMemberResponseBody: DeleteProjectMemberResponseBody,
): string {
  return JSON.stringify(
    DeleteProjectMemberResponseBody$outboundSchema.parse(
      deleteProjectMemberResponseBody,
    ),
  );
}

export function deleteProjectMemberResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<DeleteProjectMemberResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteProjectMemberResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteProjectMemberResponseBody' from JSON`,
  );
}
