package traveller.dominio;

import java.io.Serializable;
import java.util.ArrayList;

public class TipoEvento implements Serializable{

    private static final long serialVersionUID = 117L;
    
    private String nombre;
    
public TipoEvento(String nuevoTipo){
        nombre = nuevoTipo;
    }
    
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    public TipoEvento() {
        nombre = "Sin datos";
    }
    
    @Override
    public boolean equals(Object obj){
        try{
        return this.getNombre().equals(((TipoEvento) obj).getNombre());
        }
        catch(NullPointerException e){
            return false;
        }
    }
    
    @Override
    public String toString(){
        return nombre;
    }
    
}
