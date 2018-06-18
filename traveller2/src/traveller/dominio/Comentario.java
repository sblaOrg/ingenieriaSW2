package traveller.dominio;

import traveller.excepciones.comentario.ContenidoVacioException;
import traveller.excepciones.comentario.ComentarioException;
import java.io.Serializable;

public final class Comentario implements Serializable {

    private static final long serialVersionUID = 112L;

    private String fecha;
    private String contenido;
    private String autor;

    public Comentario() throws ComentarioException {
        this.setFecha("01/01/2018");
        String sinDatos = "Sin datos";
        this.setContenido(sinDatos);
        this.setAutor(sinDatos);
    }

    public Comentario(String fecha, String contenido, String autor) throws ComentarioException {
        this.setAutor(autor);
        this.setContenido(contenido);
        this.setFecha(fecha);
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public String getContenido() {
        return contenido;
    }

    public void setContenido(String contenido) throws ComentarioException {
        if (contenido.isEmpty()) {
            throw new ContenidoVacioException();
        }
        this.contenido = contenido;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    @Override
    public boolean equals(Object obj) {
        try{
        return this.getAutor().equals(((Comentario) obj).getAutor())
                && this.getFecha().equals(((Comentario) obj).getFecha())
                && this.getContenido().equals(((Comentario) obj).getContenido());
    }
    catch(NullPointerException e){
            return false;
        }
    }
    
}
