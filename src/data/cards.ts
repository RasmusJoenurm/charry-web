// Import all SVG assets
import VahiliitKaart from '../assets/cards/Vahiliit_kaart.svg';
import OnkoloogiaKaart from '../assets/cards/Onkoloogika_kaart.svg';
import LoomusKaart from '../assets/cards/Loomus_kaart.svg';
import VarjupaikadeKaart from '../assets/cards/Varjupaikade_mtu_kaart.svg';
import SOSLastekulaKaart from '../assets/cards/SOS_lastekula_kaart.svg';
import TUKLastefondKaart from '../assets/cards/TUK_Lastefond_kaart.svg';
import RohelineKaart from '../assets/cards/Roheline_liikumine kaart.svg';
import KiVaKaart from '../assets/cards/KiVa_kaart.svg';
import NooredKooliKaart from '../assets/cards/Noored_kooli_kaart.svg';
import PaasteliitKaart from '../assets/cards/Paasteliit_kaart.svg';

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
        card: VahiliitKaart,
        description: "cards.cancer.description",
        category: "Tervis"
    },
    {
        id: 2,
        name: "cards.oncology.name",
        card: OnkoloogiaKaart,
        description: "cards.oncology.description",
        category: "Tervis",
    },
    {
        id: 3,
        name: "cards.animals.name",
        card: LoomusKaart,
        description: "cards.animals.description",
        category: "Loomade heaolu"
    },
    {
        id: 4,
        name: "cards.shelter.name",
        card: VarjupaikadeKaart,
        description: "cards.shelter.description",
        category: "Loomade heaolu"
    },
    {
        id: 5,
        name: "cards.sos.name",
        card: SOSLastekulaKaart,
        description: "cards.sos.description",
        category: "Laste heaolu"
    },
    {
        id: 6,
        name: "cards.hospital.name",
        card: TUKLastefondKaart,
        description: "cards.hospital.description",
        category: "Laste heaolu"
    },
    {
        id: 7,
        name: "cards.green.name",
        card: RohelineKaart,
        description: "cards.green.description",
        category: "Loodus ja keskkond"
    },
    {
        id: 8,
        name: "cards.antibully.name",
        card: KiVaKaart,
        description: "cards.antibully.description",
        category: "Haridus"
    },
    {
        id: 9,
        name: "cards.school.name",
        card: NooredKooliKaart,
        description: "cards.school.description",
        category: "Haridus"
    },
    {
        id: 10,
        name: "cards.rescue.name",
        card: PaasteliitKaart,
        description: "cards.rescue.description",
        category: "Tugev ühiskond"
    }
]

export const categories = ["Tervis", "Loomade heaolu", "Laste heaolu", "Loodus ja keskkond", "Haridus", "Tugev ühiskond"]