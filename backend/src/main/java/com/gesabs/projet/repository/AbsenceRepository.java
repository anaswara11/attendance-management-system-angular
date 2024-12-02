package com.gesabs.projet.repository;

import com.gesabs.projet.AbsenceInfo;
import com.gesabs.projet.model.Absence;
import com.gesabs.projet.model.Collaborateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AbsenceRepository  extends JpaRepository<Absence,Integer> {

  //  @Query(value ="SELECT c.nom,c.prenom,t.intitul_tache,a.date,a.heure_debut,a.heure_fin,a.motif  FROM Collaborateur c, Tache t ,Absence a WHERE c.matr=a.Collab_matr and t.id = a.tache_id",nativeQuery = true)
   //  List<Object> findAbsences();
  @Query(value ="SELECT a.collab_tache_id AS collab_tache_id ,c.nom AS nom,c.prenom AS " +
                "prenom,t.intitul_tache AS intitulTache ,a.date AS date,a.heure_debut AS " +
                "heurDebut,a.heure_fin AS heurfin,a.motif motif,s.intitul_service AS intitulService " +
                "FROM collaborateur c, tache t ,absence a,service s WHERE c.matr=a.Collab_matr " +
                "and t.id = a.tache_id and t.service_id =s.id;",nativeQuery = true)
   List<AbsenceInfo> findAbsences();

  // @Query(value ="SELECT a.collab_tache_id AS collab_tache_id ,c.nom AS nom,c.prenom AS prenom,t.intitul_tache AS intitulTache ,a.date AS date,a.heure_debut AS heurDebut,a.heure_fin AS heurfin,a.motif motif,s.intitul_service AS intitulService FROM Collaborateur c, Tache t ,Absence a,service s WHERE c.matr=a.Collab_matr and t.id = a.tache_id and t.service_id =s.id and a.collab_tache_id = ?1",nativeQuery = true)
   // List<AbsenceInfo> findByIdAbs(Integer collab_tache_id);




}