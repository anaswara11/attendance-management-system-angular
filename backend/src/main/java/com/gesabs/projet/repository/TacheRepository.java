package com.gesabs.projet.repository;

import com.gesabs.projet.AbsenceInfo;
import com.gesabs.projet.TacheInfo;
import com.gesabs.projet.model.Collaborateur;
import com.gesabs.projet.model.Tache;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TacheRepository  extends JpaRepository<Tache,Integer> {

    @Query(value ="SELECT t.id AS id ,t.intitul_tache AS intitule_tache,t.service_id as service_id FROM tache t;",nativeQuery = true)
    List<TacheInfo> findAllTaches();


}