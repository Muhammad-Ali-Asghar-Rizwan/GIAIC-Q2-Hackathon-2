import NextAuth, {CredentialsSignin} from "next-auth";
import GooglePro from "next-auth/providers/google";
import CretdentialProvider from "next-auth/providers/credentials";
interface Credentials {
    email: string;
    password: string;
}

interface User {
    email: string;
    id: string;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        GooglePro({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CretdentialProvider({
            name: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },
            authorize: async (credentials: Partial<Record<"email" | "password", unknown>>): Promise<User | null> => {
                const { email, password } = credentials;
                console.log(email, password);

                if (typeof email === "string") throw new CredentialsSignin("ertzu");

                const user: User = { email: "sdsd", id: "dfd" };

                if (password !== "password") {
                    throw new CredentialsSignin("password does not match password");
                } else {
                    return user;
                }
            },
        }),
    ],
});