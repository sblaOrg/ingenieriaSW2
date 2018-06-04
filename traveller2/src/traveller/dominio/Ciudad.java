package traveller.dominio;

public class Ciudad {

    private String nombre;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Ciudad() {
        this.nombre = "Sin datos";
    }

    public Ciudad(String unNombre) {
        this.nombre = unNombre;
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
