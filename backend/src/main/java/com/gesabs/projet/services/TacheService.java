package com.gesabs.projet.services;

import com.gesabs.projet.TacheInfo;
import com.gesabs.projet.model.Collaborateur;
import com.gesabs.projet.model.Tache;
import com.gesabs.projet.repository.CollabRepository;
import com.gesabs.projet.repository.ServiceRepository;
import com.gesabs.projet.repository.TacheRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@Service
public class TacheService {
    @Autowired
    private TacheRepository tacheRepository;
    @Autowired
    private ServiceRepository serviceRepository;
   //get all taches
    
    public List<TacheInfo> getTaches() {
        return tacheRepository.findAllTaches();
    }
    
    //get tache by id
   public Tache getTache(int id) {
	   return tacheRepository.findById(id).orElseThrow();
   }
   
   //add tache
   public Tache addTache(Tache t) {
	   return tacheRepository.save(t);
        }
   public Tache addTachetoService(Tache t,String id) {

	   int newid=Integer.parseInt(id);
	   Tache newTache=t;
	   com.gesabs.projet.model.Service S=serviceRepository.findById(newid).orElseThrow();
	   newTache.setService(S);
	   return tacheRepository.save(newTache);
        }
   
   //delete tache
   
   
   
   public String deleteTache(int id){
      tacheRepository.deleteById(id);
       return "product removed !! " + id;
   }
   
   //update tache
   
   public Tache updateTache(Tache tache,int id) {
	   Tache existingTache = tacheRepository.findById(id)
               .orElseThrow();
	   existingTache.setIntitulTache(tache.getIntitulTache());
	  

	   Tache updatedTache = tacheRepository.save(existingTache);
       return updatedTache ;
   }
}

