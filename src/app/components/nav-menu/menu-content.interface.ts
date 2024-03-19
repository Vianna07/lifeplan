interface MenuContentItem {
    name: string;
    link: string;
    fragment: string;
}

export interface MenuContent {
    title: string;
    titleIcon: string;
    sectionName: string;
    content: MenuContentItem[];
    hiddenContent: boolean;
}
