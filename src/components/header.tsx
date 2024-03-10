import { GitHubLogoIcon } from "@radix-ui/react-icons";
import type { Session } from "@supabase/supabase-js";
import { LogOut } from "lucide-react";
import { useSupabase } from "../lib/useSupabase";
import { ModeToggle } from "./mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const supabase = useSupabase();

function User({ session }: { session: Session | null }) {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Avatar role="button" className="ml-1">
					<AvatarImage
						src={
							session?.user.user_metadata.avatar_url ??
							"https://cdn.discordapp.com/embed/avatars/2.png"
						}
					/>
					<AvatarFallback>HU</AvatarFallback>
				</Avatar>
			</PopoverTrigger>
			<PopoverContent className="flex gap-4 justify-between items-center py-2 px-4 w-auto">
				<div className="font-medium leading-none">
					{session?.user.user_metadata.full_name ?? "HellUser"}
				</div>
				<Button variant="outline" onClick={() => supabase.auth.signOut()}>
					<span className="font-semibold">Sign out</span>
					<LogOut className="ml-2 h-[1.2rem] w-[1.2rem]" />
				</Button>
			</PopoverContent>
		</Popover>
	);
}

export function Header({ session }: { session: Session | null }) {
	return (
		<div className="flex py-2 px-6 items-center border-b mb-4">
			<div className="mr-4">
				<a className="font-bold" href="/">
					HellHub
				</a>
			</div>
			<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
				<nav className="flex items-center gap-1">
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/pagequit/HellHub"
					>
						<Button variant="ghost" size="icon">
							<GitHubLogoIcon />
						</Button>
						<span className="sr-only">GitHub</span>
					</a>
					<ModeToggle />
					<User session={session} />
				</nav>
			</div>
		</div>
	);
}
