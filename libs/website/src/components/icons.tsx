import {
    FileScan,
    SmilePlus,
    BookOpen,
    ShieldAlert,
    Coins,
    GitPullRequestDraft,
    Github,
    X,
    Menu,
    Heart,
    type Icon as LucideIcon,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
    close: X,
    menu: Menu,
    moderation: GitPullRequestDraft,
    administration: FileScan,
    economy: Coins,
    entertaiment: SmilePlus,
    informational: BookOpen,
    socialite: Heart,
    alert: ShieldAlert,
    github: Github,
};

export default Icons;
