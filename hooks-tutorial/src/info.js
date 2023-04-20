import { useState, useEffect } from "react";

const Info = () => {
  const [name, SetName] = useState("");
  const [nickName, SetNickName] = useState("");

  useEffect(() => {
    console.log("렌더링이 완료 되었습니다.");
    console.log({
      name,
      nickName,
    });
  });

  const onChangeName = (e) => {
    SetName(e.target.value);
  };

  const onChangeNickName = (e) => {
    SetNickName(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickName} onChange={onChangeNickName} />
      </div>
      <div>
        <div>
          <b>이름 : </b> {name}
        </div>
        <div>
          <b>닉네임 : </b> {nickName}
        </div>
      </div>
    </div>
  );
};

export default Info;
