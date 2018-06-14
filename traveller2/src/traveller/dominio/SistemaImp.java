package traveller.dominio;

import traveller.excepciones.usuario.UsuarioException;
import traveller.excepciones.usuario.IdentificacionInvalidaException;
import traveller.excepciones.usuario.UsuarioExistenteException;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Iterator;
import traveller.noticiaciones.email.EnvioMail;
import traveller.notificaciones.movil.EnvioMensajeTexto;

public class SistemaImp implements ISistema, Serializable {

    private ArrayList<Usuario> listaUsuarios;
    private ArrayList<Ciudad> listaCiudades;
    private ArrayList<TipoEvento> listaTipoEventos;
    private Usuario usuarioIdentificado; //Guarda el usuario actualmente identifiacdo en el sistema.
    private boolean modoDesarrollador;

    public ArrayList<Ciudad> getListaCiudades() {
        return listaCiudades;
    }
    
    public ArrayList<String> getNombresCiudades() {
        ArrayList<String> nombresCiudades = new ArrayList<String>();
        for (int i = 0; i < this.getListaCiudades().size(); i++){
            Ciudad unaC = this.getListaCiudades().get(i);
            nombresCiudades.add(unaC.getNombre());
        }
        return nombresCiudades;
    }

    public ArrayList<TipoEvento> getListaTipoEventos() {
        return listaTipoEventos;
    }

    public void setListaTipoEventos(ArrayList<TipoEvento> listaTipoEventos) {
        this.listaTipoEventos = listaTipoEventos;
    }

    public void setListaCiudades(ArrayList<Ciudad> listaCiudades) {
        this.listaCiudades = listaCiudades;
    }
    private boolean mostrarCartelInicio;
    private String proxy;
    private int puerto;

    public SistemaImp() {
	this.listaUsuarios = new ArrayList<Usuario>();
        this.listaTipoEventos = new ArrayList<TipoEvento>();
        listaTipoEventos.add(new TipoEvento("CULTURAL"));
        listaTipoEventos.add(new TipoEvento("DEPORTIVO"));
        listaTipoEventos.add(new TipoEvento("COMERCIAL"));
        listaTipoEventos.add(new TipoEvento("FAMILIAR"));
        listaTipoEventos.add(new TipoEvento("OTRO"));
        this.listaCiudades = new ArrayList<Ciudad>();
        listaCiudades.add(new Ciudad("MADRID"));
        listaCiudades.add(new Ciudad("PARIS"));
        listaCiudades.add(new Ciudad("BSAS"));
        listaCiudades.add(new Ciudad("MIAMI"));
	this.usuarioIdentificado = null;
	this.modoDesarrollador = false;
	this.mostrarCartelInicio = true;
        this.proxy = "";
        this.puerto = 0;
    }

    @Override
    public void altaUsuario(String nombreUsuario, String clave, Email email, String nombre, String apellido) throws UsuarioException {
	/* ¿Ya existe nombre usuario? */
	if (existeNombreUsuario(nombreUsuario)) {
	    throw new UsuarioExistenteException(nombreUsuario);
	}

	Usuario nuevoUsuario = new Usuario(nombreUsuario, clave, nombre, apellido, email);
	this.listaUsuarios.add(nuevoUsuario);
    }

    @Override
    public void identificacionUsuario(String nombreUsuario, String clave) throws UsuarioException {
	boolean entro = false;
	Iterator<Usuario> it = this.listaUsuarios.iterator();

	while (it.hasNext()) {
	    Usuario usuario = it.next();
	    if (usuario.getNombreUsuario().equals(nombreUsuario)) {
		if (usuario.igualContraseña(clave)) {
		    this.usuarioIdentificado = usuario;
		    entro = true;
		} else {
		    throw new IdentificacionInvalidaException();
		}
	    }
	}

	if (!entro) {
	    throw new IdentificacionInvalidaException();
	}
    }

    @Override
    public void logoutUsuario() {
	this.usuarioIdentificado = null;
    }

    @Override
    public boolean hayUsuarioIdentificado() {
	return this.usuarioIdentificado != null;
    }

    @Override
    public void bajaUsuario() {
	if (this.hayUsuarioIdentificado()) {
	    this.listaUsuarios.remove(this.usuarioIdentificado);
	    this.logoutUsuario();
	}
    }

    public String getProxy() {
        return proxy;
    }

    public void setProxy(String proxy) {
        this.proxy = proxy;
    }

    public int getPuerto() {
        return puerto;
    }

    public void setPuerto(int puerto) {
        this.puerto = puerto;
    }
    
    @Override
    public ArrayList<Usuario> getListaUsuarios() {
	return this.listaUsuarios;
    }
    
    
    @Override
    public boolean existeUsuario(String nombreUsuario) {
	return this.listaUsuarios.contains(new Usuario(nombreUsuario));
    }

    @Override
    public Usuario getUsuarioIdentificado() {
	return this.usuarioIdentificado;
    }

    @Override
    public ArrayList<Usuario> listadoBuscarUsuarios(String cadena) {
	ArrayList<Usuario> retorno = new ArrayList<Usuario>();
	Usuario identificado = this.getUsuarioIdentificado();
	Iterator<Usuario> it = this.listaUsuarios.iterator();
	while (it.hasNext()) {
	    Usuario usuario = it.next();
	    if (!usuario.equals(identificado) && !identificado.getListaAmigos().contains(usuario)) {
		if ((usuario.getNombre() +" "+ usuario.getApellido()).toLowerCase().startsWith(cadena.toLowerCase())) {
		    retorno.add(usuario);
		}
	    }
	}
	return retorno;
    }

    @Override
    public ArrayList<Usuario> obtenerGrupoDeViaje(Viaje viaje) {
	ArrayList<Usuario> retorno = new ArrayList<Usuario>();
	retorno.add(this.getUsuarioIdentificado());

	Iterator<Usuario> it = this.getListaUsuarios().iterator();
	while (it.hasNext()) {
	    Usuario usuarioAux = it.next();
	    if (!usuarioAux.equals(this.getUsuarioIdentificado())) {
		if (usuarioAux.getListaViajes().contains(viaje)) {
		    retorno.add(usuarioAux);
		}
	    }
	}
	return retorno;
    }

    @Override
    public void setModoDesarrollador(boolean modoDesarrollador) {
	this.modoDesarrollador = modoDesarrollador;
    }

    @Override
    public boolean esModoDesarrollador() {
	return this.modoDesarrollador;
    }

    public boolean isMostrarCartelInicio() {
	return mostrarCartelInicio;
    }

    public void setMostrarCartelInicio(boolean mostrarCartelInicio) {
	this.mostrarCartelInicio = mostrarCartelInicio;
    }
    
    @Override
    public void identificar(Usuario usuario) {
	this.usuarioIdentificado = usuario;
    }

    @Override
    public void notificarNovedad(String novedad, String novedadEmail, String titulo, Viaje viaje) {
	Iterator<Usuario> iterador = this.getListaUsuarios().iterator();
	while (iterador.hasNext()) {
	    Usuario usuario = iterador.next();
	    if (usuario.existeNombreViaje(viaje.getNombre()) && usuario.isNotificarCelular()) {
		EnvioMensajeTexto envio = new EnvioMensajeTexto(this.proxy, this.puerto);
		envio.mandarMensaje(novedad, usuario.getCelular());
	    }
            if (usuario.existeNombreViaje(viaje.getNombre()) && usuario.isNotificarEmail()) {
		EnvioMail.mandarEmail(usuario.getEmail().toString(), titulo, novedadEmail);
	    }
	}
    }
    
    public void modificarCiudad(String nuevoNombre, int posicion){
        Ciudad unaCiudad = new Ciudad(nuevoNombre);
        if (!this.existeCiudad(unaCiudad)){
            this.getListaCiudades().get(posicion).setNombre(nuevoNombre);
            System.out.println("Registra Exitoso.");
        }
    }
    
    /*public void borrarCiudad(Ciudad unaCiudad){
        
    }*/

    /* MÉTODOS PRIVADOS */
    private boolean existeNombreUsuario(String nombreUsuario) {
	return this.listaUsuarios.contains(new Usuario(nombreUsuario));
    }

    public void altaCiudad(Ciudad unaCiudad) {
        if(!this.existeCiudad(unaCiudad)){
            this.getListaCiudades().add(unaCiudad);
            System.out.println("Registro exitoso.");
        }
        else{
            System.out.println("No se registró.");
        }
    }

    public void bajaCiudad(Ciudad unaCiudad) {
        this.getListaCiudades().remove(unaCiudad);
    }
    
    public boolean existeCiudad(Ciudad unaCiudad) {
        return this.getListaCiudades().contains(unaCiudad);
    }
    
    public Ciudad obtenerCiudad(int posicionArray){
        return this.getListaCiudades().get(posicionArray);
    }
    
    public TipoEvento obtenerTipoEvento(int posicionArray){
        return this.getListaTipoEventos().get(posicionArray);
    }
    
    public void modificarTipoEvento(String unNombreTipoEvento, int posicion){
        this.getListaTipoEventos().get(posicion).setNombre(unNombreTipoEvento);
    }

    public void altaTipoEvento(TipoEvento unTipo) {
        if(!this.existeTipoEvento(unTipo)){
            this.getListaTipoEventos().add(unTipo);
        }
    }

    public void bajaTipoEvento(TipoEvento unTipo) {
        this.getListaTipoEventos().remove(unTipo);
    }
    
    public boolean existeTipoEvento(TipoEvento unTipo){
        return !this.getListaTipoEventos().contains(unTipo);
    }
}
