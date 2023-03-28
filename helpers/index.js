export const formatearDinero = cantidad =>{
    return cantidad.toLocaleString("es-AR", {
        style: "currency",
        currency: "ARS"
    })
}

export const formatearFecha = (fecha) => {
    const int = parseInt(fecha)
    const fechaDB = new Date(int);
    const horas = fechaDB.getHours();
    const minutos = fechaDB.getMinutes();
  
    const minutosConCero = (minutos < 10) ? "0" + minutos : minutos;
  
    return horas + ":" + minutosConCero;
  }
  