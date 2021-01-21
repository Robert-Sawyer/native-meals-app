import Category from "../models/category";
import Meal from "../models/meal";

export const CATEGORIES = [
    new Category('c1', 'Polska', '#f54242'),
    new Category('c2', 'Włoska', '#f5428d'),
    new Category('c3', 'Amerykańska', '#f5a442'),
    new Category('c4', 'Niemiecka', '#f5d142'),
    new Category('c5', 'Tajska', '#368dff'),
    new Category('c6', 'Chińska', '#41d95d'),
    new Category('c7', 'Gruzińska', '#9eecff'),
    new Category('c8', 'Indonezyjska', '#b9ffb0'),
    new Category('c9', 'Francuska', '#ffc7ff'),
    new Category('c10', 'Grecka', '#47fced')
];

export const MEALS = [
    new Meal(
        'm1',
        ['c2'],
        'Spaghetti z Sosem Pomidorowym',
        'tanie',
        'łatwe',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
        20,
        [
            '4 pomidory',
            '1 łyżka oliwy z oliwek',
            '1 cebula',
            '250g makaranu Spaghetti',
            'Przyprawy',
            'Ser'
        ],
        [
            'Pokrój pomidory i cebulę na małe kawałki.',
            'Zagotuj wodę - dodaj sól, gdy się zagotuje.',
            'Wrzuć spaghetti do wrzącej wody - powinno być gotowe w około 10-12 minut.',
            'W międzyczasie rozgrzej oliwę i dodaj pokrojoną w kostkę cebulę.',
            'Po 2 minutach dodaj kawałki pomidora, sól, pieprz i inne przyprawy.',
            'Sos będzie gotowy, gdy spaghetti będzie gotowe.',
            'Możesz dodać trochę sera na wierzchu gotowego dania.'
        ],
        false,
        true,
        true,
        true
    ),

    new Meal(
        'm2',
        ['c4'],
        'Tost hawajski',
        'tanie',
        'łatwe',
        'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
        10,
        [
            '1 kromka białego chleba',
            '1 plasterek szynki',
            '1 plaster ananasa',
            '1-2 plastry sera',
            'Masło'
        ],
        [
            'Posmaruj masłem kromkę z jednej strony',
            'Szynkę, ananasa i ser układamy warstwami na białym chlebie',
            'Piecz przez około 10 minut w piekarniku w temperaturze 200°C'
        ],
        false,
        false,
        false,
        false
    ),

    new Meal(
        'm3',
        ['c3'],
        'Klasyczny Hamburger',
        'drogie',
        'łatwe',
        'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
        45,
        [
            '300g wołowiny',
            '1 pomidor',
            '1 ogórek',
            '1 cebula',
            'Ketchup',
            '2 bułki'
        ],
        [
            'Uformuj 2 kotlety',
            'Smaż przez ok. 4 minuty z każdej strony',
            'Podsmaż bułki przez ok. 1 min. z każdej strony',
            'Posmaruj bułki keczupem',
            'Burgera podawaj z pomidorem, ogórkiem i cebulą'
        ],
        false,
        false,
        false,
        true
    ),

    new Meal(
        'm4',
        ['c4'],
        'Sznycel wiedeński',
        'b. drogie',
        'trudne',
        'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
        60,
        [
            '8 kotlety cielęce',
            '4 jajka',
            '200g bułki tartej',
            '100g mąki',
            '300ml masła',
            '100g oliwy',
            'Sól',
            'Plasterki cytryny'
        ],
        [
            'Pokrój cielęcinę na plastry o grubości około 2–4 mm i posól z obu stron.',
            'Roztrzep jajko',
            'Lekko obtocz kotlety w mące, następnie zanurz w jajku, a na koniec obtocz w bułce tartej.',
            'Rozgrzej masło i olej na dużej patelni (pozwól tłuszczowi się rozgrzać) i smaż sznycle na złoty kolor z obu stron.',
            'Poruszaj patelnią, aby sznycle były otoczone oliwą, a panierka stała się puszysta.',
            'Wyjmij mięso i osusz na papierze kuchennym. Na pozostałym oleju podsmaż natkę pietruszki i odcedź.',
            'Umieść sznycle na rozgrzanym talerzu i podawaj udekorowane natką pietruszki i plasterkami cytryny.'
        ],
        false,
        false,
        false,
        false
    ),

    new Meal(
        'm5',
        ['c2', 'c5', 'c10'],
        'Sałatka z wędzonym łososiem',
        'b. drogie',
        'łatwe',
        'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
        15,
        [
            'Rukola',
            "Roszponka",
            'Pietruszka',
            'Koper włoski',
            '200g wędzonego łososia',
            'Musztarda',
            'Ocet balsamiczny',
            'Oliwa z oliwek',
            'Sól i pieprz'
        ],
        [
            'Umyj i pokrój sałatę i zioła',
            'Pokrój łososia w kostkę',
            'Z musztardy, octu i oliwy z oliwek zrób sos',
            'Dodaj łososia i sos do warzyw'
        ],
        true,
        false,
        true,
        true
    ),

    new Meal(
        'm6',
        ['c6', 'c10'],
        'Mus pomarańczowy',
        'tanie',
        'średnie',
        'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
        240,
        [
            '4 saszetki żelatyny',
            '150ml soku pomarańczowego',
            '80g cukru',
            '300g jogurtu',
            '200g śmietany',
            'Skórka pomarańczy'
        ],
        [
            'Żelatynę rozpuść w garnku',
            'Dodaj sok pomarańczowy i cukier',
            'Zdejmij garnek z kuchenki',
            'Dodaj 2 łyżki jogurtu',
            'Wymieszaj żelatynę z pozostałym jogurtem',
            'Schłodź wszystko w lodówce',
            'Ubij śmietanę i ułóż pod masą pomarańczową',
            'Ponownie schłodź wszystko przez około 4 godziny',
            'Podawaj ze skórką pomarańczy'
        ],
        true,
        false,
        true,
        false
    ),

    new Meal(
        'm7',
        ['c7'],
        'Naleśniki',
        'tanie',
        'łatwe',
        'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
        20,
        [
            '1,5 szklanki mąki',
            '3,5 łyżeczki proszku do pieczenia',
            '1 łyżeczka soli',
            '1 łyżka cukru',
            '1,25 szklanki mleka',
            '1 jajko',
            '3 łyżka roztopionego masła'
        ],
        [
            'W dużej misce wymieszaj mąkę, proszek do pieczenia, sól i cukier.',
            'Na środku zrób zagłębienie i wlej mleko, jajko i roztopione masło; mieszaj do uzyskania gładkości.',
            'Rozgrzej lekko natłuszczoną patelnię lub patelnię na średnim ogniu.',
            'Wlej lub zgarnij ciasto na patelnię, używając około 1/4 filiżanki na każdy naleśnik. Przyrumień z obu stron i podawaj na gorąco.'
        ],
        true,
        false,
        true,
        false
    ),

    new Meal(
        'm8',
        ['c8'],
        'Kremowe indyjskie curry z kurczaka',
        'drogie',
        'trudne',
        'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
        35,
        [
            '4 piersi z kurczaka',
            '1 cebula',
            '2 ząbki czosnku',
            '1 kawałek imbiru',
            '4 łyżki migdałów',
            '1 łyżeczka pieprzu cayenne',
            '500ml mleczka kokosowego'
        ],
        [
            'Pierś z kurczaka pokrój i usmaż',
            'Zrób pastę z cebuli, czosnku i imbiru; wszystko podsmaż',
            'Dodaj przyprawy i usmaż',
            'Dodaj pierś z kurczaka + 250 ml wody i gotuj wszystko przez 10 minut',
            'Dodaj mleczko kokosowe',
            'Podawaj z ryżem'
        ],
        true,
        false,
        false,
        true
    ),

    new Meal(
        'm9',
        ['c9'],
        'Suflet czekoladowy',
        'tanie',
        'średnie',
        'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg',
        45,
        [
            '1 łyżka roztopionego masła',
            '2 łyżki cukru',
            '100g ciemnej gorzkiej czekolady',
            '1 łyżka masła',
            '1 łyżka mąki',
            '4,5 łyżki zimnego mleka',
            'Szczypta soli',
            'Szczypta pieprzu cayenne',
            '1 duże żółtko jajka',
            '2 duże białka jajek',
        ],
        [
            'Rozgrzej piekarnik do 190°C. Wyłóż blachę do pieczenia z brzegiem papierem do pieczenia.',
            'Delikatnie posmaruj spód i boki 2 kokilek 1 łyżeczką stopionego masła; pokryj dół i boki aż do krawędzi.',
            'Dodaj 1 łyżkę białego cukru do kokilek. Obracaj kokilki, aż cukier pokryje wszystkie powierzchnie.',
            'Umieść kawałki czekolady w metalowej misce.',
            'Umieść miskę na patelni z około 3 filiżankami gorącej wody na małym ogniu.',
            'Na patelni rozpuść 1 łyżkę masła na średnim ogniu. Posyp mąką. Ubijaj, aż mąka połączy się z masłem i mieszanina zgęstnieje.',
            'Ubijaj zimne mleko, aż mieszanina stanie się gładka i zgęstnieje. Przełóż mieszaninę do miski z rozpuszczoną czekoladą.',
            'Dodaj sól i pieprz cayenne. Dokładnie wymieszaj. Dodaj żółtko i wymieszaj do połączenia.',
            'Pozostaw miskę nad gorącą (nie gotującą się) wodą, aby czekolada była ciepła podczas ubijania białek.',
            'Do naczynia miksującego włożyć 2 białka. Ubijaj, aż mieszanina zacznie gęstnieć, a mieszanina z trzepaczki pozostanie na powierzchni przez około 1 sekundę, zanim skapnie.',
            'Dodaj 1/3 cukru i wymieszaj. Ubij trochę więcej cukru około 15 sekund.',
            'Wymieszaj resztę cukru. Kontynuuj ubijanie, aż mieszanina będzie mniej więcej tak gęsta jak krem do golenia i utrzyma miękki szczyt, przez 3 do 5 minut.',
            'Przenieś trochę mniej niż połowę białek do czekolady.',
            'Mieszaj, aż białka połączą się z czekoladą.',
            'Dodaj resztę białek; delikatnie włóż do czekolady szpatułką, unosząc od dołu i odchylając.',
            'Przestań mieszać po zniknięciu białka. Podziel mieszaninę na 2 przygotowane kokilki. Umieść kokilki na przygotowanej blasze do pieczenia.',
            'Piecz w rozgrzanym piekarniku, aż zawartość napuchnie i wzniesie się ponad krawędzie; od 12 do 15 minut.'
        ],
        true,
        false,
        true,
        false
    ),
    new Meal(
        'm10',
        ['c2', 'c5', 'c10'],
        'Sałatka ze szparagami i pomidorkami',
        'drogie',
        'łatwe',
        'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
        30,
        [
            'Białe i zielone szparagi',
            '30g orzeszków piniowych',
            '300g pomidorków cherry',
            'Sałata',
            'Sól, pieprz i oliwa z oliwek'
        ],
        [
            'Umyj, obierz i pokrój szparagi',
            'Ugotuj w osolonej wodzie',
            'Przypraw solą i pieprzem',
            'Upraż orzeszki piniowe',
            'Przekrój pomidorki na pół',
            'Wymieszaj',
            'Podawać z bagietką'
        ],
        true,
        true,
        true,
        true
    )
];
