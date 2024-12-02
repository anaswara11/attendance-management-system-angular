package com.gesabs.projet.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


@Entity
@Data
@Getter
@Setter
@JsonIdentityInfo(generator= ObjectIdGenerators.IntSequenceGenerator.class)
public class Absence {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "collab_tache_id")
	private int id;

	@ManyToOne
	@JoinColumn(name = "Collab_matr")
	private Collaborateur collaborateur;

	@ManyToOne
	@JoinColumn(name = "tache_id")
	private Tache tache;

	private Date date;
	@Column(nullable = false)
	private String heureDebut;
	@Column(nullable = false)
	private String heureFin;
	@Column(nullable = false)
	private String motif;






}