import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./style.scss";
import { Button, Stack, Typography } from "@mui/material";
import { blue, red } from "@mui/material/colors";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func
};
TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null
};

function TodoList(props) {
  const {
    id,
    title,
    status,
    onTodoClick,
    onOpenFormRemove,
    onOpenFormUpdate,
    setValueCreateUpdate
  } = props;

  // check xem click chua neu click roi thi truyen todo,idx ve cho father

  return (
    <div className="todo-list">
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography
          key={id}
          className={classnames({
            "todo-list": true,
            completed: status === "completed"
          })}
          sx={{ padding: 1 }}
          onClick={() => {
            console.log("hi");
            onTodoClick(id);
          }}
        >
          {title}
        </Typography>
        <Stack direction={"row"} spacing={1}>
          <Button
            variant="contained"
            onClick={() => {
              onOpenFormUpdate(id);
              setValueCreateUpdate(title);
            }}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "red"
            }}
            onClick={() => {
              onOpenFormRemove(id);
            }}
          >
            X
          </Button>
        </Stack>
      </Stack>
    </div>
  );
}

export default TodoList;
