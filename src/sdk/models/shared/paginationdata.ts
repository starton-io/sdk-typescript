/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class PaginationData extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "currentPage" })
    currentPage: number;

    @SpeakeasyMetadata()
    @Expose({ name: "itemCount" })
    itemCount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "itemsPerPage" })
    itemsPerPage: number;

    @SpeakeasyMetadata()
    @Expose({ name: "totalItems" })
    totalItems?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "totalPages" })
    totalPages?: number;
}
