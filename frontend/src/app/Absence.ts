import { Collab } from "./Collabs";
import { Tache } from "./Taches";

    export class Abs {
        collab_tache_id?: number;
        date?: string
        heureDebut?: string;
        heureFin?: string;
        nom?: string;
        prenom?: string;
        motif?: string;
        intitulService?: string;
        intitulTache?: string;
        tache_id?:number;
        collab_matr?:string;
        collaborateur?:Collab;
        tache?:Tache;
    }


