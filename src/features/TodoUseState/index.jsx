// 42 ReactJs HauNguyen
//Các bạn nhớ nè
// useState() giúp functional component có thể dùng state.
// useState() trả về một mảng 2 phần tử [name, setName].
// useState() áp dụng replacing thay vì merging như bên class component.
// Initial state callback chỉ thực thi 1 lần đầu.

import React from "react";

function ToDoUseState() {
  return (
    <div>
      <ul className="todo-list">
        Usstate
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default ToDoUseState;
