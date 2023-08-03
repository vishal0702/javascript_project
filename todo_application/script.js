const add_todo = () => {
  let title = document.getElementById("title").value;
  let desc = document.getElementById("desc").value;

  //localStorage.setItem(todos, [{title,desc},{title,desc},{title,desc}]);

  let todos = [];

  let localTodos = localStorage.getItem("todos");

  if (localTodos != null) {
    todos = JSON.parse(localTodos);
  }

  let todoObject = {
    title: title,
    desc: desc,
    id: Math.trunc(Math.random() * 1000),
  };

  todos.push(todoObject);
  localStorage.setItem("todos", JSON.stringify(todos));
  show_todo();
};

//Show the added todos
const show_todo = () =>
{
  let todoString = localStorage.getItem("todos");

  let content = "";

  if (todoString == null) {
    //no todo
    content += "<h3 class='text-danger text-center'>No TODO to Show!</h3>";
  } else {
    let todos = JSON.parse(todoString);

    for (let todo of todos.reverse()) {
      content += `
        <div class='card mt-2'>
            <div class='card-body'>
                <h3>${todo.title}</h3>
                <p>${todo.desc}</p>
            </div>
        </div>
        `;
    }
  }

  document.getElementById("main-content").innerHTML= content;
}

show_todo();