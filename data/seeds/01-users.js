
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'johnDoe',
          password: 'password'
        },
        {
          username: 'jane',
          password: 'abc123'
        }
      ]);
    });
};
