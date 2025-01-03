import { QueryResult } from "mysql2";
import poll from "../db/connection";
import { Request, Response } from "express";

const getHeaders = (rows: QueryResult) =>{
  let headers: any[] = [];
try {
  if ('length' in rows && rows.length > 0) {
    headers = Object.keys(rows[0]); // Solo si hay filas
    return headers;
  } else {
    return headers;
  }
} catch (err) {
  console.log(`Error al obtener los encabezados de las tablas` , err)
}
}

export const querys = async (req: Request, res: Response) => {
  try {
    
    const { tablas } = req.body;
    console.log(`El valor del table es:`, tablas);
    let rows:QueryResult;
    let tableHeaders;
    switch (tablas) {
      case 1:
         [rows] = await poll.query("SELECT * FROM actividad");
         tableHeaders =  getHeaders(rows);
        res.status(200).json({
            data: rows,
            headers: tableHeaders
        })
        break;
      case 2:
         [rows] = await poll.query("SELECT * FROM view_ActividadDetalle"); //view_ActividadDetalle
         tableHeaders =  getHeaders(rows);
         res.status(200).json({
             data: rows,
             headers: tableHeaders
         })
        break;
      case 3:
        [rows] = await poll.query("SELECT * FROM evento");
        tableHeaders =  getHeaders(rows);
        res.status(200).json({
            data: rows,
            headers: tableHeaders
        })
        break;
      case 4:
        [rows] = await poll.query("SELECT * FROM evento_Actividad");//evento_Actividad
        tableHeaders =  getHeaders(rows);
        res.status(200).json({
            data: rows,
            headers: tableHeaders
        })
        break;
      case 5:
        [rows] = await poll.query("SELECT * FROM evento_FechaHora");//evento_FechaHora
        tableHeaders =  getHeaders(rows);
        res.status(200).json({
            data: rows,
            headers: tableHeaders
        })
        break;
      case 6:
        [rows] = await poll.query("SELECT * FROM evento_usuario");
        tableHeaders =  getHeaders(rows);
        res.status(200).json({
            data: rows,
            headers: tableHeaders
        })
        break;
      case 7:
        [rows] = await poll.query("SELECT * FROM fecha");
        tableHeaders =  getHeaders(rows);
        res.status(200).json({
            data: rows,
            headers: tableHeaders
        })
        break;
      case 8:
        [rows] = await poll.query("SELECT * FROM fechahora");
        tableHeaders =  getHeaders(rows);
        res.status(200).json({
            data: rows,
            headers: tableHeaders
        })
        break;
      case 9:
        [rows] = await poll.query("SELECT * FROM hora");
        tableHeaders =  getHeaders(rows);
        res.status(200).json({
            data: rows,
            headers: tableHeaders
        })
        break;
      case 10:
        [rows] = await poll.query("SELECT * FROM imagen");
        tableHeaders =  getHeaders(rows);
        res.status(200).json({
            data: rows,
            headers: tableHeaders
        })
        break;
      case 11:
        [rows] = await poll.query("SELECT * FROM institucion");
        tableHeaders =  getHeaders(rows);
        res.status(200).json({
            data: rows,
            headers: tableHeaders
        })
        break;
      case 12:
        [rows] = await poll.query("SELECT * FROM perfil");
        tableHeaders =  getHeaders(rows);
        res.status(200).json({
            data: rows,
            headers: tableHeaders
        })
        break;
      case 13:
        [rows] = await poll.query("SELECT * FROM registro_asistencia");// registro_asistencia
        tableHeaders =  getHeaders(rows);
        res.status(200).json({
            data: rows,
            headers: tableHeaders
        })
        break;
      case 14:
        [rows] = await poll.query("SELECT * FROM usuario");
        tableHeaders =  getHeaders(rows);
        res.status(200).json({
            data: rows,
            headers: tableHeaders
        })
        break;
      default:
        res.status(404).json({
          message: `Opcion invalida`,
        });
    }
  } catch (err) {
    console.log(`Error al querer hacer consultas ${err} `);
    res.status(500).json({
      error: `Error al querer hacer consultas`,
      succes: false,
    });
  }
};
