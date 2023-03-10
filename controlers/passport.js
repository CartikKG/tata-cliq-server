const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID ="523132920496-o6eup09mmddj5rjqm3559jt1r27jshq5.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GOOGLE_CLIENT_ID_2 ="523132920496-dulrr5tn4se8mbk03prdip2k01ta3q9l.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET_2 = "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";

// GITHUB_CLIENT_ID = "your id";
// GITHUB_CLIENT_SECRET = "your id";

// FACEBOOK_APP_ID = "your id";
// FACEBOOK_APP_SECRET = "your id";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID_2,
      clientSecret: GOOGLE_CLIENT_SECRET_2,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

// passport.use(
//   new GithubStrategy(
//     {
//       clientID: GITHUB_CLIENT_ID,
//       clientSecret: GITHUB_CLIENT_SECRET,
//       callbackURL: "/auth/github/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       done(null, profile);
//     }
//   )
// );

// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: FACEBOOK_APP_ID,
//       clientSecret: FACEBOOK_APP_SECRET,
//       callbackURL: "/auth/facebook/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       done(null, profile);
//     }
//   )
// );

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});