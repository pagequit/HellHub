import { useState } from "react";
import { Header } from "./components/header";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

function App() {
	const [count, setCount] = useState(0);

	return (
		<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
			<Header />
			<div className="container">
				<Card>
					<CardHeader>
						<CardTitle>HellHub</CardTitle>
					</CardHeader>
					<CardContent>
						<Button onClick={() => setCount((count) => count + 1)}>
							Count is {count}
						</Button>
						<p>
							Edit <code>src/App.tsx</code> and save to test HMR
						</p>
						<p className="read-the-docs">
							Click on the Vite and React logos to learn more
						</p>
					</CardContent>
				</Card>
			</div>
		</ThemeProvider>
	);
}

export default App;
