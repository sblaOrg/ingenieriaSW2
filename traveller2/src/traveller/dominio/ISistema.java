package traveller.dominio;

import traveller.excepciones.fecha.FechaException;
import traveller.excepciones.usuario.UsuarioException;
import traveller.excepciones.viaje.ViajeException;
import java.util.ArrayList;
import java.util.Iterator;

/**
 * La clase Sistema se encarga de guardar las instancias de clases del sistema.
 *
 */
public interface ISistema {

    public void altaUsuario(String nombreUsuario, String clave, Email email, String nombre, String apellido)
            throws UsuarioException;

    public void identificacionUsuario(String nombreUsuario, String clave) throws UsuarioException;

    public void logoutUsuario();

    public boolean hayUsuarioIdentificado();

    public void bajaUsuario();
    
    public void modificarCiudad(String nuevoNombre, int posicion);

    public ArrayList<Usuario> getListaUsuarios();
    
    public ArrayList<Ciudad> getListaCiudades();
    
    public ArrayList<String> getNombresCiudades();
    
    public ArrayList<TipoEvento> getListaTipoEventos();

    public boolean existeUsuario(String nombreUsuario);

    public Usuario getUsuarioIdentificado();

    public ArrayList<Usuario> listadoBuscarUsuarios(String cadena);

    public ArrayList<Usuario> obtenerGrupoDeViaje(Viaje viaje);
            
    public void setModoDesarrollador(boolean modoDesarrollador);

    public boolean esModoDesarrollador();
    
    public boolean isMostrarCartelInicio();
     
    public void setMostrarCartelInicio(boolean mostrar);
    
    public void notificarNovedad(String novedad, String novedadEmail, String titulo, Viaje viaje);
    
    public void identificar(Usuario usuario);
    
     public String getProxy();

    public void setProxy(String proxy);

    public int getPuerto();

    public void setPuerto(int puerto);
    
    public void altaCiudad(Ciudad unNombre);
    
    public void bajaCiudad(Ciudad unNombre);
    
    public boolean existeCiudad(Ciudad unaCiudad);
    
    public void altaTipoEvento(TipoEvento unTipo);
    
    public void bajaTipoEvento(TipoEvento unTipo);
    
    public boolean existeTipoEvento(TipoEvento unTipo);
    
}
