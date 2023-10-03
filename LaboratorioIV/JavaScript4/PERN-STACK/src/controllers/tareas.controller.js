import { pool } from '../db.js';

export const listarTareas = async (req, res) => {
    const result = await pool.query('SELECT * FROM tareas');
    return res.json(result.rows)
}

export const listarTarea = async (req, res) => {

    const result = await pool.query(`SELECT * FROM tareas WHERE id = $1`, [req.params.id]);
    if (result.rowCount === 0) {
        return res.status(404).json({ message: 'la tarea no existe' });
    }
    return res.json(result.rows[0])
};

export const crearTarea = async (req, res, next) => {
    const { title, description } = req.body;

    try {
        const result = await pool.query('INSERT INTO tareas (title, description) VALUES ($1, $2) RETURNING *', [title, description]);
        res.json(result.rows[0])
    } catch (e) {
        if (e.code === '23505') {
            return res.status(409).json({
                message: 'Ya existe ese title'
            })
        }
        console.log(e);
        next(e);
    }
}


export const actualizarTarea = async (req, res) => {
    const { title, description } = req.body;
    const result = await pool.query('UPDATE tareas SET title = $1, description = $2 WHERE id = $3 RETURNING *', [title, description, req.params.id]);
    if (result.rowCount === 0) {
        return res.status(404).json({ message: 'no existe tarea con ese id' });
    }
    return res.json(result.rows[0]);
};

export const eliminarTarea = async (req, res) => {
    const result = await pool.query(`DELETE FROM tareas WHERE id = $1`, [req.params.id]);
    if (result.rowCount === 0) {
        return res.status(404).json({ message: 'la tarea no existe' });
    }
    return res.sendStatus(204); //bien pero no devuelve nada al front
};