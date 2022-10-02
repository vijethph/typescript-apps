import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios
  .get(url)
  .then((response) => {
    const todo = response.data as Todo;

    logTodo(todo.id, todo.title, todo.completed);
  })
  .catch((error) => {
    console.error(error);
  });

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`todo with id: ${id}
    has a title of ${title}
    and it was really completed? ${completed}`);
};
