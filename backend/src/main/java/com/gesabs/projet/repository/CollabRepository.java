package com.gesabs.projet.repository;

import com.gesabs.projet.CollabInfo;
import com.gesabs.projet.TacheInfo;
import com.gesabs.projet.model.Collaborateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CollabRepository  extends JpaRepository<Collaborateur,String> {

//	@Query("SELECT u FROM collaborateur")
//	Collection<User> findAllActiveUsers();
@Query(value ="SELECT c.matr AS matr ,c.nom AS nom,c.prenom as prenom FROM collaborateur c;",nativeQuery = true)
List<CollabInfo> findAllCollabs();



}