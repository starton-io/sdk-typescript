/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetStorageUsedPinResponseBodyData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

export class GetStorageUsedPinResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetStorageUsedPinResponseBodyData;

    constructor(err: GetStorageUsedPinResponseBodyData) {
        super("");
        this.data$ = err;

        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "GetStorageUsedPinResponseBody";
    }
}

/** @internal */
export namespace GetStorageUsedPinResponseBody$ {
    export type Inbound = {
        RawResponse?: Response | undefined;
    };

    export const inboundSchema: z.ZodType<GetStorageUsedPinResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
        })
        .transform((v) => {
            return new GetStorageUsedPinResponseBody({
                ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
            });
        });
    export type Outbound = {
        RawResponse?: never | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetStorageUsedPinResponseBody> =
        z
            .instanceof(GetStorageUsedPinResponseBody)
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
                            ...(v.rawResponse === undefined
                                ? null
                                : { RawResponse: v.rawResponse }),
                        };
                    })
            );
}
