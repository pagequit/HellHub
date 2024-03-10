import type { Session } from "@supabase/supabase-js";
import { LogIn } from "lucide-react";
import React from "react";
import { Header } from "./components/header";
import { ThemeProvider } from "./components/theme-provider";
import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "./components/ui/alert-dialog";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { useSession } from "./lib/useSession";
import { useSupabase } from "./lib/useSupabase";

const supabase = useSupabase();

export const SessionContext = React.createContext<Session | null>(null);

export function SignInAlert({ session }: { session: Session | null }) {
	return (
		<AlertDialog open={session === null}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Sign in to continue</AlertDialogTitle>
					<AlertDialogDescription>
						You need to authenticate with Discord to continue.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<Button
						onClick={() =>
							supabase.auth.signInWithOAuth({ provider: "discord" })
						}
					>
						<span className="font-semibold">Sign in</span>
						<LogIn className="h-[1.2rem] w-[1.2rem] ml-2" />
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}

function App() {
	const session = useSession();

	return (
		<SessionContext.Provider value={session}>
			<ThemeProvider defaultTheme="system" storageKey="ui-theme">
				<Header session={session} />
				<div className="container">
					<Card>
						<CardHeader>
							<CardTitle>HellHub</CardTitle>
						</CardHeader>
						<CardContent>
							{session === null ? (
								<div>Loading...</div>
							) : (
								<div>Logged in as {session.user.user_metadata.full_name}</div>
							)}
						</CardContent>
					</Card>
				</div>
				<SignInAlert session={session} />
			</ThemeProvider>
		</SessionContext.Provider>
	);
}

export default App;
