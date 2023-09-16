import { useState } from "react";
import TodoList from "./TodoList";
import { Button, Stack, TextField } from "@mui/material";
import FormCreate from "./FormCreate";
import FormRemove from "./FormRemove";
import FormUpdate from "./FormUpdate";

function TodoFeatures() {
  const initTodoList = [
    { id: 1, title: "sleep", status: "new" },
    {
      id: 2,
      title: "code",
      status: "completed"
    },
    {
      id: 3,
      title: "eat ",
      status: "new"
    },
    {
      id: 4,
      title: "take ",
      status: "new"
    },
    {
      id: 5,
      title: "run ",
      status: "completed"
    }
  ];
  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState("");
  const [open, setOpen] = useState(false);
  const [openRemove, setOpenRemove] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [valueCreate, setValueCreate] = useState("");
  const [valueCreateUpdate, setValueCreateUpdate] = useState("");
  const [index, setIndex] = useState("");
  const [search, setSearch] = useState("");

  // 1. handleTodoClick o đây để cập nhập state của nó
  const handleTodoClick = (idx) => {
    const indexTodo = todoList.findIndex((todo) => todo.id === idx);
    const newTodoList = [...todoList]; //clone mảng, obj
    newTodoList[indexTodo] = {
      ...newTodoList[indexTodo], //lấy obj của thứ tự index
      status: newTodoList[indexTodo].status === "new" ? "completed" : "new"
    };
    //  update again todo list
    setTodoList(newTodoList);
  };
  // 2.handleTodoClickAll
  const handleTodoClickAll = () => {
    setFilterStatus("");
  };
  const handleTodoClickCompleted = () => {
    setFilterStatus("completed");
  };
  const handleTodoClickNew = () => {
    setFilterStatus("new");
  };
  //
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const renderCheckedFilter = todoList
    .filter(
      // filter()
      (todo) => filterStatus === "" || filterStatus === todo.status
    )
    .filter(
      (todo) =>
        search === "" || todo.title.toLowerCase().includes(search.toLowerCase())
    );
  // get value create form
  const handleGetValue = (e) => {
    setValueCreate(e.target.value);
  };
  const handleGetValueUpdate = (e) => {
    setValueCreateUpdate(e.target.value);
  };
  // handle add
  const handleAddValue = () => {
    if (valueCreate.length > 0) {
      setTodoList((todoCurr) => [
        ...todoCurr,
        {
          id: Date.now(),
          title: valueCreate,
          status: "new"
        }
      ]);
      setOpen(false);
    }
  };
  // handle remove
  const handleOpenFormRemove = (id) => {
    setIndex(id);
    setOpenRemove(true);
  };
  const handleCloseFormRemove = () => {
    setOpenRemove(false);
  };
  const handleRemove = () => {
    const indexTodo = todoList.findIndex((todo) => todo.id === index);
    const newTodoList = [...todoList];

    newTodoList.splice(indexTodo, 1);
    setTodoList(newTodoList);
    setOpenRemove(false);
  };
  // update
  const handleOpenFormUpdate = (id) => {
    const indexTodo = todoList.findIndex((todo) => todo.id === id);
    console.log(id);
    setIndex(indexTodo);
    setOpenUpdate(true);
  };
  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };
  const handleUpdate = () => {
    const newTodoList = [...todoList];
    newTodoList[index].title = valueCreateUpdate;

    setTodoList(newTodoList);
    setOpenUpdate(false);
  };

  return (
    <div>
      <Stack spacing={2}>
        <Stack direction={"row"} spacing={2}>
          <TextField
            label={"Search key"}
            onChange={(e) => setSearch(e.target.value)}
          ></TextField>
          <Button variant="contained" onClick={handleClickOpen}>
            Create
          </Button>
          {open ? (
            <FormCreate
              open={open}
              handleClose={handleClose}
              handleGetValue={handleGetValue}
              handleAddValue={handleAddValue}
            />
          ) : (
            ""
          )}
          {openRemove ? (
            <FormRemove
              openRemove={openRemove}
              handleCloseFormRemove={handleCloseFormRemove}
              handleRemove={handleRemove}
            />
          ) : (
            ""
          )}
          {openUpdate ? (
            <FormUpdate
              openUpdate={openUpdate}
              handleCloseUpdate={handleCloseUpdate}
              handleUpdate={handleUpdate}
              valueCreateUpdate={valueCreateUpdate}
              handleGetValueUpdate={handleGetValueUpdate}
            />
          ) : (
            ""
          )}
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Button variant="contained" onClick={handleTodoClickAll}>
            All
          </Button>
          <Button variant="contained" onClick={handleTodoClickCompleted}>
            Completed
          </Button>
          <Button variant="contained" onClick={handleTodoClickNew}>
            New
          </Button>
        </Stack>

        {renderCheckedFilter.map(({ id, title, status }) => (
          <TodoList
            key={id}
            id={id}
            title={title}
            status={status}
            setValueCreateUpdate={setValueCreateUpdate}
            onTodoClick={handleTodoClick}
            onOpenFormRemove={handleOpenFormRemove}
            onOpenFormUpdate={handleOpenFormUpdate}
          />
        ))}
      </Stack>
    </div>
  );
}

export default TodoFeatures;
