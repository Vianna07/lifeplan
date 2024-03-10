interface MenuContentItem {
    name: string;
    link: string;
    fragment: string;
}

export interface MenuContent {
    title: string;
    titleIcon: string;
    content: MenuContentItem[];
    showContent: boolean;
}
