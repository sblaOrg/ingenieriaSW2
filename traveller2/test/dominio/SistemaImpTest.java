package dominio;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import traveller.dominio.Email;
import traveller.dominio.Usuario;
import traveller.dominio.SistemaImp;
import traveller.dominio.ISistema;
import traveller.excepciones.usuario.IdentificacionInvalidaException;
import traveller.excepciones.usuario.UsuarioException;
import traveller.excepciones.usuario.UsuarioExistenteException;
import java.util.ArrayList;
import java.util.Date;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;
import traveller.dominio.Ciudad;
import traveller.dominio.TipoEvento;
import traveller.dominio.Viaje;
import traveller.excepciones.fecha.FechaException;
import traveller.excepciones.viaje.ViajeException;

public class SistemaImpTest {

    private ISistema instance;

    public SistemaImpTest() {
        instance = new SistemaImp();
    }

    @BeforeClass
    public static void setUpClass() {
    }

    @AfterClass
    public static void tearDownClass() {
    }

    @Before
    public void setUp() throws ViajeException, FechaException {
    }

    @After
    public void tearDown() {
    }

    /**
     * Test of altaUsuario method, of class SistemaImp.
     */
    @Test
    public void testAltaUsuarioOK1() throws Exception {
        instance.altaUsuario("Pepe", "pepe4000", new Email("pepeda@gmail.com"),
                "Jose", "Damonte");
        assertTrue(instance.existeUsuario("Pepe"));
    }

    /**
     * Test of altaUsuario method, of class SistemaImp.
     */
    @Test
    public void testAltaUsuarioOK2() throws Exception {
        instance.altaUsuario("El Juancho", "juancho123", new Email("juancho@gmail.com"),
                "Juan", "Damonte");
        assertTrue(instance.existeUsuario("El Juancho"));
    }

    /**
     * Test of altaUsuario method, of class SistemaImp.
     */
    @Test
    public void testAltaUsuarioErrorExisteUsuario() throws Exception {
        try {
            instance.altaUsuario("Pepe", "pepe4000", new Email("pepeda@gmail.com"),
                    "Jose", "Damonte");
            instance.altaUsuario("Pepe", "juan123", new Email("juancho@gmail.com"),
                    "Juan", "Damonte");
            assert (false);
        } catch (UsuarioExistenteException e) {
            assert (true);
        }
    }

    /**
     * Test of identificacionUsuario method, of class SistemaImp.
     */
    @Test
    public void testIdentificacionUsuarioOK() throws Exception {
        instance.altaUsuario("Pepe", "pepe4000", new Email("pepeda@gmail.com"),
                "Jose", "Damonte");
        instance.identificacionUsuario("Pepe", "pepe4000");
        assert (instance.getUsuarioIdentificado().toString().equals("Jose Damonte"));
    }

    /**
     * Test of identificacionUsuario method, of class SistemaImp.
     */
    @Test
    public void testIdentificacionUsuarioErrorInvalida1() throws Exception {
        try {
            instance.altaUsuario("Pepe", "pepe4000", new Email("pepeda@gmail.com"),
                    "Jose", "Damonte");
            instance.identificacionUsuario("Pepe ", "pepe4000");
            assert (false);
        } catch (IdentificacionInvalidaException e) {
            assert (true);
        }
    }

    /**
     * Test of identificacionUsuario method, of class SistemaImp.
     */
    @Test//(expected=IdentificacionInvalidaException.class)
    public void testIdentificacionUsuarioErrorInvalida2() throws Exception {
        try {
            instance.altaUsuario("Pepe", "pepe4000", new Email("pepeda@gmail.com"),
                    "Jose", "Damonte");
            instance.identificacionUsuario("Pepe", "pepe400");
            assert (false);
        } catch (IdentificacionInvalidaException e) {
            assert (true);
        }
    }

    /**
     * Test of identificacionUsuario method, of class SistemaImp.
     */
    @Test//(expected=IdentificacionInvalidaException.class)
    public void testIdentificacionUsuarioErrorInvalida3() throws Exception {
        try {
            instance.altaUsuario("Pepe", "pepe4000", new Email("pepeda@gmail.com"),
                    "Jose", "Damonte");
            instance.identificacionUsuario("", "pepe4000");
            assert (false);
        } catch (IdentificacionInvalidaException e) {
            assert (true);
        }
    }

    /**
     * Test of identificacionUsuario method, of class SistemaImp.
     */
    @Test//(expected=IdentificacionInvalidaException.class)
    public void testIdentificacionUsuarioErrorInvalida4() throws Exception {
        try {
            instance.altaUsuario("Pepe", "pepe4000", new Email("pepeda@gmail.com"),
                    "Jose", "Damonte");
            instance.identificacionUsuario("Pepe", "Pepe4000");
            assert (false);
        } catch (IdentificacionInvalidaException e) {
            assert (true);
        }
    }

    /**
     * Test of identificacionUsuario method, of class SistemaImp.
     */
    @Test//(expected=IdentificacionInvalidaException.class)
    public void testIdentificacionUsuarioErrorInvalida5() throws Exception {
        try {
            instance.altaUsuario("Pepe", "pepe4000", new Email("pepeda@gmail.com"),
                    "Jose", "Damonte");
            instance.identificacionUsuario("pepe", "pepe4000");
            assert(false);
        } catch (IdentificacionInvalidaException e) {
            assert(true);
        }
    }

    /**
     * Test of logoutUsuario method, of class SistemaImp.
     */
    @Test
    public void testLogoutUsuario() throws UsuarioException {
        instance.altaUsuario("Pepe", "pepe4000", new Email("pepeda@gmail.com"),
                "Jose", "Damonte");
        instance.identificacionUsuario("Pepe", "pepe4000");
        instance.logoutUsuario();
        assert (!instance.hayUsuarioIdentificado());
    }

    /**
     * Test of hayUsuarioIdentificado method, of class SistemaImp.
     */
    @Test
    public void testHayUsuarioIdentificadoTrue() throws UsuarioException {
        instance.altaUsuario("Pepe", "pepe4000", new Email("pepeda@gmail.com"),
                "Jose", "Damonte");
        instance.identificacionUsuario("Pepe", "pepe4000");
        assert (instance.hayUsuarioIdentificado());
    }

    /**
     * Test of hayUsuarioIdentificado method, of class SistemaImp.
     */
    @Test
    public void testHayUsuarioIdentificadoFalse() throws UsuarioException {
        instance.altaUsuario("Pepe", "pepe4000", new Email("pepeda@gmail.com"),
                "Jose", "Damonte");
        assert (!instance.hayUsuarioIdentificado());
    }

    /**
     * Test of bajaUsuario method, of class SistemaImp.
     */
    @Test//(expected=UsuarioExistenteException.class)
    public void testBajaUsuario() throws UsuarioException  {
        try{
        instance.altaUsuario("Pepe", "pepe4000", new Email("pepeda@gmail.com"),
                "Jose", "Damonte");
        instance.identificacionUsuario("Pepe", "pepe4000");
        instance.bajaUsuario();
        }
        catch(UsuarioException e){
        }
        
        assertTrue (instance.getListaUsuarios().isEmpty());
    }

    /**
     * Test of existeUsuario method, of class SistemaImp.
     */
    @Test
    public void testExisteUsuarioTrue() throws UsuarioException {
        instance.altaUsuario("Pepe", "pepe4000", new Email("pepeda@gmail.com"),
                "Jose", "Damonte");
        boolean expResult = true;
        boolean result = instance.existeUsuario("Pepe");
        assertEquals(expResult, result);
    }

    /**
     * Test of existeUsuario method, of class SistemaImp.
     */
    @Test
    public void testExisteUsuarioFalse() throws UsuarioException {
        instance.altaUsuario("Pedro", "Pepe4001", new Email("pedro12@gmail.com"),
                "Pedro", "Rodriguez");
        boolean expResult = false;
        boolean result = instance.existeUsuario("pepe");
        assertEquals(expResult, result);
    }

    /**
     * Test of getUsuarioIdentificado method, of class SistemaImp.
     */
    @Test
    public void testGetUsuarioIdentificado() throws UsuarioException {
        instance.altaUsuario("Pepe", "pepe4000", new Email("pepeda@gmail.com"),
                "Jose", "Damonte");
        instance.identificacionUsuario("Pepe", "pepe4000");
        Usuario expResult = new Usuario("Pepe");
        Usuario result = instance.getUsuarioIdentificado();
        assertEquals(expResult, result);
    }

    /**
     * Test of listadoBuscarUsuarios method, of class SistemaImp.
     */
    @Test
    public void testListadoBuscarUsuarios() throws UsuarioException {
        Usuario u2 = new Usuario("Usuario1", "qwerty123", "Juan", "Perez", new Email("j@gmail.com"));
        Usuario u3 = new Usuario("Usuario2", "qwerty123", "Juancho", "Perez", new Email("j@gmail.com"));

        ArrayList<Usuario> expResult = new ArrayList<Usuario>();
        expResult.add(u2);
        expResult.add(u3);
        instance.altaUsuario("Usuario1", "qwerty123", new Email("j@gmail.com"),
                "Juan", "Perez");
        instance.altaUsuario("Usuario2", "qwerty123", new Email("j@gmail.com"),
                "Juancho", "Perez");
        instance.altaUsuario("Usuario", "qwerty123", new Email("peda@gmail.com"),
                "Jorge", "Damonte");
        instance.identificacionUsuario("Usuario", "qwerty123");
        ArrayList result = instance.listadoBuscarUsuarios("juan");
        assertEquals(expResult, result);
    }

    /**
     * Test of setModoDesarrollador method, of class SistemaImp.
     */
    @Test
    public void testSetModoDesarrolladorTrue() {
        instance.setModoDesarrollador(true);
        assertTrue(instance.esModoDesarrollador());
    }

    /**
     * Test of setModoDesarrollador method, of class SistemaImp.
     */
    @Test
    public void testSetModoDesarrolladorFalse() {
        instance.setModoDesarrollador(false);
        assertFalse(instance.esModoDesarrollador());
    }
    
    @Test
    public void testGetNombresCiudades(){
        ArrayList<String> resultadoEsperado = new ArrayList<String>();
        resultadoEsperado = instance.getNombresCiudades();
        assertEquals(instance.getNombresCiudades(), resultadoEsperado);
    }
    
    @Test
    public void testGetNombresTiposEventos(){
        ArrayList<String> resultadoEsperado = new ArrayList<String>();
        resultadoEsperado = instance.getNombresTiposEventos();
        assertEquals(instance.getNombresTiposEventos(), resultadoEsperado);
    }
    
    @Test
    public void testModificarCiudad(){
        instance.altaCiudad(new Ciudad("Canelondres"));
        instance.modificarCiudad("Canelones", 4);
        int pos = instance.getListaCiudades().size() - 1;
        assertEquals(instance.obtenerCiudad(pos).getNombre(), "Canelones");
    }
    
    @Test
    public void testModificarTipoEvento(){
        instance.altaTipoEvento(new TipoEvento("Educaciones"));
        int pos = instance.getListaTipoEventos().size() - 1;
        instance.modificarTipoEvento("Educacion", pos);
        assertEquals(instance.obtenerTipoEvento(pos).getNombre(), "Educacion");
    }
    
    @Test
    public void testBajaCiudad(){
        instance.altaCiudad(new Ciudad("Orlando"));
        instance.bajaCiudad(new Ciudad("Orlando"));
        assertFalse(instance.existeCiudad(new Ciudad("Orlando")));
    }
    
    @Test
    public void testBajaTipoEvento(){
        instance.altaTipoEvento(new TipoEvento("Humano"));
        instance.bajaTipoEvento(new TipoEvento("Humano"));
        assertFalse(instance.existeTipoEvento(new TipoEvento("Humano")));
    }
    
    @Test
    public void testSetSetPuerto(){
        instance.setPuerto(101);
        int puertoSeteado = 101;
        assertEquals(instance.getPuerto(), 101);
    }
    
    @Test
    public void testSetSetProxy(){
        String proxySeteado = "Sin Proxy";
        instance.setProxy(proxySeteado);
        assertEquals(instance.getProxy(), proxySeteado);
    }
    
    @Test
    public void testSetMostrarCartelInicio(){
        instance.setMostrarCartelInicio(true);
        assertTrue(instance.isMostrarCartelInicio());
    }
    
    @Test
    public void testIdentificarUsuario() throws UsuarioException{
        instance.altaUsuario("Usuario1", "qwerty123", new Email("j@gmail.com"),
                "Juan", "Perez");
        instance.identificacionUsuario("Usuario1", "qwerty123");
        assertTrue(instance.isMostrarCartelInicio());
    }
    
    @Test
    public void testIdentificarUsuarioMetodo() throws UsuarioException{
        instance.altaUsuario("Usuario1", "qwerty123", new Email("j@gmail.com"),
                "Juan", "Perez");
        instance.identificar(new Usuario("Usuario1"));
        assertEquals(instance.getUsuarioIdentificado(), new Usuario("Usuario1"));
    }
    
}
