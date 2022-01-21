module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '30d50fa38069dd0f684eb9c843078e0a'),
  },
});
