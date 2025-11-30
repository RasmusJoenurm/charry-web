import robert from "../assets/robert.svg"
import aleksandr from "../assets/aleksandr.svg"
import johanna from "../assets/johanna.svg"

export interface TeamMember {
    id: number;
    photo: string;
    name: string;
    title: string;
    email: string;
}

export const teamMembers: TeamMember[] = [
    {
        id: 1,
        photo: robert,
        name: "Robert Hütti",
        title: "team.titles.founder",
        email: "robert@charry.ee"
    },
    {
        id: 2,
        photo: aleksandr,
        name: "Aleksandr Lerko",
        title: "team.titles.developer",
        email: "alexandr.lerko@charry.ee"
    },
    {
        id: 3,
        photo: johanna,
        name: "Johanna Saska",
        title: "team.titles.social",
        email: "johanna@charry.ee"
    },
]