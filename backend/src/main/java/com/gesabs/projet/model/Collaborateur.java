package com.gesabs.projet.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;
import lombok.Getter;

import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;


import javax.persistence.*;


@Entity
@Data
@Getter
@Setter
@JsonIdentityInfo(generator= ObjectIdGenerators.IntSequenceGenerator.class)
 public class Collaborateur {

    @Id
    @Column(length = 64)
    private String matr;
    @Column(nullable = false)
    private String nom;
    @Column(nullable = false)
    private String prenom;

	@OneToMany(mappedBy = "collaborateur",cascade=CascadeType.ALL)
	private List<Absence> absences;


    public Collaborateur(String matr, String nom, String prenom) {
        this.matr = matr;
        this.nom = nom;
        this.prenom = prenom;
    }
    public Collaborateur() {
    }

}
