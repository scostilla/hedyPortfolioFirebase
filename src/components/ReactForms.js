import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../App.css";

export const ReactForms = () => {
    
  const [getMascotImage, setMascotImage] = useState(
    "https://images.kerrangcdn.com/images/Iron-Maiden-Live-After-Death.jpg?auto=compress&fit=max&w=1200"
  );
  const [getMascotName, setMascotName] = useState("Eddie From Iron Maiden");
  const [staticURL, setStaticURL] = useState("");
  const [staticName, setStaticName] = useState("");
  const [customName, setCustomName] = useState("");
  const [customUrl, setCustomUrl] = useState("");

  const handleChange = (event) => {
    
    switch (event.target.value) {
      case "https://images.kerrangcdn.com/images/Iron-Maiden-Live-After-Death.jpg?auto=compress&fit=max&w=1200":
        setMascotName("Eddie From Iron Maiden");
        break;
      case "https://images.kerrangcdn.com/images/Megadeth-Rust-In-Peace.jpg?auto=compress&fit=max&w=1200":
        setMascotName("Vic Rattlehead From Megadeth");
        break;
      case "https://images.kerrangcdn.com/images/Anthrax-Not-Man.jpg?auto=compress&fit=max&w=1200":
        setMascotName("Not Man From Anthrax");
        break;
      case "https://images.kerrangcdn.com/images/snaggletooth.jpg?auto=compress&fit=max&w=1200":
        setMascotName("Snaggletooth From Motörhead");
        break;
      default:
        setMascotImage(
          "https://images.kerrangcdn.com/images/Iron-Maiden-Live-After-Death.jpg?auto=compress&fit=max&w=1200"
        );
        setMascotName("Eddie From Iron Maiden");
        break;
    }
    setMascotImage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (customUrl === "") {
      setStaticURL(getMascotImage);
      setStaticName(getMascotName);
    } else {
      setStaticURL(customUrl);
      setStaticName(customName);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Seleccione una "Mascota"</h1>
        <select onChange={handleChange}>
          <option value="https://images.kerrangcdn.com/images/Iron-Maiden-Live-After-Death.jpg?auto=compress&fit=max&w=1200">
            Eddie -Iron Maiden
          </option>
          <option value="https://images.kerrangcdn.com/images/Megadeth-Rust-In-Peace.jpg?auto=compress&fit=max&w=1200">
            Vic Rattlehead - Megadeth
          </option>
          <option value="https://images.kerrangcdn.com/images/Anthrax-Not-Man.jpg?auto=compress&fit=max&w=1200">
            Not Man - Anthrax
          </option>
          <option value="https://images.kerrangcdn.com/images/snaggletooth.jpg?auto=compress&fit=max&w=1200">
            Snaggletooth - Motörhead
          </option>
        </select>
        <h5>Si desea mostrar otra imagen, complete los campos siguientes:</h5>
        <label>Nombre de la imagen</label>
        <input type="text" onChange={(e) => setCustomName(e.target.value)} />
        <br />
        <label>URL de la imagen</label>
        <input type="text" onChange={(e) => setCustomUrl(e.target.value)} />
        <br />
        <input type="submit" value="Mostrar" />
      </form>
      <br />
      <h1>{staticName}</h1>
      <img src={staticURL} className="image" />
    </div>
  );
  }
  
  