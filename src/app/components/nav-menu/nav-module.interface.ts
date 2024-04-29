interface NavLink {
    name: string;
    link?: string;
    fragment?: string;
}

interface NavTitle {
  name: string;
  icon: string;
}

export interface NavModule {
    title: NavTitle;
    baseLink: string;
    anchors: NavLink[];
    hiddenAnchors: boolean;
    tabindex: number;
}
