/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type RequireFaucetDto = {
  /**
   * Captcha token.
   */
  captchaToken?: string | undefined;
  /**
   * Destination wallet address.
   */
  wallet: string;
};

/** @internal */
export const RequireFaucetDto$inboundSchema: z.ZodType<
  RequireFaucetDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  captchaToken: z.string().optional(),
  wallet: z.string(),
});

/** @internal */
export type RequireFaucetDto$Outbound = {
  captchaToken?: string | undefined;
  wallet: string;
};

/** @internal */
export const RequireFaucetDto$outboundSchema: z.ZodType<
  RequireFaucetDto$Outbound,
  z.ZodTypeDef,
  RequireFaucetDto
> = z.object({
  captchaToken: z.string().optional(),
  wallet: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RequireFaucetDto$ {
  /** @deprecated use `RequireFaucetDto$inboundSchema` instead. */
  export const inboundSchema = RequireFaucetDto$inboundSchema;
  /** @deprecated use `RequireFaucetDto$outboundSchema` instead. */
  export const outboundSchema = RequireFaucetDto$outboundSchema;
  /** @deprecated use `RequireFaucetDto$Outbound` instead. */
  export type Outbound = RequireFaucetDto$Outbound;
}
