/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dominio;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import traveller.dominio.Ciudad;
import static org.junit.Assert.*;

/**
 *
 * @author steffano
 */
public class CiudadTest {
    private Ciudad instance;
    
    public CiudadTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
        instance = new Ciudad("Montevideo");
    }
    
    @After
    public void tearDown() {
    }

    @Test
    public void testGetNombre() {
        
        String expResult = "Montevideo";
        String result = instance.getNombre();
        assertEquals(expResult, result);
    }

    @Test
    public void testSetNombre() {
        String nombreNuevo = "Canelones";
        instance.setNombre(nombreNuevo);
        String nombreModificado = instance.getNombre();
        assertEquals(nombreNuevo, nombreModificado);
    }

    @Test
    public void testEquals() {
        Ciudad nuevaCiudad = new Ciudad("Montevideo");
        assertEquals(instance, nuevaCiudad);
    }

    @Test
    public void testToString() {
        String nombreCiudad = instance.toString();
        assertEquals(instance.getNombre(), nombreCiudad);
    }
    
    @Test
    public void testConstructorSinParametros() {
        Ciudad ciudadPorDefecto = new Ciudad();
        String nombrePorDefecto = ciudadPorDefecto.getNombre();
        instance.setNombre(nombrePorDefecto);
        assertEquals(ciudadPorDefecto, instance);
    }
}
