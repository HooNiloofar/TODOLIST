import Head from "next/head";
import TodoList from "@/app/components/todoList";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>To-Do List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TodoList />
    </div>
  );
}
