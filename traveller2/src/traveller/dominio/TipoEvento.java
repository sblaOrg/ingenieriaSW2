package traveller.dominio;

import java.util.ArrayList;

public class TipoEvento {

    private String nombre;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    public TipoEvento() {
        nombre = "Sin datos";
    }
    
    public TipoEvento(String nuevoTipo){
        nombre = nuevoTipo;
    }
    
    @Override
    public boolean equals(Object obj){
        return this.getNombre().equals(((TipoEvento) obj).getNombre());
    }
    
    @Override
    public String toString(){
        return nombre;
    }
    
}
