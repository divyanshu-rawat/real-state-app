export interface property {
    position: number[],
    title: string,
    averageRating: number,
    icon: string,
    vicinity: string;
    type: string,
    having: any[],
    href: string;
    id: string,
    category: category,
    distance: number,
    openingHours?: openingHours[],
    alternativeNames?: alternativeNames[]
}

interface category {
    id: string,
    title: string,
    href: string,
    type: string,
    system: string
}

interface openingHours {
    text: string,
    label: string,
    isOpen: string,
    type: string,
    system: string,
    structured: structured[]
}

interface alternativeNames {
    name: string,
    language: string,
}

interface structured {
    start: string,
    duration: string,
    recurrence: string,
}
