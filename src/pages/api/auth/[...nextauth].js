import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import api from "../../../utils/api";

const providers = [
  Credentials({
    name: "Credentials",
    authorize: async (credentials) => {
      try {
        const user = await api.post("/users/login", {
          email: credentials.email,
          password: credentials.password,
        });

        if (user) {
          api.defaults.headers.Authorization = `Bearer ${user.data.token}`;
          return { status: "success", data: user.data };
        }
      } catch (e) {
        const errorMessage = e.response.data.message;
        // Redirecting to the login page with error messsage in the URL
        throw new Error(errorMessage + "&email=" + credentials.email);
      }
    },
  }),
];

const callbacks = {
  /*
  |--------------------------------------------------------------------------
  | Callback : JWT
  |--------------------------------------------------------------------------
  */
  async jwt({ token, user }) {
    if (user) {
      token.user = user.data.data.user;
      token.accessToken = user.data.token;
    }

    return token;
  },

  /*
  |--------------------------------------------------------------------------
  | Callback : Session
  |--------------------------------------------------------------------------
  */
  async session({ session, token }) {
    session.user = token.user;
    session.accessToken = token.accessToken;

    return session;
  },
};

const options = {
  providers,
  callbacks,
  session: {
    secret: process.env.JWT_SECRET,
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  pages: {
    signIn: "/",
    error: "/", // Changing the error redirect page to our custom login page
    signOut: "/",
  },
};

export default (req, res) => NextAuth(req, res, options);
