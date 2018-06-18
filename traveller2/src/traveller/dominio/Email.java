package traveller.dominio;

import java.io.Serializable;

public class Email implements Serializable{
    
    private static final long serialVersionUID = 113L;
    
    private String direccion;
    
    public Email(){
        this.setDireccion("Vacio");
    }
    
    public Email(String email){
	this.direccion = email;
    }

    public String getDireccion() {
	return direccion;
    }

    public void setDireccion(String direccion) {
	this.direccion = direccion;
    }

    @Override
    public boolean equals(Object obj) {
        try{
        return this.getDireccion().equals(((Email)obj).getDireccion());
        }
        catch(NullPointerException e){
            return false;
        }
    }

    @Override
    public String toString() {
	return direccion;
    }
    
}
