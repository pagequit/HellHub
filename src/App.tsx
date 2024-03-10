import type { Session } from "@supabase/supabase-js";
import React from "react";
import { Header } from "./components/header";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { useSession } from "./lib/useSession";
import { useSupabase } from "./lib/useSupabase";

const supabase = useSupabase();

export const SessionContext = React.createContext<Session | null>(null);

function Content({ session }: { session: Session | null }) {
	if (session) {
		return <div>Logged in as {session.user.user_metadata.full_name}</div>;
	}
	return (
		<Button
			onClick={() => supabase.auth.signInWithOAuth({ provider: "discord" })}
		>
			auth
		</Button>
	);
}

function App() {
	const session = useSession();

	return (
		<SessionContext.Provider value={session}>
			<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
				<Header />
				<div className="container">
					<Card>
						<CardHeader>
							<CardTitle>HellHub</CardTitle>
						</CardHeader>
						<CardContent>
							<Content session={session} />
						</CardContent>
					</Card>
				</div>
			</ThemeProvider>
		</SessionContext.Provider>
	);
}

export default App;
