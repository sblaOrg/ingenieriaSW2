package traveller.dominio;

import java.io.Serializable;

public class ReporteLog implements Serializable{
    
    private static final long serialVersionUID = 115L;
    
    private String accion;
    private String fecha;

    public ReporteLog(String accion, String fecha) {
        this.accion = accion;
        this.fecha = fecha;
    }

    public ReporteLog(){
        this.accion = "Sin datos";
        this.fecha = "01/01/2018";
    }
    
    public String getAccion() {
        return accion;
    }

    public void setAccion(String accion) {
        this.accion = accion;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }
    
    @Override
    public String toString(){
        return this.fecha + " - " + this.accion;
    }
}
