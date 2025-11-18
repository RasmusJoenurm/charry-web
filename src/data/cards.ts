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
        name: "MTÜ Eesti Vähiliit",
        card: "/src/assets/cards/Vähiliit_kaart.svg",
        description: "Vähi ennetus ja ravi on ajas aina kasvav vajadus. Oleme siin, et hoida Eestimaa tervena!",
        category: "tervis"
    },
    {
        id: 2,
        name: "MTÜ Onkoloogia",
        card: "/src/assets/cards/Onkoloogika_kaart.svg",
        description: "Rasketel aegadel on inimestel vaja tuge - oleme võrgustik vähi diagnoosi saanutele!",
        category: "tervis",
    },
    {
        id: 3,
        name: "MTÜ Loomus",
        card: "/src/assets/cards/Loomus_kaart.svg",
        description: "Soovime igale loomale väärikat elu. Kaitseme ja toetame koos meie ümber elavaid!",
        category: "loomade heaolu"
    },
    {
        id: 4,
        name: "Varjupaikade MTÜ",
        card: "/src/assets/cards/Varjupaikade_mtu_kaart.svg",
        description: "Iga loom väärib turvalist, puhast ja armastavat kodu - meie hoolitseme selle eest!",
        category: "loomade heaolu"
    },
    {
        id: 5,
        name: "SOS Lasteküla",
        card: "/src/assets/cards/SOS_lastekula_kaart.svg",
        description: "Head lapsed kasvavad hoolivas keskkonnas! Tagame, et kõigil lastel Eestis oleks turvaline lapsepõlv!",
        category: "laste heaolu"
    },
    {
        id: 6,
        name: "Tartu ülikooli kliinikumi lastefond",
        card: "/src/assets/cards/TÜK_Lastefond_kaart.svg",
        description: "Lapsed ja noored on Eesti tulevik. Aitame hoida tuleviku tervist!",
        category: "laste heaolu"
    },
    {
        id: 7,
        name: "Eesti Roheline Liikumine",
        card: "/src/assets/cards/Roheline_liikumine kaart.svg",
        description: "Seisame puhta ja jätkusuutliku Eestimaa eest! Loodus ja kodumaa tervis on meie südameasi!",
        category: "loodus ja keskkond"
    },
    {
        id: 8,
        name: "SA Kiusamisvaba Kool",
        card: "/src/assets/cards/KiVa_kaart.svg",
        description: "Kool peab olema õpilasele turvaline teine kodu, kus kasvada ja õppida. Loome koos turvalise koolikeskkonna!",
        category: "haridus"
    },
    {
        id: 9,
        name: "SA Noored Kooli",
        card: "/src/assets/cards/Noored_kooli_kaart.svg",
        description: "Haridus on oluliseim väärtus, millele on õigus igaühel! Toome Eesti haridusvaldkonda rohkem noori!",
        category: "haridus"
    },
    {
        id: 10,
        name: "Päästeliit",
        card: "/src/assets/cards/Päästeliit_kaart.svg",
        description: "Oleme ühiskonna kaitseinglid, kes aotavad inimesi hirmsamateil hetkedel - julgus on meie suurim voorus!",
        category: "tugev ühiskond"
    }
]

export const categories = ["tervis", "loomade heaolu", "laste heaolu", "loodus ja keskkond", "haridus", "tugev ühiskond"]