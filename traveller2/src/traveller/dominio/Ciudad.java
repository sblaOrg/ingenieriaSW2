package traveller.dominio;

import java.io.Serializable;

public class Ciudad implements Serializable{

    private String nombre;

    public Ciudad() {
        this.nombre = "Sin datos";
    }

    public Ciudad(String unNombre) {
        this.nombre = unNombre;
    }
    
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public boolean equals(Object obj) {
        return this.getNombre().equals(((Ciudad) obj).getNombre());
    }

    @Override
    public String toString() {
        return this.nombre;
    }
}
