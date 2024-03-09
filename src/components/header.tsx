import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export function Header() {
	return (
		<div className="container flex h-14 max-w-screen-2xl items-center">
			<div className="mr-4">
				<a className="font-bold" href="/">
					HellHub
				</a>
			</div>
			<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
				<nav className="flex items-center">
					<Button variant="ghost" size="icon">
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/pagequit/HellHub"
						>
							<GitHubLogoIcon />
							<span className="sr-only">GitHub</span>
						</a>
					</Button>
					<ModeToggle />
				</nav>
			</div>
		</div>
	);
}
