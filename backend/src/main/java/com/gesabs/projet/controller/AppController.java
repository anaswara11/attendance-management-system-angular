package com.gesabs.projet.controller;

import com.gesabs.projet.AbsenceInfo;
import com.gesabs.projet.CollabInfo;
import com.gesabs.projet.TacheInfo;
import com.gesabs.projet.model.Absence;
import com.gesabs.projet.services.AbsenceService;
import org.springframework.web.bind.annotation.*;
import com.gesabs.projet.model.Collaborateur;
import com.gesabs.projet.model.Service;
import com.gesabs.projet.model.Tache;
import com.gesabs.projet.services.CollabService;
import com.gesabs.projet.services.ServiceService;
import com.gesabs.projet.services.TacheService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class AppController {
	//------------------------------------Autowiring-----------------------------------
	
    @Autowired
    private CollabService collabService;

    @Autowired
    private ServiceService serviceService;

    @Autowired
    private TacheService tacheService;

    @Autowired
    private AbsenceService absenceService;

    
    //------------------------------------Collabs------------------------------------
    
    //get all collabs
    @GetMapping("/collabs")
    public List<CollabInfo> finAllCollabs() {
        return collabService.getCollabs();
    }
    
    //Add Collab
    @PostMapping("/collabs")
    public Collaborateur addCollab(@RequestBody Collaborateur collaborateur) {
        return collabService.addCollab(collaborateur);
    }
    
    //Get Collab by id
    @GetMapping("/collabs/{matr}")
    public Collaborateur getCollab(@PathVariable String matr) {
        return collabService.getCollab(matr);
    }

    //Update Collab
    @PutMapping("/collabs/{matr}")
    public Collaborateur updateCollab(@PathVariable String matr,@RequestBody Collaborateur collab) {
        return collabService.updateCollab(collab,matr);
    }

    //Delete Collab
    @DeleteMapping("/collabs/{matr}")
    public ResponseEntity<Map<String, Boolean>> deleteCollab(@PathVariable String matr){
         collabService.deleteCollab(matr);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
    
   //----------------------------------------------  Services--------------------------------------

   
   //get all services
    @GetMapping("/services")
    public List<Service> finAllServices() {
        return serviceService.getServices();
    }
    //Add Service
    @PostMapping("/services")
    public Service addService(@RequestBody Service service) {
        return serviceService.addService(service);
    }
    //get service by id
    @GetMapping("/services/{id}")
    public com.gesabs.projet.model.Service getService(@PathVariable String id) {
    	int i=Integer.parseInt(id);
        return serviceService.getService(i);
    }
    
    
    //update service
    
   
    @PutMapping("/services/{id}")
    public Service updateService(@PathVariable String id,@RequestBody Service service) {
    	int i=Integer.parseInt(id);
        return serviceService.updateService(service,i);
    }
    
    //Delete Service
    @DeleteMapping("/services/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteService(@PathVariable String id){
    	int i=Integer.parseInt(id);
         serviceService.deleteService(i);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
    

//    @PostMapping("/collabs")
//    public List<Collaborateur> addCollabs() {
//        return collabService.addCollabs();
//    }


    //-----------------------------------------Tache-----------------------------------


    
    //get all taches
    @GetMapping("/taches")
    public List<TacheInfo> finAllTaches() {
        return tacheService.getTaches();
    }
    //get tache by id
    
    @GetMapping("/taches/{id}")
    public Tache getTache(@PathVariable String id) {
    	int i=Integer.parseInt(id);
        return tacheService.getTache(i);
    }
    //add tache
    @PostMapping("/taches")
    public Tache addTache(@RequestBody Tache tache) {
        return tacheService.addTache(tache);
    }
    
    //Update tache
    @PutMapping("/taches/{id}")
    public Tache updateTache(@PathVariable String id,@RequestBody Tache tache) {
    	int i=Integer.parseInt(id);
        return tacheService.updateTache(tache,i);
    }
    //ad tache to service
    @PostMapping("/taches/{id}")
    public Tache addTachetoService(@RequestBody Tache tache,@PathVariable String id) {
    	
        return tacheService.addTachetoService(tache,id);
    }
    
    //delete tache
    @DeleteMapping("/taches/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteTache(@PathVariable String id){
    	int i =Integer.parseInt(id);
         tacheService.deleteTache(i);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


    //-----------------------------------------Absence-----------------------------------

    //get all Absences
    @GetMapping("/abs")
    public List<AbsenceInfo> finAllAbsences() {
        return absenceService.getAbsences();
    }
    //Add Absence
    //ad collab and tache to abs
    @PostMapping("/abs/{idc}/{idt}")
    public Absence addAbs(@RequestBody Absence Absence,@PathVariable String idc,@PathVariable String idt) {

        return  absenceService.addAbsence(Absence,idc,idt);
    }

    //Update Absence
    @PutMapping("/abs/{collab_tache_id}")
    public Absence updateAbs(@PathVariable int collab_tache_id,@RequestBody Absence Absence) {
        return absenceService.updateAbs(Absence,collab_tache_id);
    }
    //Delete Absence
    @DeleteMapping("/abs/{collab_tache_id}")
    public ResponseEntity<Map<String, Boolean>> deleteAbs(@PathVariable int collab_tache_id){
        absenceService.deleteAbs(collab_tache_id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
    //Get Absence by id for details
    @GetMapping("/abs/{collab_tache_id}")
    public Absence getAbs(@PathVariable int collab_tache_id) {
        return absenceService.getAbs(collab_tache_id);
    }






}
