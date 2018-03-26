const NAVMENU = [{name:'Home',link:'profile'},{name:'Heroes',link:'Heroes'},{name:'Villains',link:'Villains'}];
const PORT = 3001;
const MONGO_URL = "mongodb://localhost:27017/zoom";
const MAIN_DB = "zoom";
const HERO_COLLECTION = "Heroes";
const VILLAIN_COLLECTION = "Villains";
module.exports = {
    NAVMENU:NAVMENU,
    PORT:PORT,
    MONGO_URL:MONGO_URL,
    MAIN_DB:MAIN_DB,
    HERO_COLLECTION:HERO_COLLECTION,
    VILLAIN_COLLECTION:VILLAIN_COLLECTION
};

