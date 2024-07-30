import { Url } from "next/dist/shared/lib/router/router";

interface InformationContentProps {
    id: number;
    text: string;
    linkText?: string;
    href?: string | Url;
}

export const informationContent: InformationContentProps[] = [
    {
        id: 1,
        text: "Create by",
        linkText: "Ostap Bender",
        href: "https://github.com/hobbes456",
    },
    {
        id: 2,
        text: "Special for",
        linkText: "S&P",
        href: "https://snp.agency/ru",
    },
    {
        id: 3,
        text: "Your advertisement could be here.",
    },
];
