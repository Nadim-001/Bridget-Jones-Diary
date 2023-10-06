const db = require ('../database/connect');

class Entry {
    constructor(entry) {
        this.entries_id = entry.entries_id,
        this.date = entry.entries_date,
        this.name = entry.entries_name,
        this.description = entry.entries_description
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM entries");

        if (response.rows.length === 0) {
            throw new Error("No entries entered.");
        }

        return response.rows.map(item => new Entry(item));
    }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM entries where entries_id = $1;", [id]);

        if (response.rows.length != 1) {
            throw new Error("Unable to locate entry.");
        }

        return new Entry(response.rows[0]);
    }

    static async create(data) {
        const { date, name, description } = data;
        console.log(data);
        const response = await db.query("INSERT INTO entries (date, name, description) VALUES ($1, $2, $3) RETURNING *;", [date, name, description]);
        const entryId = response.rows[0].entries_id;
        const newEntry = await Entry.getOneById(entryId);
        return new Entry(newEntry);
    }

    async update(data) {

    }

    async destroy() {
        const response = await db.query("DELETE FROM entries WHERE entries_name = $1 RETURNING *;", [this.name]);

        return new Entry(response.rows[0]);
    }
}

module.exports = Entry;