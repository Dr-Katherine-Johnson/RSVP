const execSQL = require('exec-sql');
const path = require('path');

const postSchemaInitiate = async () => {
  console.log('post schema initiated');
  execSQL.connect({
    database: 'meetup',
    user: 'root',
    password: 'Fila'
  });

  await new Promise((resolve, reject) => {
    execSQL.executeFile(
      path.join(__dirname, '/schemas/postSchema.sql'),
      function(err) {
        if (err) {
          console.log('err in execSql preSchema: ', err);
        } else {
          execSQL.disconnect();
          resolve(console.log('postSchema done!'));
        }
      }
    );
  });
};

postSchemaInitiate();
