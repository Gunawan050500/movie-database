import { useState, useEffect } from "react";

function Counter() {
  const [angka, setAngka] = useState(0);
  function addAngka() {
    setAngka(angka + 1);
    console.log("## angka: ", angka);
  }

  useEffect(
    function () {
      console.log("## component di-mount/di-update");

      //Akses DOM
      document.title = `Angka: ${angka}`;
    },
    [angka]
  );

  return (
    <div>
      <p>Hasil: {angka}</p>
      <button onClick={addAngka}>Add</button>
    </div>
  );
}

export default Counter;
