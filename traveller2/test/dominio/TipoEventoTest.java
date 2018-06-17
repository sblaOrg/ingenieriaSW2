package dominio;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;
import traveller.dominio.TipoEvento;

/**
 *
 * @author steffano
 */
public class TipoEventoTest {
    TipoEvento instance;
    
    public TipoEventoTest() {
        instance = new TipoEvento();
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
        instance = new TipoEvento("Religioso");
    }
    
    @After
    public void tearDown() {
    }

    @Test
    public void testGetNombre() {
        String nombreTipoEvento = instance.getNombre();
        assertEquals(nombreTipoEvento, "Religioso");
    }

    @Test
    public void testSetNombre() {
        instance.setNombre("Futbol");
        assertEquals(instance.getNombre(), "Futbol");
    }

    @Test
    public void testEquals() {
        TipoEvento nuevoTipoEvento = new TipoEvento("Religioso");
        assertEquals(nuevoTipoEvento, instance);
    }

    @Test
    public void testToString() {
        String nombreTipoEvento = instance.getNombre();
        assertEquals(nombreTipoEvento, instance.toString());
    }
    
}
