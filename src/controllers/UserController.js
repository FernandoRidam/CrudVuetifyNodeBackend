const conn = require('../config/database');

module.exports = {
  async create( req, res ) {
    conn.query(`INSERT INTO users SET ?`, [ req.body ], err =>{
      if( err ) {
        return res.json( err );
      }

      res.json({ status: 'Created' });
    });
  },

  async read( req, res ) {
    conn.query('SELECT * FROM users', ( err, rows ) => {
      if( err ) {
        res.json( err );
      }

      res.json( rows );
    });
  },

  async update( req, res ) {
    const { id } = req.params;
    const { name } = req.body;

    conn.query('UPDATE users SET name = ? WHERE id = ?', [ name, id ], ( err, result ) => {
      if( err ) {
        res.json( err );
      }

      res.json( result );
    });
  },

  async delete( req, res ) {
    const { id } = req.params;

    conn.query('DELETE FROM users WHERE id = ?', [ id ], ( err, result ) => {
      if( err ) {
        res.json( err );
      }

      res.json( result );
    });
  },
};