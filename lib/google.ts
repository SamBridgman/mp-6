const AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";
const TOKEN_URL = "https://oauth2.googleapis.com/token";

export type GoogleUser = {
    sub: string;
    email: string;
    name: string;
    picture: string;
}

export function getAuthUrl(): string {
    const params = new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID!,
        redirect_uri: process.env.GOOGLE_REDIRECT_URI!,
        response_type: 'code',
        scope: 'openid email profile',
    });

    return `${AUTH_URL}?${params}`;
}

export async function fetchUser(code: string): Promise<GoogleUser> {
    const res = await fetch(TOKEN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            code,
            client_id: process.env.GOOGLE_CLIENT_ID!,
            client_secret: process.env.GOOGLE_CLIENT_SECRET!,
            redirect_uri: process.env.GOOGLE_REDIRECT_URI!,
            grant_type: "authorization_code",
        }),
    });
    if (!res.ok) throw new Error("Token exchange failed");

    const { id_token } = await res.json();
    return JSON.parse(Buffer.from(id_token.split(".")[1], "base64url").toString());
}