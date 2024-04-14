interface NavLink {
    name: string;
    link: string;
    fragment?: string;
}

export interface NavModule {
    title: string;
    titleIcon: string;
    sectionName: string;
    content: NavLink[];
    hiddenContent: boolean;
    iconIsSelected: boolean;
    tabindex: number;
}
