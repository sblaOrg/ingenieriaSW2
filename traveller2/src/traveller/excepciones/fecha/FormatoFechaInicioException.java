package traveller.excepciones.fecha;

public class FormatoFechaInicioException extends FechaException{

    public FormatoFechaInicioException() {
    }

    @Override
    public String toString() {
	return "El formato de la fecha de inicio no es válido.";
    }
}
