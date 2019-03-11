export class Pois{
    static KEY_ROUTE_NAME = 'route';
    static KEY_POI_NAME = 'poiName';
    static KEY_POI_LOCATION = "poiLocation";
    static KEY_POI_DESCRIPTION = "poiDescription";
    static KEY_POI_BRIEF_DESCRIPTION = "poiBriefDescription";
    static KEY_POI_IMAGE_URL  ="poiImageUrl";

    static routeNames = [
        'nature, beergarden, seightseeing',
        'history and beergarden at lake',
        'car driving and bavarian lakes'
    ];
    static routeDefs = [
        [
            [0,0],[0,1],[0,2],[0,3],[0,0]
        ],
        [
            [1,0],[1,4],[1,5],[1,1],[1,0]
        ],
        [
            [2,0],[2,6],[2,7],[2,2],[2,0]
        ]   
    ];
    static poiImageUrls = [
        "https://images.pexels.com/photos/705792/pexels-photo-705792.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Nuevo_Palacio_Schleissheim%2C_Oberschleissheim%2C_Alemania%2C_2013-08-31%2C_DD_06.jpg/700px-Nuevo_Palacio_Schleissheim%2C_Oberschleissheim%2C_Alemania%2C_2013-08-31%2C_DD_06.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Starnberg-2.jpg/600px-Starnberg-2.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Deutschland%2C_Andechs%2C_Klosterkirche.JPG/440px-Deutschland%2C_Andechs%2C_Klosterkirche.JPG",
        "https://de.wikipedia.org/wiki/Datei:Dachau_watchtower_b_1945-04.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Poschinger-Weiher-2006-07-18.jpg/600px-Poschinger-Weiher-2006-07-18.jpg",
        "https://bayern.infomaxnet.de/data/mediadb/cms_pictures/generated/dba657a28419a7dd8ff17ae510a16095.jpg",
        "https://www.museen-in-bayern.de/uploads/tx_landesstelle/images/Bad_Toelz_Stadtmuseum_Bad_Toelz_Museumsphoto_Fassade.jpg"
    
    ];

    static poiNames = [
        'BMW World','Schlossanlage Schleißheim',
        'Starnberg','Kloster Andechs','KZ Dachau',
        'Poschinger Weiher','Bräustüberl Tegernsee',
        'Museum Bad Tölz',
    ];
    static poiDescriptions = [
        //'BMW World'
        'Nowhere else can the brand be felt as strongly as here. BMW Welt is located in the immediate vicinity of the main BMW factory, the company’s headquarters in the legendary BMW Tower, and the BMW Museum. BMW Welt is a place full of stories in a place full of history.',
        // 'Schlossanlage Schleißheim'
        "Schleißheim palace complex was founded by Duke Wilhelm V of Bavaria (1548-1626), who in 1597 purchased the isolated moorland farm of Schleißheim with its St Margaret's Chapel for a large sum of money from the Freising Cathedral chapter.",
        //Starnberg
        "Starnberg is a small city 25 km away from munich and the region around 'Starnberger See' is famous for the people living here: sportsmen, actress, writers, filmregiseur and what most people don´t know: Luitpold Prinz von Bayern , the great-grandson of the last king of bavaria (Ludwig III.), also is from Starnberg",
        //Kloster Andechs
        "Seen from miles around atop Holy Mountain above the eastern bank of Ammer Lake, Andechs Monastery is the oldest pilgrimage church in Bavaria and since 1850, an asset of the Benedictine monastery, St. Boniface, in Munich.",
        //KZ Dachau
        "On March 22, 1933, a few weeks after Adolf Hitler had been appointed Reich Chancellor, a concentration camp for political prisoners was set up in Dachau. This camp served as a model for all later concentration camps and as a 'school of violence' for the SS men under whose command it stood. In the twelve years of its existence over 200.000 persons from all over Europe were imprisoned here and in the numerous subsidary camps. 41.500 were murdered. On April 29 1945, American troops liberated the survivors.",
        //Poschinger Weiher
        "Poschinger Weiher is a lake, where you can also swim. Near the lake therer are two small hills, which are build of Schutt frojm the second wolrd war. On top of one of them you can have a view of munich.",
        //Bräustüberl Tegernsee
        "Herzogliches Bräustüberl Tegernsee ('Ducal Brewery of Tegernsee') is a brewery in Tegernsee, Bavaria, Germany.,The brewery traces its roots back to a brewery that was allegedly founded in the year 1050 on the Tegernsee, in connection with Tegernsee Abbey, a Benedictine abbey that was founded in 746. The current brewery can trace its history back to 1675, when abbot Bernd Wenzel relocated the monastery's brewing right from Holzkirchen to Tegernsee. The brewery has operated under a number of different names, including Tegernseer Klosterbrauerei ('Tegernsee Monastic Brewery'). After the brewery was secularized at the beginning of the 19th century, the brewery was purchased by Maximilian I Joseph of Bavaria from Karl Joseph von Drechsel and incorporated under the name Königlich braunes Brauhaus Tegernsee ('Royal Brown Brewhouse of Tegernsee'). The brewery later changed its name to Herzoglich bayerisches Brauhaus ('Ducal Bavarian Brewhouse'). Since then, the brewery has been in the ownership of the House of Wittelsbach. The brewery is currently run by Duchess Maria Anna in Bayern, daughter of Prince Max, Duke in Bavaria.", 
        // Museum Bad Tölz
        "The Stadtmuseum Bad Tölz presents a cross-section of the history of the Tölzer Land on three exhibition levels, with a history of more than 100 years.",
    ];
    static poiBriefly = [
        // BMW
        "BMW World is provided by famous German car manufacturer",
        // 'Schlossanlage Schleißheim'
        "Schleißheim palace complex founded by Duke Wilhelm V",
        //Starnberg
        "Starnberg is a small city 25 km away from munich",
        //Kloster Andechs
        "Seen from miles around atop Holy Mountain ",
        //KZ Dachau
        "concentration camp Dachau in second World War",
        //Poschinger Weiher
        "Lake surrounded by small schutt hills. Nice view of munich.",
        //Bräustüberl Tegernsee
        "'Ducal Brewery of Tegernsee' is a brewery in Tegernsee",
        // Museum Bad Tölz
        "museum with three exhibition levels.",
    ];
    static poiLocations = [
        "48.177016,11.5565994",
        "48.2477609,11.5662204",
        "48.0061613,11.2583466",
        "47.97448,11.1806231",
        "48.2701275,11.4660784",
        "48.200995,11.6411327",
        "47.7076548,11.7539559",
        "47.7606962,11.5580924"
    ];

}



export default class Database{

    currentRoute = null;
    currentPoiIndex = null;
    // set xurrent route name
    setCurrentRouteName(routeName){
        currentRoute = routeName;
        currentPoiIndex = null;
    }
    getCurrentRouteName(){
        return currentRoute;
    }

    setCurrentPoiIndex(poiIndex){
        if(this.currentRoute == null){
            throw new Error("set current route before poi index");
        }
        currentPoiIndex = poiIndex;
    }
    getCurrentRouteIndex(){
        return currentPoiIndex;
    }
    
    static pois = null;


    static myInstance = null;

    static getInstance() {
        if (Database.myInstance == null) {
            Database.myInstance = new Database();
            pois = new Pois();
        }

        return this.myInstance;
    }

    // routeName,PoiName,poiLocation,poiBriefDescription,poiDescription,poiImageUrl
     getRoutes(){
         routes = [];
        entryId = 0;
         for(rd in routeDefs){
            for(routePoint in rd){
                poiIndex = rd[1];
                rotes[entryId++]={
                    KEY_ROUTE_NAME              : routeNames[rd[0]],
                    KEY_POI_NAME                : poiNames[poiIndex],
                    KEY_POI_LOCATION            : poiLocations[poiIndex],
                    KEY_POI_DESCRIPTION         : poiDescriptions[poiIndex],
                    KEY_POI_BRIEF_DESCRIPTION   : poiBriefly[poiIndex],
                    KEY_POI_IMAGE_URL           : poiImageUrls[poiIndex]
                };
            }
         }
         return routes;
     }
     // List [] of pois {} with given routeName
     getRoute(routeName){
         getRoutes().filter(t=>t[KEY_ROUTE_NAME]===routeName);
     }

}
    

