
export type StrapiPageResponse = {
  data: Array<SingleStrapiPageResponse>;
};

export type SingleStrapiPageResponse = {
  attributes: {
    PageTitle: string;
    Slug: string;
    SEO?: SEOResponse;
    PageIntroductoryContent: string;
    Pages?: {
      id?: number;
      '__component?': string;
      [key: string]: any;
    };
  };
};

export type FlexibleStrapiPageResponse = {
  ButtonOneLink: string | undefined;
  ButtonTwoLink: string | undefined;
  ButtonTwo: string | undefined;
  ButtonOne: string | undefined;
  HasPortfolioandQuoteButtons: boolean;
  FeaturedImage: any;
  canonicalURL: any;
  PageTitle?: string;
  PageIntroductoryContent?: string;
  PageSubTitle?: string;
  Slug?: string;
  Title?: string;
  SEO?: SEOResponse;
  HasQuoteComponent?: boolean;
  Pages?: {
    id?: number
    '__component?': string;
    [key: string]: any;
  };
};

export type StrapiBlogResponse = {
  data: Array<SingleStrapiBlogResponse>;
};

export type SingleStrapiBlogResponse = {
  attributes: {
    PageTitle: string;
    Slug: string;
    SEO?: SEOResponse;
    PageInductoryContent: string;
    BlogContent: string;
    FeaturedImage?: string | null;
  };
};

export type SEOResponse = {
  id: number;
  metaTitle: string;
  metaDescription: string;
  metaImage?: string;
  metaSocial?: Array<MetaSocialResponse>;
  keywords?: string;
  metaRobots?: string | null;
  structuredData?: JSON | null;
  metaViewport?: string | null;
  canonicalURL: string | null;
};

export type MetaSocialResponse = {
  socialNetwork: string;
  title: string;
  description: string;
  image?: string | null;
};
