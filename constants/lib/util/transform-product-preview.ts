import { getPercentageDiff } from "@lib/util/get-precentage-diff"
import { Product, Region } from "@medusajs/medusa"
import { formatAmount } from "medusa-react"
import { ProductPreviewType } from "types/global"
import { CalculatedVariant } from "types/medusa"

const transformProductPreview = (
    product: Product,
    region: Region
): ProductPreviewType => {
    const variants = product.variants as CalculatedVariant[]

    let cheapestVariant = undefined

    if (variants?.length > 0) {
        cheapestVariant = variants.reduce((acc, curr) => {
            if (acc.calculated_price > curr.calculated_price) {
                return curr
            }
            return acc
        }, variants[0])
    }

    return {
        sku: product.variants[0].sku,
        id: product.id,
        title: product.title,
        handle: product.handle,
        thumbnail: product.thumbnail,
        collection: product.collection,
        qty: product.variants[0].inventory_quantity,
        price: cheapestVariant
            ? {
                  calculated_price: formatAmount({
                      amount: cheapestVariant.calculated_price,
                      region: region,
                      includeTaxes: true,
                  }),
                  original_price: formatAmount({
                      amount: cheapestVariant.original_price,
                      region: region,
                      includeTaxes: true,
                  }),
                  difference: getPercentageDiff(
                      cheapestVariant.original_price,
                      cheapestVariant.calculated_price
                  ),
                  price_type: cheapestVariant.calculated_price_type,
              }
            : undefined,
    }
}

export default transformProductPreview
