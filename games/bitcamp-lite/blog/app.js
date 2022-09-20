import express from 'express';
import pg from 'pg'

const {Pool} = pg;
const pool = new Pool ({
    'user': 'postgres',
    'host': 'localhost',
    'database': "blog",
    'password': "s123",
    'port': 5432
});


const app = express();
app.get("/posts", async (req, res) => {
    const client = await pool.connect();
    const result = await client.query({
        text: 'SELECT posts.id, posts.title, tags.name FROM posts INNER JOIN tags ON posts.tag_id = tags.id;'
    });
    console.log(result.rows);
    //res.send(JSON.stringify(result.rows));
    res.json(result.rows);
});
app.listen(3001, () => {
    console.log("app started on 3001 port");
});