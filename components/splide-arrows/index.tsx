import React from 'react'

interface SplideArrowsProps {
    isHomePage?: boolean
}

export const SplideArrows = (props: SplideArrowsProps) => {
    return (
        <div className={`splide__arrows`}>
            <button className={`splide__arrow splide__arrow--prev ${props.isHomePage ? "" : " box-shadow"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <path d="M35 23.5C35.8284 23.5 36.5 24.1716 36.5 25C36.5 25.8284 35.8284 26.5 35 26.5V23.5ZM13.9393 26.0607C13.3536 25.4749 13.3536 24.5251 13.9393 23.9393L23.4853 14.3934C24.0711 13.8076 25.0208 13.8076 25.6066 14.3934C26.1924 14.9792 26.1924 15.9289 25.6066 16.5147L17.1213 25L25.6066 33.4853C26.1924 34.0711 26.1924 35.0208 25.6066 35.6066C25.0208 36.1924 24.0711 36.1924 23.4853 35.6066L13.9393 26.0607ZM35 26.5H15V23.5H35V26.5Z" fill="#223B50" />
                </svg>
            </button>
            <button className={`splide__arrow splide__arrow--next ${props.isHomePage ? "" : " box-shadow"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <path d="M15 23.5C14.1716 23.5 13.5 24.1716 13.5 25C13.5 25.8284 14.1716 26.5 15 26.5V23.5ZM36.0607 26.0607C36.6464 25.4749 36.6464 24.5251 36.0607 23.9393L26.5147 14.3934C25.9289 13.8076 24.9792 13.8076 24.3934 14.3934C23.8076 14.9792 23.8076 15.9289 24.3934 16.5147L32.8787 25L24.3934 33.4853C23.8076 34.0711 23.8076 35.0208 24.3934 35.6066C24.9792 36.1924 25.9289 36.1924 26.5147 35.6066L36.0607 26.0607ZM15 26.5H35V23.5H15V26.5Z" fill="red" />
                </svg>
            </button>
        </div>
    )
}

export default SplideArrows