package com.gesabs.projet.services;

import com.gesabs.projet.AbsenceInfo;
import com.gesabs.projet.model.Absence;
import com.gesabs.projet.model.Collaborateur;
import com.gesabs.projet.model.Tache;
import com.gesabs.projet.repository.AbsenceRepository;
import com.gesabs.projet.repository.CollabRepository;
import com.gesabs.projet.repository.ServiceRepository;
import com.gesabs.projet.repository.TacheRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
@CrossOrigin(origins = "http://localhost:4200")
@Service

public class AbsenceService {
    //--------------------------------Autowiring------------------------------------
    @Autowired
    private AbsenceRepository absenceRepository;
    @Autowired
    private TacheRepository tacheRepository;
    @Autowired
    private CollabRepository collabRepository;


    //---------------------------------Functions--------------------------------

    public List<AbsenceInfo>   getAbsences() {

        return absenceRepository.findAbsences();
    }
    public Absence addAbsence(Absence a,String idc,String idt) {
        int newid_t=Integer.parseInt(idt);
        Absence newAbs=a;
        Collaborateur c = collabRepository.findById(idc).orElseThrow();
        Tache t = tacheRepository.findById(newid_t).orElseThrow();
        a.setCollaborateur(c);
        a.setTache(t);
        return absenceRepository.save(a);
    }
    //Update
    public Absence updateAbs(Absence Abs,int collab_tache_id) {
        Absence existingAbs = absenceRepository.findById(collab_tache_id)
                .orElseThrow();
        existingAbs.setDate(Abs.getDate());
        existingAbs.setHeureDebut(Abs.getHeureDebut());
        existingAbs.setHeureFin(Abs.getHeureFin());
        existingAbs.setMotif(Abs.getMotif());

        Absence updatedAbs = absenceRepository.save(existingAbs);
        return updatedAbs ;
    }
    public String deleteAbs(int collab_tache_id) {
        absenceRepository.deleteById(collab_tache_id);
        return "Absence removed !! " + collab_tache_id;
    }

    //Get Absence by id

    public Absence getAbs(int collab_tache_id) {
        return absenceRepository.findById(collab_tache_id).orElseThrow();
    }


}


