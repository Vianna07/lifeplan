interface ModuleContent {
    name: string;
    link: string;
    fragment: string;
}

export interface Module {
    title: string;
    titleIcon: string;
    sectionName: string;
    content: ModuleContent[];
    hiddenContent: boolean;
    iconIsSelected: boolean;
    tabindex: number;
}
