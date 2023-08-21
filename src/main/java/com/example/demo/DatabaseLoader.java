package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final ElementoDeporteRepository repositoryE;
    private final DeportistaRepository repositoryD;
    private final DeporteRepository repositoryDep;
    private final ParticipanteRepository repositoryP;

    @Autowired
    public DatabaseLoader(
            ElementoDeporteRepository repositoryE,
            DeportistaRepository repositoryD,
            DeporteRepository repositoryDep,
            ParticipanteRepository repositoryP) {
        this.repositoryE = repositoryE;
        this.repositoryD = repositoryD;
        this.repositoryDep = repositoryDep;
        this.repositoryP = repositoryP;
    }

    @Override
    public void run(String... strings) throws Exception {

        ElementoDeporte balon = new ElementoDeporte("Balón", "Tierra", "Utilizado en varios deportes");
        ElementoDeporte manos = new ElementoDeporte("Manos", "Agua", "Utilizado en natación");
        this.repositoryE.save(balon);
        this.repositoryE.save(manos);

        Deportista dFreddie = new Deportista("Freddie");
        Deportista dBrian = new Deportista("Brian");
        Deportista dRogerWaters = new Deportista("Roger Waters");
        this.repositoryD.save(dFreddie);
        this.repositoryD.save(dBrian);
        this.repositoryD.save(dRogerWaters);
        this.repositoryD.save(new Deportista("Roger"));

        Deporte futbol = new Deporte("Fútbol");
        Deporte natacion = new Deporte("Natación");
        this.repositoryDep.save(futbol);
        this.repositoryDep.save(natacion);

        Participante pFreddie = new Participante(futbol, dFreddie, balon);
        this.repositoryP.save(pFreddie);
        Participante pBrian = new Participante(futbol, dBrian, balon);
        this.repositoryP.save(pBrian);
        Participante pRogerWaters = new Participante(natacion, dRogerWaters, manos);
        this.repositoryP.save(pRogerWaters);
    }
}
