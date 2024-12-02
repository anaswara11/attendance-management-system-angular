package com.gesabs.projet;

import java.sql.Date;


public interface AbsenceInfo {
    String getCollab_tache_id();
    String getNom();
    String getPrenom();
    String getIntitulTache();
    Date getDate();
    String getHeurDebut();
    String getHeurfin();
    String getMotif();
    String getIntitulService();




}