/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type CreateWalletResponseBodyData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

export class CreateWalletResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: CreateWalletResponseBodyData;

    constructor(err: CreateWalletResponseBodyData) {
        super("");
        this.data$ = err;

        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "CreateWalletResponseBody";
    }
}

/** @internal */
export namespace CreateWalletResponseBody$ {
    export type Inbound = {
        RawResponse?: Response | undefined;
    };

    export const inboundSchema: z.ZodType<CreateWalletResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
        })
        .transform((v) => {
            return new CreateWalletResponseBody({
                ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
            });
        });
    export type Outbound = {
        RawResponse?: never | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateWalletResponseBody> = z
        .instanceof(CreateWalletResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    rawResponse: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                })
                .transform((v) => {
                    return {
                        ...(v.rawResponse === undefined ? null : { RawResponse: v.rawResponse }),
                    };
                })
        );
}
