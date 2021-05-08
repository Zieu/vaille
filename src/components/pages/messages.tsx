import Link from "next/link";

const Messages = () => {
	return (
		<div className="h-full min-h-screen">
			<h2 className="title">This is liked page</h2>
			<Link href="/">
				<a className="text-purple-700 underline bg-yellow-500 dark:bg-red-700">go to home</a>
			</Link>
		</div>
	);
};

export default Messages;
