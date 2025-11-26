export interface Card {
    id: number;
    name: string;
    card: string;
    description: string;
    category: string;
}

export const cards: Card[] = [
    {
        id: 1,
        name: "cards.cancer.name",
        card: "/src/assets/cards/Vähiliit_kaart.svg",
        description: "cards.cancer.description",
        category: "Tervis"
    },
    {
        id: 2,
        name: "cards.oncology.name",
        card: "/src/assets/cards/Onkoloogika_kaart.svg",
        description: "cards.oncology.description",
        category: "Tervis",
    },
    {
        id: 3,
        name: "cards.animals.name",
        card: "/src/assets/cards/Loomus_kaart.svg",
        description: "cards.animals.description",
        category: "Loomade heaolu"
    },
    {
        id: 4,
        name: "cards.shelter.name",
        card: "/src/assets/cards/Varjupaikade_mtu_kaart.svg",
        description: "cards.shelter.description",
        category: "Loomade heaolu"
    },
    {
        id: 5,
        name: "cards.sos.name",
        card: "/src/assets/cards/SOS_lastekula_kaart.svg",
        description: "cards.sos.description",
        category: "Laste heaolu"
    },
    {
        id: 6,
        name: "cards.hospital.name",
        card: "/src/assets/cards/TÜK_Lastefond_kaart.svg",
        description: "cards.hospital.description",
        category: "Laste heaolu"
    },
    {
        id: 7,
        name: "cards.green.name",
        card: "/src/assets/cards/Roheline_liikumine kaart.svg",
        description: "cards.green.description",
        category: "Loodus ja keskkond"
    },
    {
        id: 8,
        name: "cards.antibully.name",
        card: "/src/assets/cards/KiVa_kaart.svg",
        description: "cards.antibully.description",
        category: "Haridus"
    },
    {
        id: 9,
        name: "cards.school.name",
        card: "/src/assets/cards/Noored_kooli_kaart.svg",
        description: "cards.school.description",
        category: "Haridus"
    },
    {
        id: 10,
        name: "cards.rescue.name",
        card: "/src/assets/cards/Päästeliit_kaart.svg",
        description: "cards.rescue.description",
        category: "Tugev ühiskond"
    }
]

export const categories = ["Tervis", "Loomade heaolu", "Laste heaolu", "Loodus ja keskkond", "Haridus", "Tugev ühiskond"]