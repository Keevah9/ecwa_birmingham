export function getStrapiURL(path) {
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${path}`
}

export function getMedusaURL(path) {
    return `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}${path}`
}

export async function fetchAPI(path, options = {}) {
    const defaultOptions = {
        headers: {
            "Content-Type": "application/json",
        },
    }
    const mergedOptions = {
        ...defaultOptions,
        ...options,
    }
    const requestUrl = getStrapiURL(path)
    const response = await fetch(requestUrl, mergedOptions)

    /*if (!response.ok) {
        throw new Error(`An error occured please try again`);
    }*/

    const data = await response.json()
    return data
}

// global data
export async function getGlobalData() {
    const global = await fetchAPI(`/global?populate=deep`)
    return global
}

export function getStrapiMedia(url) {
    if (url == null) {
        return null
    }
    if (url.startsWith("https") || url.startsWith("//")) {
        return url
    }
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}`
}

//contact
export async function getContact() {
    const contact = await fetchAPI(`/contact-us?populate=deep`)
    return contact
}

// categories
export async function getCategories() {
    const categories = await axios.get(
        getMedusaURL(`/store/product-categories?include_descendants_tree=true`)
    )
    return categories
}

export async function getTrade() {
    const trade = await fetchAPI(`/trade-customer?populate=deep`)
    return trade
}

export async function getHome(params) {
    const home = await fetchAPI(`/homepage?populate=deep`)
    return home
}

// menus
export async function getMenu(id) {
    const menu = await fetchAPI(`/menus/${id}?populate=deep`)
    return menu
}
export async function getFaqs() {
    const faqs = await fetchAPI("/frequently-asked-question?populate=deep");
    return faqs;

}
// pages
export async function getPageData(params, slug) {
    const pagesData = await fetchAPI(
        `/pages?filters[Slug]=${params.slug}&populate=deep`
    )
    if (pagesData == null || pagesData.length === 0) {
        return null
    }

    return pagesData[0]
}
