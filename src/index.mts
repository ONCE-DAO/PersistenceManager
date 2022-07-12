import { OnceMode } from "ior:esm:/tla.EAM.Once[dev]";
import { BasePersistanceManager } from "./1_infrastructure/BasePersistanceManager.class.mjs";
import FilePersistanceManagerInterface from "./2_systems/FilePersistanceManager.class.mjs";
import { DefaultPersistanceManagerHandler } from "./2_systems/PersistanceManagerHandler.class.mjs";
import PersistanceManager, { PersistanceManagerID, PersistanceManagerStatic, UDEObject } from "./3_services/PersistanceManager.interface.mjs";
import { PersistanceManagerHandler } from "./3_services/PersistanceManagerHandler.interface.mjs";

let FilePersistanceManager: typeof FilePersistanceManagerInterface | undefined;

if (typeof ONCE !== "undefined" && ONCE.mode !== OnceMode.BROWSER) {
    FilePersistanceManager = (await import("./2_systems/FilePersistanceManager.class.mjs")).default;
}


export default PersistanceManager
export {
    PersistanceManagerHandler, UDEObject, PersistanceManagerStatic, PersistanceManagerID,
    FilePersistanceManager, BasePersistanceManager, DefaultPersistanceManagerHandler
}

