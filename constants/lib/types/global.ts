import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout: (page: ReactElement) => ReactNode;
};
export type AppPropsWithLayout<P = {}, IP = P> = AppProps<P> & {
  Component: NextPageWithLayout<P, IP>;
};
export type StrapiGlobalResponse = {
  
  data?: {
    attributes: {
      TelephoneNumber: string;
      TextNumber: string;
      EmailAddress: string;
      
      RepresentativeExample?: {
        APR: string;
        CashPrice: string;
        Borrowing: string;
        Deposit: string;
        AgreementType: string;
        NumberOfMonthlyPayments: string;
        FixedRateOfInterest: string;
        ExcessMileage: string;
        MonthlyPaymentsOf: string;
        TotalAmountPayable: string;
        CostOfCredit: string;
        OptionalFinalPayment: string;
        AnnualMileage: string;
        ComponentLabel: string;
      };
    };
  };
};
